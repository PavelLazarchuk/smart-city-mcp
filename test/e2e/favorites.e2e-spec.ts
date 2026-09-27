import { errorOf, startHarness, structured, textOf } from './support/harness.js';
import { IDS, startStubApi, type Stub } from './support/stub-api.js';

describe('favorites', () => {
    let stub: Stub;

    beforeEach(async () => {
        stub = await startStubApi();
    });

    afterEach(async () => {
        await stub.close();
    });

    it('saves a service the person approved, lists it by name and removes it again', async () => {
        const asked: string[] = [];
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: (message) => {
                asked.push(message);

                return { confirm: true };
            },
        });

        try {
            const added = await harness.call('add_favorite', { type: 'service', id: IDS.service });

            expect(added.isError).toBeFalsy();
            expect(asked[0]).toContain('Chest X-ray');
            expect(stub.state.favorites).toEqual([{ type: 'service', id: IDS.service, available: true }]);

            const listed = structured<{ items: { id: string; label: string; available: boolean }[] }>(
                await harness.call('list_favorites', {}),
            );

            expect(listed.items).toEqual([
                expect.objectContaining({ id: IDS.service, label: 'Chest X-ray', available: true }),
            ]);

            const removed = await harness.call('remove_favorite', { type: 'service', id: IDS.service });

            expect(removed.isError).toBeFalsy();
            expect(stub.state.favorites).toEqual([]);
        } finally {
            await harness.close();
        }
    });

    it('sends nothing until the person approves when the app cannot ask them', async () => {
        const harness = await startHarness({ apiUrl: stub.url, write: true, session: {} });

        try {
            const first = await harness.call('add_favorite', {
                type: 'organization',
                id: IDS.organization,
            });

            expect(errorOf(first).code).toBe('CONFIRMATION_REQUIRED');
            expect(textOf(first)).toContain('City Clinic');
            expect(stub.state.calls).not.toContain(`PUT /me/favorites/organization/${IDS.organization}`);

            const second = await harness.call('add_favorite', {
                type: 'organization',
                id: IDS.organization,
                confirm: true,
            });

            expect(second.isError).toBeFalsy();
            expect(stub.state.calls).toContain(`PUT /me/favorites/organization/${IDS.organization}`);
        } finally {
            await harness.close();
        }
    });

    it('refuses an unknown service before asking the person anything', async () => {
        let asked = 0;
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: () => {
                asked += 1;

                return { confirm: true };
            },
        });

        try {
            const result = await harness.call('add_favorite', {
                type: 'service',
                id: '64b7f0c2a1b2c3d4e5f6ffff',
            });

            expect(result.isError).toBe(true);
            expect(asked).toBe(0);
        } finally {
            await harness.close();
        }
    });

    it('pages through more favorites than one call returns', async () => {
        stub.state.favorites = Array.from({ length: 3 }, () => ({
            type: 'organization',
            id: IDS.organization,
            available: true,
        }));
        const harness = await startHarness({ apiUrl: stub.url, session: {} });

        try {
            const first = await harness.call('list_favorites', { limit: 2 });

            expect(structured<{ total: number; items: unknown[] }>(first)).toMatchObject({ total: 3 });
            expect(textOf(first)).toContain('page 2');

            const second = await harness.call('list_favorites', { limit: 2, page: 2 });

            expect(structured<{ items: unknown[] }>(second).items).toHaveLength(1);
            expect(textOf(second)).not.toContain('page 3');
        } finally {
            await harness.close();
        }
    });

    it('says why a saved service is not on offer instead of dropping it', async () => {
        stub.state.favorites = [{ type: 'service', id: IDS.service, available: false }];
        const harness = await startHarness({ apiUrl: stub.url, session: {} });

        try {
            const listed = structured<{
                items: { available: boolean; label: string | null; note?: string }[];
            }>(await harness.call('list_favorites', {}));

            expect(listed.items[0]).toMatchObject({ available: false, label: null });
            expect(listed.items[0]?.note).toMatch(/unpublished or removed/);
        } finally {
            await harness.close();
        }
    });
});
