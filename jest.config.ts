import type { Config } from 'jest';

const transform: Config['transform'] = {
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json', useESM: true, diagnostics: false }],
};

const moduleNameMapper = { '^(\\.{1,2}/.*)\\.js$': '$1' };

const config: Config = {
    rootDir: '.',
    testEnvironment: 'node',
    testTimeout: 60_000,
    cacheDirectory: '.jest-cache',
    extensionsToTreatAsEsm: ['.ts'],
    projects: [
        {
            displayName: 'unit',
            testEnvironment: 'node',
            testMatch: ['<rootDir>/test/tools/**/*.spec.ts', '<rootDir>/test/contract/**/*.spec.ts'],
            extensionsToTreatAsEsm: ['.ts'],
            moduleNameMapper,
            transform,
        },
        {
            displayName: 'e2e',
            testEnvironment: 'node',
            testMatch: ['<rootDir>/test/e2e/**/*.e2e-spec.ts'],
            extensionsToTreatAsEsm: ['.ts'],
            moduleNameMapper,
            transform,
        },
    ],
};

export default config;
