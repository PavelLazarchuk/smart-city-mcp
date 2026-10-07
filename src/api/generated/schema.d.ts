export interface paths {
    "/api/v1/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SettingsController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["SettingsController_update"];
        trace?: never;
    };
    "/api/v1/settings/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SettingsController_getOne"];
        put?: never;
        post?: never;
        delete: operations["SettingsController_reset"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/analytics/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AnalyticsController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/health/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["HealthController_live"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/health/ready": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["HealthController_ready"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/health/deps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["HealthController_deps"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/health/jobs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["HealthController_jobsStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/health/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["HealthController_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UsersController_list"];
        put?: never;
        post: operations["UsersController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UsersController_getOne"];
        put?: never;
        post?: never;
        delete: operations["UsersController_remove"];
        options?: never;
        head?: never;
        patch: operations["UsersController_update"];
        trace?: never;
    };
    "/api/v1/users/{id}/organizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["UsersController_setOrganizations"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/{id}/bookings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UsersController_bookings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/channel-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ChannelTemplatesController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/channel-templates/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ChannelTemplatesController_getOne"];
        put: operations["ChannelTemplatesController_save"];
        post?: never;
        delete: operations["ChannelTemplatesController_reset"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/channel-templates/{key}/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ChannelTemplatesController_preview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/news": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["NewsController_list"];
        put?: never;
        post: operations["NewsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/news/rss": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["NewsController_rss"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/news/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["NewsController_getOne"];
        put?: never;
        post?: never;
        delete: operations["NewsController_remove"];
        options?: never;
        head?: never;
        patch: operations["NewsController_update"];
        trace?: never;
    };
    "/api/v1/images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ImagesController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_listImages"];
        put?: never;
        post: operations["ImagesController_upload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/images/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ImagesController_remove"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/archives": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ArchivesController_list"];
        put?: never;
        post: operations["ArchivesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/archives/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ArchivesController_getOne"];
        put?: never;
        post?: never;
        delete: operations["ArchivesController_remove"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_register"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/otp/request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_requestOtp"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/otp/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_verifyOtp"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_refresh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_sessions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/sessions/{sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["AuthController_revokeSession"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_logout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/logout-all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AuthController_logoutAll"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AuthController_me"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auth/password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["AuthController_changePassword"];
        trace?: never;
    };
    "/api/v1/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ProfileController_update"];
        trace?: never;
    };
    "/api/v1/me/phone/code": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ProfileController_requestPhoneCode"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_list"];
        put?: never;
        post: operations["OrganizationsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/nearby": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_nearby"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_getOne"];
        put?: never;
        post?: never;
        delete: operations["OrganizationsController_remove"];
        options?: never;
        head?: never;
        patch: operations["OrganizationsController_update"];
        trace?: never;
    };
    "/api/v1/organizations/{id}/news": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_listNews"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/infosections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_listInfoSections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_listCategories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_listServices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/services/{slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_serviceBySlug"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/news/{slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationsController_newsBySlug"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/news/order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["OrganizationsController_reorderNews"];
        trace?: never;
    };
    "/api/v1/organizations/{id}/infosections/order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["OrganizationsController_reorderInfoSections"];
        trace?: never;
    };
    "/api/v1/organizations/{id}/categories/order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["OrganizationsController_reorderCategories"];
        trace?: never;
    };
    "/api/v1/organizations/{id}/services/order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["OrganizationsController_reorderServices"];
        trace?: never;
    };
    "/api/v1/infosections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["InfoSectionsController_list"];
        put?: never;
        post: operations["InfoSectionsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/infosections/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["InfoSectionsController_getOne"];
        put?: never;
        post?: never;
        delete: operations["InfoSectionsController_remove"];
        options?: never;
        head?: never;
        patch: operations["InfoSectionsController_update"];
        trace?: never;
    };
    "/api/v1/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CategoriesController_list"];
        put?: never;
        post: operations["CategoriesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CategoriesController_getOne"];
        put?: never;
        post?: never;
        delete: operations["CategoriesController_remove"];
        options?: never;
        head?: never;
        patch: operations["CategoriesController_update"];
        trace?: never;
    };
    "/api/v1/categories/{id}/services/order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["CategoriesController_reorderServices"];
        trace?: never;
    };
    "/api/v1/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ServicesController_list"];
        put?: never;
        post: operations["ServicesController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/nearby": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ServicesController_nearby"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ServicesController_getOne"];
        put?: never;
        post?: never;
        delete: operations["ServicesController_remove"];
        options?: never;
        head?: never;
        patch: operations["ServicesController_update"];
        trace?: never;
    };
    "/api/v1/services/{id}/availability": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ServicesController_availability"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/slots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ServicesController_slotCandidates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ServicesController_history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["ServicesController_setStatus"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/restore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ServicesController_restore"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ServicesController_clone"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ServicesController_addOption"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/options/{option_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ServicesController_removeOption"];
        options?: never;
        head?: never;
        patch: operations["ServicesController_updateOption"];
        trace?: never;
    };
    "/api/v1/services/{id}/options/{option_id}/recurrence": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["ServicesController_setRecurrence"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/options/{option_id}/slots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ServicesController_addSlot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/options/{option_id}/slots/{slot_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ServicesController_removeSlot"];
        options?: never;
        head?: never;
        patch: operations["ServicesController_updateSlot"];
        trace?: never;
    };
    "/api/v1/services/{id}/options/{option_id}/slots/{slot_id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ServicesController_closeSlot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/options/{option_id}/slots/{slot_id}/move": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ServicesController_moveSlot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/bookings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BookingsController_forService"];
        put?: never;
        post: operations["ServicesController_createBooking"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/bookings/{booking_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ServicesController_cancelBooking"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{id}/waitlist": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ServicesController_waitlistForService"];
        put?: never;
        post: operations["ServicesController_joinWaitlist"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BookingsController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookings/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BookingsController_stats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookings/export.csv": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BookingsController_export"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookings/check-in": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BookingsController_checkInByCode"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/bookings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BookingsController_own"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/bookings.ics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BookingsController_feed"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/calendar-token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BookingsController_issueCalendarToken"];
        delete: operations["BookingsController_revokeCalendarToken"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/waitlist": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BookingsController_ownWaitlist"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/waitlist/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["BookingsController_leaveWaitlist"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookings/{booking_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BookingsController_getOne"];
        put?: never;
        post?: never;
        delete: operations["BookingsController_cancel"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookings/{booking_id}/calendar.ics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BookingsController_calendarOf"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookings/{booking_id}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["BookingsController_setStatus"];
        trace?: never;
    };
    "/api/v1/bookings/{booking_id}/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BookingsController_confirm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookings/{booking_id}/check-in": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BookingsController_checkIn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/bookings/{booking_id}/reschedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BookingsController_reschedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/suspensions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SuspensionsController_list"];
        put?: never;
        post: operations["SuspensionsController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/suspensions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SuspensionsController_getOne"];
        put?: never;
        post?: never;
        delete: operations["SuspensionsController_lift"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/favorites": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FavoritesController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/favorites/{type}/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["FavoritesController_add"];
        post?: never;
        delete: operations["FavoritesController_remove"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/sms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SmsController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/sms/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["SmsController_sendTest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WebhooksController_list"];
        put?: never;
        post: operations["WebhooksController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WebhooksController_getOne"];
        put?: never;
        post?: never;
        delete: operations["WebhooksController_remove"];
        options?: never;
        head?: never;
        patch: operations["WebhooksController_update"];
        trace?: never;
    };
    "/api/v1/webhooks/{id}/rotate-secret": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WebhooksController_rotate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/webhooks/{id}/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WebhooksController_test"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/outbox/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["WebhooksController_events"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/outbox/events/{id}/replay": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["WebhooksController_replay"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["NotificationsController_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/notifications/unread-count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["NotificationsController_unreadCount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/notifications/read-all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["NotificationsController_readAll"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/notifications/{id}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["NotificationsController_read"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["OrganizationMessagesController_send"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organizations/{id}/clients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationMessagesController_clients"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        SettingsResourceDto: {
            /** Format: date-time */
            updated_at: string | null;
            items: {
                key: string;
                group: string;
                value: unknown;
                /** @enum {string} */
                source: "db" | "env";
                env_value: unknown;
                schema: {
                    [key: string]: unknown;
                };
                description: string;
            }[];
            warnings?: {
                code: string;
                message: string;
                user_ids?: string[];
            }[];
        };
        SettingResourceDto: {
            key: string;
            group: string;
            value: unknown;
            /** @enum {string} */
            source: "db" | "env";
            env_value: unknown;
            schema: {
                [key: string]: unknown;
            };
            description: string;
        };
        UpdateSettingsDto: {
            values: {
                [key: string]: unknown;
            };
        };
        AnalyticsEventResponseDto: {
            id: string;
            /** @enum {string} */
            type: "organizations.listed" | "organization.viewed" | "auth.otp_requested" | "auth.otp_verified" | "booking.created" | "booking.cancelled";
            user_id?: string;
            user_role?: string;
            user_name?: string;
            user_phone?: string;
            organization_id?: string;
            organization_label?: string;
            service_id?: string;
            service_label?: string;
            service_type?: string;
            child_type?: string;
            date?: string;
            time?: string;
            request_id?: string;
            source?: string;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        UserResponseDto: {
            id: string;
            login?: string;
            name?: string;
            phone?: string;
            email?: string;
            /** @enum {string} */
            role: "common-user" | "common-admin" | "super-admin" | "operator";
            organization_ids: string[];
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        CreateUserDto: {
            login?: string;
            password?: string;
            phone?: string;
            email?: string;
            name?: string;
            /** @enum {string} */
            role: "common-user" | "common-admin" | "super-admin" | "operator";
            organization_ids?: string[];
        };
        SetUserOrganizationsDto: {
            organization_ids: string[];
        };
        UserBookingResponseDto: {
            id: string;
            service_id: string;
            organization_id: string;
            option_id: string;
            slot_id: string;
            child_type: string;
            /** @default  */
            service_label: string;
            date?: string;
            time?: string;
            /** @default  */
            info: string;
            /** @default confirmed */
            status: string;
            /** Format: date-time */
            created_at: string;
        };
        ChannelTemplateResourceDto: {
            /** @enum {string} */
            key: "booking_created_mail" | "booking_reminder_mail" | "booking_reminder_sms" | "booking_reminder_viber" | "waitlist_available_mail" | "waitlist_available_sms" | "waitlist_available_viber" | "booking_cancelled_mail" | "booking_cancelled_sms" | "booking_cancelled_viber" | "booking_moved_mail" | "booking_moved_sms" | "booking_moved_viber" | "booking_suspended_mail" | "booking_suspended_sms" | "booking_suspended_viber" | "callback_due_mail";
            event: string;
            /** @enum {string} */
            channel: "mail" | "sms" | "viber";
            variables: string[];
            custom: boolean;
            subject: string[];
            body: string;
            default_subject: string[];
            default_body: string;
            /** Format: date-time */
            updated_at: string | null;
            updated_by: string[];
        };
        SaveChannelTemplateDto: {
            subject?: string | null;
            body: string;
        };
        RenderedTemplateDto: {
            subject: string[];
            body: string;
        };
        PreviewChannelTemplateDto: {
            subject?: string | null;
            body?: string;
        };
        NewsResponseDto: {
            id: string;
            organization_id: string;
            position: number;
            label: string;
            slug?: string;
            rubric?: string;
            enabled: boolean;
            /** Format: date-time */
            date: string;
            /**
             * Format: date-time
             * @default null
             */
            publish_at: string | null;
            is_main: boolean;
            is_offer: boolean;
            /** Format: date-time */
            expires_at?: string;
            value: {
                heading_label?: string;
                heading_value?: string;
                text_label?: string;
                text_value?: string;
                image_label?: string;
                image_value?: string;
                link_label?: string;
                link_value?: string;
            };
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        CreateNewsDto: {
            organization_id: string;
            label: string;
            slug?: string;
            rubric?: string | null;
            enabled?: boolean;
            /** Format: date-time */
            date?: string;
            /** Format: date-time */
            publish_at?: string | null;
            is_main?: boolean;
            is_offer?: boolean;
            /** Format: date-time */
            expires_at?: string | null;
            value?: {
                heading_label?: string;
                heading_value?: string;
                text_label?: string;
                text_value?: string;
                image_label?: string;
                image_value?: string;
                link_label?: string;
                link_value?: string;
            };
        };
        UpdateNewsDto: {
            label?: string;
            slug?: string;
            rubric?: string | null;
            enabled?: boolean;
            /** Format: date-time */
            date?: string;
            /** Format: date-time */
            publish_at?: string | null;
            is_main?: boolean;
            is_offer?: boolean;
            /** Format: date-time */
            expires_at?: string | null;
            value?: {
                heading_label?: string;
                heading_value?: string;
                text_label?: string;
                text_value?: string;
                image_label?: string;
                image_value?: string;
                link_label?: string;
                link_value?: string;
            };
        };
        ImageResponseDto: {
            id: string;
            organization_id: string;
            name: string;
            src: string;
            mime_type: string;
            size: number;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        ArchiveResponseDto: {
            id: string;
            organization_id: string;
            service_id?: string;
            /** @enum {string} */
            type: "news" | "service";
            data: {
                [key: string]: unknown;
            };
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        CreateArchiveDto: {
            organization_id: string;
            service_id?: string;
            /** @enum {string} */
            type: "news" | "service";
            data: {
                [key: string]: unknown;
            };
        };
        TokenPairResponseDto: {
            access_token: string;
            refresh_token: string;
            /** @enum {string} */
            token_type: "Bearer";
            expires_in: number;
            user: {
                id: string;
                login?: string;
                name?: string;
                phone?: string;
                email?: string;
                /** @enum {string} */
                role: "common-user" | "common-admin" | "super-admin" | "operator";
                organization_ids: string[];
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            };
        };
        LoginDto: {
            login?: string;
            phone?: string;
            password: string;
        };
        RegisterDto: {
            phone: string;
            password: string;
            name: string;
            email?: string;
        };
        OtpRequestResponseDto: {
            phone: string;
            expires_in: number;
        };
        OtpRequestDto: {
            phone: string;
        };
        OtpVerifyDto: {
            phone: string;
            code: string;
            name?: string;
            email?: string;
        };
        RefreshDto: {
            refresh_token: string;
        };
        SessionResponseDto: {
            id: string;
            current: boolean;
            user_agent?: string;
            ip?: string;
            /** Format: date-time */
            expires_at: string;
            /** Format: date-time */
            created_at: string;
        };
        ChangePasswordDto: {
            current_password?: string;
            new_password: string;
            new_password_confirmation: string;
        };
        UpdateProfileDto: {
            name?: string;
            email?: string[];
            phone?: string;
            code?: string;
        };
        PhoneCodeRequestDto: {
            phone: string;
        };
        MaskedOrganizationListItemDto: {
            id: string;
            main_label: string;
            category?: string;
            main_category?: string;
            main_image: string;
            /**
             * @default active
             * @enum {string}
             */
            status: "active" | "temporarily_closed";
            closed_reason?: string;
            /**
             * Format: date-time
             * @default null
             */
            closed_until: string | null;
            address?: string;
            location?: {
                /** @enum {string} */
                type: "Point";
                coordinates: [
                    number,
                    number
                ];
            };
            /** @default [] */
            working_hours: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from: string;
                to: string;
            }[];
            /** @default [] */
            holidays: string[];
            /** @default UTC */
            timezone: string;
            /**
             * @default {
             *       "max_active_per_user": null,
             *       "min_interval_days": null
             *     }
             */
            booking_policy: {
                /** @default null */
                max_active_per_user: number | null;
                /** @default null */
                min_interval_days: number | null;
            };
            distance_m?: number;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            counts: {
                news: number;
                infosections: number;
                categories: number;
                services: number;
                images: number;
            };
            news?: {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                slug?: string;
                rubric?: string;
                enabled: boolean;
                /** Format: date-time */
                date: string;
                /**
                 * Format: date-time
                 * @default null
                 */
                publish_at: string | null;
                is_main: boolean;
                is_offer: boolean;
                /** Format: date-time */
                expires_at?: string;
                value: {
                    heading_label?: string;
                    heading_value?: string;
                    text_label?: string;
                    text_value?: string;
                    image_label?: string;
                    image_value?: string;
                    link_label?: string;
                    link_value?: string;
                };
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            }[];
            infosections?: ({
                id: string;
                organization_id: string;
                position: number;
                label: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                /** @enum {string} */
                control: "text";
                value: {
                    heading_label?: string;
                    heading_value?: string;
                    text_label?: string;
                    text_value?: string;
                };
            } | {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                /** @enum {string} */
                control: "address";
                value: {
                    text?: string;
                    lat?: string;
                    lng?: string;
                };
            } | {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                /** @enum {string} */
                control: "link";
                value: {
                    text?: string;
                    url: string;
                };
            } | {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                /** @enum {string} */
                control: "phone";
                value: {
                    phone: string;
                    text?: string;
                };
            } | {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                /** @enum {string} */
                control: "email";
                value: {
                    /** Format: email */
                    email: string;
                    text?: string;
                };
            })[];
            categories?: {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                description?: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            }[];
            services?: {
                id: string;
                organization_id: string;
                category_id: string | null;
                /** @default 0 */
                position: number;
                label: string;
                slug?: string;
                enabled: boolean;
                /**
                 * @default draft
                 * @enum {string}
                 */
                status: "draft" | "published" | "archived";
                /**
                 * Format: date-time
                 * @default null
                 */
                published_at: string | null;
                description?: string;
                /** @default [] */
                tags: string[];
                /** @default null */
                duration_minutes: number | null;
                /** @default null */
                buffer_minutes: number | null;
                /** @default null */
                price: number | null;
                currency?: string;
                address?: string;
                location?: {
                    /** @enum {string} */
                    type: "Point";
                    coordinates: [
                        number,
                        number
                    ];
                };
                /** @default [] */
                working_hours: {
                    /** @enum {string} */
                    day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                    from: string;
                    to: string;
                }[];
                /** @default [] */
                holidays: string[];
                /** @default [] */
                blackout_dates: string[];
                /**
                 * @default {
                 *       "max_active_per_user": null,
                 *       "lead_time_minutes": null,
                 *       "max_advance_days": null,
                 *       "cancel_deadline_minutes": null,
                 *       "late_cancel": "forbid",
                 *       "requires_confirmation": false,
                 *       "no_show_limit": null,
                 *       "no_show_window_days": null,
                 *       "no_show_suspension_days": null,
                 *       "min_interval_days": null,
                 *       "no_show_after_minutes": null
                 *     }
                 */
                booking_policy: {
                    /** @default null */
                    max_active_per_user: number | null;
                    /** @default null */
                    lead_time_minutes: number | null;
                    /** @default null */
                    max_advance_days: number | null;
                    /** @default null */
                    cancel_deadline_minutes: number | null;
                    /**
                     * @default forbid
                     * @enum {string}
                     */
                    late_cancel: "forbid" | "no_show";
                    /** @default false */
                    requires_confirmation: boolean;
                    /** @default null */
                    no_show_limit: number | null;
                    /** @default null */
                    no_show_window_days: number | null;
                    /** @default null */
                    no_show_suspension_days: number | null;
                    /** @default null */
                    min_interval_days: number | null;
                    /** @default null */
                    no_show_after_minutes: number | null;
                };
                /** @default [] */
                form_fields: {
                    key: string;
                    label: string;
                    /** @enum {string} */
                    type: "text" | "textarea" | "number" | "date" | "boolean" | "select" | "phone" | "email";
                    /** @default false */
                    required: boolean;
                    options?: string[];
                    placeholder?: string;
                    /** @default null */
                    max_length: number | null;
                }[];
                /** @default [] */
                required_documents: {
                    key: string;
                    label: string;
                    /** @default true */
                    required: boolean;
                }[];
                value: {
                    heading_label?: string;
                    heading_value?: string;
                    text_label?: string;
                    text_value?: string;
                    image_label?: string;
                    image_value?: string;
                    price_label?: string;
                    price_value?: string;
                    link_label?: string;
                    link_value?: string;
                    subscribe?: string;
                };
                options: {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    service_type: "service_apply" | "service_payment" | "service_delivery" | "service_visit";
                    enabled: boolean;
                    recurrent_dates?: {
                        /** @enum {string} */
                        day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                        time: {
                            time: string;
                            /** @default null */
                            limit: number | null;
                        }[];
                        /** @default null */
                        limit: number | null;
                    }[];
                    recurrent_ranges?: {
                        /** @enum {string} */
                        day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                        from?: string;
                        to?: string;
                        resources: string[];
                        step_minutes?: number;
                        min_minutes?: number;
                        /** @default null */
                        max_minutes: number | null;
                    }[];
                    slots: ({
                        id: string;
                        label: string;
                        /** @enum {string} */
                        child_type: "date_time";
                        value: {
                            date: string;
                            time: {
                                time: string;
                                /** @default null */
                                limit: number | null;
                                /** @default 0 */
                                booked_count: number;
                                /** @default [] */
                                bookings: {
                                    /** @enum {string} */
                                    status: "reserved";
                                }[];
                            }[];
                        };
                    } | {
                        id: string;
                        label: string;
                        /** @enum {string} */
                        child_type: "date";
                        value: {
                            date: string;
                            /** @default null */
                            limit: number | null;
                            /** @default 0 */
                            booked_count: number;
                            /** @default [] */
                            bookings: {
                                /** @enum {string} */
                                status: "reserved";
                            }[];
                        };
                    } | {
                        id: string;
                        label: string;
                        /** @enum {string} */
                        child_type: "apply";
                        value: {
                            /** @default null */
                            limit: number | null;
                            /** @default 0 */
                            booked_count: number;
                            /** @default [] */
                            bookings: {
                                /** @enum {string} */
                                status: "reserved";
                            }[];
                        };
                    } | {
                        id: string;
                        label: string;
                        /** @enum {string} */
                        child_type: "time_range";
                        value: {
                            date: string;
                            resource?: string;
                            from: string;
                            to: string;
                            step_minutes: number;
                            min_minutes: number;
                            /** @default null */
                            max_minutes: number | null;
                            /** @default 0 */
                            booked_count: number;
                            /** @default [] */
                            bookings: {
                                /** @enum {string} */
                                status: "reserved";
                            }[];
                        };
                    } | {
                        id: string;
                        label: string;
                        /** @enum {string} */
                        child_type: "callback";
                        value: {
                            date: string;
                            time: {
                                time: string;
                                to: string;
                                /** @default null */
                                limit: number | null;
                                /** @default 0 */
                                booked_count: number;
                                /** @default [] */
                                bookings: {
                                    /** @enum {string} */
                                    status: "reserved";
                                }[];
                            }[];
                        };
                    } | {
                        id: string;
                        label: string;
                        /** @enum {string} */
                        child_type: "pickup";
                        value: {
                            description?: string;
                            link?: string;
                            price?: string;
                        };
                    } | {
                        id: string;
                        label: string;
                        /** @enum {string} */
                        child_type: "courier";
                        value: {
                            description?: string;
                            link?: string;
                            price?: string;
                        };
                    } | {
                        id: string;
                        label: string;
                        /** @enum {string} */
                        child_type: "paycard";
                        value: {
                            description?: string;
                            link?: string;
                            price?: string;
                        };
                    })[];
                }[];
                /**
                 * Format: date-time
                 * @default null
                 */
                deleted_at: string | null;
                distance_m?: number;
                organization?: {
                    id: string;
                    main_label: string;
                    main_category?: string;
                    main_image: string;
                    /** @default active */
                    status: string;
                    address?: string;
                    /** @default UTC */
                    timezone: string;
                };
                category?: {
                    id: string;
                    label: string;
                    /** @default false */
                    enabled: boolean;
                } | null;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            }[];
            images?: {
                id: string;
                organization_id: string;
                name: string;
                src: string;
                mime_type: string;
                size: number;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            }[];
        };
        OrganizationResponseDto: {
            id: string;
            main_label: string;
            category?: string;
            main_category?: string;
            main_image: string;
            /**
             * @default active
             * @enum {string}
             */
            status: "active" | "temporarily_closed";
            closed_reason?: string;
            /**
             * Format: date-time
             * @default null
             */
            closed_until: string | null;
            address?: string;
            location?: {
                /** @enum {string} */
                type: "Point";
                coordinates: [
                    number,
                    number
                ];
            };
            /** @default [] */
            working_hours: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from: string;
                to: string;
            }[];
            /** @default [] */
            holidays: string[];
            /** @default UTC */
            timezone: string;
            /**
             * @default {
             *       "max_active_per_user": null,
             *       "min_interval_days": null
             *     }
             */
            booking_policy: {
                /** @default null */
                max_active_per_user: number | null;
                /** @default null */
                min_interval_days: number | null;
            };
            distance_m?: number;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        CreateOrganizationDto: {
            main_label: string;
            category?: string;
            main_category?: string;
            /** Format: uri */
            main_image: string;
            /** @enum {string} */
            status?: "active" | "temporarily_closed";
            closed_reason?: string;
            /** Format: date-time */
            closed_until?: string;
            address?: string;
            location?: {
                lng: number;
                lat: number;
            };
            working_hours?: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from: string;
                to: string;
            }[];
            holidays?: string[];
            timezone?: string;
            booking_policy?: {
                max_active_per_user?: number | null;
                min_interval_days?: number | null;
            };
        };
        OrganizationDetailDto: {
            id: string;
            main_label: string;
            category?: string;
            main_category?: string;
            main_image: string;
            /**
             * @default active
             * @enum {string}
             */
            status: "active" | "temporarily_closed";
            closed_reason?: string;
            /**
             * Format: date-time
             * @default null
             */
            closed_until: string | null;
            address?: string;
            location?: {
                /** @enum {string} */
                type: "Point";
                coordinates: [
                    number,
                    number
                ];
            };
            /** @default [] */
            working_hours: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from: string;
                to: string;
            }[];
            /** @default [] */
            holidays: string[];
            /** @default UTC */
            timezone: string;
            /**
             * @default {
             *       "max_active_per_user": null,
             *       "min_interval_days": null
             *     }
             */
            booking_policy: {
                /** @default null */
                max_active_per_user: number | null;
                /** @default null */
                min_interval_days: number | null;
            };
            distance_m?: number;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            news: {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                slug?: string;
                rubric?: string;
                enabled: boolean;
                /** Format: date-time */
                date: string;
                /**
                 * Format: date-time
                 * @default null
                 */
                publish_at: string | null;
                is_main: boolean;
                is_offer: boolean;
                /** Format: date-time */
                expires_at?: string;
                value: {
                    heading_label?: string;
                    heading_value?: string;
                    text_label?: string;
                    text_value?: string;
                    image_label?: string;
                    image_value?: string;
                    link_label?: string;
                    link_value?: string;
                };
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            }[];
            infosections: ({
                id: string;
                organization_id: string;
                position: number;
                label: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                /** @enum {string} */
                control: "text";
                value: {
                    heading_label?: string;
                    heading_value?: string;
                    text_label?: string;
                    text_value?: string;
                };
            } | {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                /** @enum {string} */
                control: "address";
                value: {
                    text?: string;
                    lat?: string;
                    lng?: string;
                };
            } | {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                /** @enum {string} */
                control: "link";
                value: {
                    text?: string;
                    url: string;
                };
            } | {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                /** @enum {string} */
                control: "phone";
                value: {
                    phone: string;
                    text?: string;
                };
            } | {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                /** @enum {string} */
                control: "email";
                value: {
                    /** Format: email */
                    email: string;
                    text?: string;
                };
            })[];
            categories: {
                id: string;
                organization_id: string;
                position: number;
                label: string;
                description?: string;
                enabled: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
                services: {
                    id: string;
                    organization_id: string;
                    category_id: string | null;
                    /** @default 0 */
                    position: number;
                    label: string;
                    slug?: string;
                    enabled: boolean;
                    /**
                     * @default draft
                     * @enum {string}
                     */
                    status: "draft" | "published" | "archived";
                    /**
                     * Format: date-time
                     * @default null
                     */
                    published_at: string | null;
                    description?: string;
                    /** @default [] */
                    tags: string[];
                    /** @default null */
                    duration_minutes: number | null;
                    /** @default null */
                    price: number | null;
                    currency?: string;
                    address?: string;
                    location?: {
                        /** @enum {string} */
                        type: "Point";
                        coordinates: [
                            number,
                            number
                        ];
                    };
                    value: {
                        heading_value?: string;
                        image_value?: string;
                        price_value?: string;
                    };
                    /** @default 0 */
                    options_count: number;
                    /** Format: date-time */
                    created_at: string;
                    /** Format: date-time */
                    updated_at: string;
                }[];
            }[];
            services: {
                id: string;
                organization_id: string;
                category_id: string | null;
                /** @default 0 */
                position: number;
                label: string;
                slug?: string;
                enabled: boolean;
                /**
                 * @default draft
                 * @enum {string}
                 */
                status: "draft" | "published" | "archived";
                /**
                 * Format: date-time
                 * @default null
                 */
                published_at: string | null;
                description?: string;
                /** @default [] */
                tags: string[];
                /** @default null */
                duration_minutes: number | null;
                /** @default null */
                price: number | null;
                currency?: string;
                address?: string;
                location?: {
                    /** @enum {string} */
                    type: "Point";
                    coordinates: [
                        number,
                        number
                    ];
                };
                value: {
                    heading_value?: string;
                    image_value?: string;
                    price_value?: string;
                };
                /** @default 0 */
                options_count: number;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            }[];
            images: {
                id: string;
                organization_id: string;
                name: string;
                src: string;
                mime_type: string;
                size: number;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            }[];
        };
        UpdateOrganizationDto: {
            main_label?: string;
            category?: string | null;
            main_category?: string | null;
            /** Format: uri */
            main_image?: string;
            /** @enum {string} */
            status?: "active" | "temporarily_closed";
            closed_reason?: string | null;
            /** Format: date-time */
            closed_until?: string | null;
            address?: string | null;
            location?: {
                lng: number;
                lat: number;
            } | null;
            working_hours?: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from: string;
                to: string;
            }[];
            holidays?: string[];
            timezone?: string;
            booking_policy?: {
                max_active_per_user?: number | null;
                min_interval_days?: number | null;
            };
        };
        InfoSectionResponseDto: {
            id: string;
            organization_id: string;
            position: number;
            label: string;
            enabled: boolean;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            /** @enum {string} */
            control: "text";
            value: {
                heading_label?: string;
                heading_value?: string;
                text_label?: string;
                text_value?: string;
            };
        } | {
            id: string;
            organization_id: string;
            position: number;
            label: string;
            enabled: boolean;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            /** @enum {string} */
            control: "address";
            value: {
                text?: string;
                lat?: string;
                lng?: string;
            };
        } | {
            id: string;
            organization_id: string;
            position: number;
            label: string;
            enabled: boolean;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            /** @enum {string} */
            control: "link";
            value: {
                text?: string;
                url: string;
            };
        } | {
            id: string;
            organization_id: string;
            position: number;
            label: string;
            enabled: boolean;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            /** @enum {string} */
            control: "phone";
            value: {
                phone: string;
                text?: string;
            };
        } | {
            id: string;
            organization_id: string;
            position: number;
            label: string;
            enabled: boolean;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            /** @enum {string} */
            control: "email";
            value: {
                /** Format: email */
                email: string;
                text?: string;
            };
        };
        CategoryResponseDto: {
            id: string;
            organization_id: string;
            position: number;
            label: string;
            description?: string;
            enabled: boolean;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        MaskedServiceResponseDto: {
            id: string;
            organization_id: string;
            category_id: string[];
            /** @default 0 */
            position: number;
            label: string;
            slug?: string;
            enabled: boolean;
            /**
             * @default draft
             * @enum {string}
             */
            status: "draft" | "published" | "archived";
            /**
             * Format: date-time
             * @default null
             */
            published_at: string | null;
            description?: string;
            /** @default [] */
            tags: string[];
            /** @default null */
            duration_minutes: number | null;
            /** @default null */
            buffer_minutes: number | null;
            /** @default null */
            price: number[];
            currency?: string;
            address?: string;
            location?: {
                /** @enum {string} */
                type: "Point";
                coordinates: [
                    number,
                    number
                ];
            };
            /** @default [] */
            working_hours: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from: string;
                to: string;
            }[];
            /** @default [] */
            holidays: string[];
            /** @default [] */
            blackout_dates: string[];
            /**
             * @default {
             *       "max_active_per_user": null,
             *       "lead_time_minutes": null,
             *       "max_advance_days": null,
             *       "cancel_deadline_minutes": null,
             *       "late_cancel": "forbid",
             *       "requires_confirmation": false,
             *       "no_show_limit": null,
             *       "no_show_window_days": null,
             *       "no_show_suspension_days": null,
             *       "min_interval_days": null,
             *       "no_show_after_minutes": null
             *     }
             */
            booking_policy: {
                /** @default null */
                max_active_per_user: number | null;
                /** @default null */
                lead_time_minutes: number | null;
                /** @default null */
                max_advance_days: number | null;
                /** @default null */
                cancel_deadline_minutes: number | null;
                /**
                 * @default forbid
                 * @enum {string}
                 */
                late_cancel: "forbid" | "no_show";
                /** @default false */
                requires_confirmation: boolean;
                /** @default null */
                no_show_limit: number | null;
                /** @default null */
                no_show_window_days: number | null;
                /** @default null */
                no_show_suspension_days: number | null;
                /** @default null */
                min_interval_days: number | null;
                /** @default null */
                no_show_after_minutes: number | null;
            };
            /** @default [] */
            form_fields: {
                key: string;
                label: string;
                /** @enum {string} */
                type: "text" | "textarea" | "number" | "date" | "boolean" | "select" | "phone" | "email";
                /** @default false */
                required: boolean;
                options?: string[];
                placeholder?: string;
                /** @default null */
                max_length: number | null;
            }[];
            /** @default [] */
            required_documents: {
                key: string;
                label: string;
                /** @default true */
                required: boolean;
            }[];
            value: {
                heading_label?: string;
                heading_value?: string;
                text_label?: string;
                text_value?: string;
                image_label?: string;
                image_value?: string;
                price_label?: string;
                price_value?: string;
                link_label?: string;
                link_value?: string;
                subscribe?: string;
            };
            options: {
                id: string;
                label: string;
                /** @enum {string} */
                service_type: "service_apply" | "service_payment" | "service_delivery" | "service_visit";
                enabled: boolean;
                recurrent_dates?: {
                    /** @enum {string} */
                    day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                    time: {
                        time: string;
                        /** @default null */
                        limit: number | null;
                    }[];
                    /** @default null */
                    limit: number | null;
                }[];
                recurrent_ranges?: {
                    /** @enum {string} */
                    day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                    from?: string;
                    to?: string;
                    resources: string[];
                    step_minutes?: number;
                    min_minutes?: number;
                    /** @default null */
                    max_minutes: number | null;
                }[];
                slots: ({
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "date_time";
                    value: {
                        date: string;
                        time: {
                            time: string;
                            /** @default null */
                            limit: number | null;
                            /** @default 0 */
                            booked_count: number;
                            /** @default [] */
                            bookings: {
                                /** @enum {string} */
                                status: "reserved";
                            }[];
                        }[];
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "date";
                    value: {
                        date: string;
                        /** @default null */
                        limit: number | null;
                        /** @default 0 */
                        booked_count: number;
                        /** @default [] */
                        bookings: {
                            /** @enum {string} */
                            status: "reserved";
                        }[];
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "apply";
                    value: {
                        /** @default null */
                        limit: number | null;
                        /** @default 0 */
                        booked_count: number;
                        /** @default [] */
                        bookings: {
                            /** @enum {string} */
                            status: "reserved";
                        }[];
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "time_range";
                    value: {
                        date: string;
                        resource?: string;
                        from: string;
                        to: string;
                        step_minutes: number;
                        min_minutes: number;
                        /** @default null */
                        max_minutes: number | null;
                        /** @default 0 */
                        booked_count: number;
                        /** @default [] */
                        bookings: {
                            /** @enum {string} */
                            status: "reserved";
                        }[];
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "callback";
                    value: {
                        date: string;
                        time: {
                            time: string;
                            to: string;
                            /** @default null */
                            limit: number | null;
                            /** @default 0 */
                            booked_count: number;
                            /** @default [] */
                            bookings: {
                                /** @enum {string} */
                                status: "reserved";
                            }[];
                        }[];
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "pickup";
                    value: {
                        description?: string;
                        link?: string;
                        price?: string;
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "courier";
                    value: {
                        description?: string;
                        link?: string;
                        price?: string;
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "paycard";
                    value: {
                        description?: string;
                        link?: string;
                        price?: string;
                    };
                })[];
            }[];
            /**
             * Format: date-time
             * @default null
             */
            deleted_at: string | null;
            distance_m?: number;
            organization?: {
                id: string;
                main_label: string;
                main_category?: string;
                main_image: string;
                /** @default active */
                status: string;
                address?: string;
                /** @default UTC */
                timezone: string;
            };
            category?: {
                id: string;
                label: string;
                /** @default false */
                enabled: boolean;
            } | null;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        ReorderDto: {
            ids: string[];
        };
        CreateInfoSectionDto: {
            organization_id: string;
            label: string;
            enabled?: boolean;
            /** @enum {string} */
            control: "text";
            value: {
                heading_label?: string;
                heading_value?: string;
                text_label?: string;
                text_value?: string;
            };
        } | {
            organization_id: string;
            label: string;
            enabled?: boolean;
            /** @enum {string} */
            control: "address";
            value: {
                text?: string;
                lat?: string;
                lng?: string;
            };
        } | {
            organization_id: string;
            label: string;
            enabled?: boolean;
            /** @enum {string} */
            control: "link";
            value: {
                text?: string;
                /** Format: uri */
                url: string;
            };
        } | {
            organization_id: string;
            label: string;
            enabled?: boolean;
            /** @enum {string} */
            control: "phone";
            value: {
                phone: string;
                text?: string;
            };
        } | {
            organization_id: string;
            label: string;
            enabled?: boolean;
            /** @enum {string} */
            control: "email";
            value: {
                /** Format: email */
                email: string;
                text?: string;
            };
        };
        UpdateInfoSectionDto: {
            label?: string;
            enabled?: boolean;
        } & (({
            /** @enum {string} */
            control: "text";
            value: {
                heading_label?: string;
                heading_value?: string;
                text_label?: string;
                text_value?: string;
            };
        } | {
            /** @enum {string} */
            control: "address";
            value: {
                text?: string;
                lat?: string;
                lng?: string;
            };
        } | {
            /** @enum {string} */
            control: "link";
            value: {
                text?: string;
                /** Format: uri */
                url: string;
            };
        } | {
            /** @enum {string} */
            control: "phone";
            value: {
                phone: string;
                text?: string;
            };
        } | {
            /** @enum {string} */
            control: "email";
            value: {
                /** Format: email */
                email: string;
                text?: string;
            };
        }) | {
            control?: unknown;
            value?: unknown;
        });
        CreateCategoryDto: {
            organization_id: string;
            label: string;
            description?: string;
            enabled?: boolean;
        };
        UpdateCategoryDto: {
            label?: string;
            description?: string | null;
            enabled?: boolean;
        };
        AvailabilityResponseDto: {
            service_id: string;
            organization_id: string;
            from: string;
            to: string;
            options: {
                id: string;
                label: string;
                /** @enum {string} */
                service_type: "service_apply" | "service_payment" | "service_delivery" | "service_visit";
                enabled: boolean;
                slots: {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "date_time" | "date" | "apply" | "time_range" | "callback" | "pickup" | "courier" | "paycard";
                    date: string | null;
                    limit: number | null;
                    booked_count: number;
                    available: number | null;
                    time?: {
                        time: string;
                        limit: number | null;
                        booked_count: number;
                        available: number | null;
                        to?: string;
                    }[];
                    range?: {
                        from: string;
                        to: string;
                        step_minutes: number;
                        min_minutes: number;
                        max_minutes: number | null;
                        free: {
                            from: string;
                            to: string;
                        }[];
                    };
                }[];
            }[];
        };
        ServiceSlotsResponseDto: {
            service_id: string;
            organization_id: string;
            timezone: string;
            from: string;
            to: string;
            total: number;
            items: {
                option_id: string;
                option_label: string;
                /** @enum {string} */
                service_type: "service_apply" | "service_payment" | "service_delivery" | "service_visit";
                slot_id: string;
                slot_label: string;
                /** @enum {string} */
                child_type: "date_time" | "date" | "apply" | "time_range" | "callback" | "pickup" | "courier" | "paycard";
                date: string | null;
                time: string | null;
                /** Format: date-time */
                starts_at: string | null;
                /** Format: date-time */
                ends_at: string | null;
                limit: number | null;
                booked_count: number;
                available: number | null;
                range?: {
                    step_minutes: number;
                    min_minutes: number;
                    max_minutes: number | null;
                };
            }[];
        };
        ServiceRevisionResponseDto: {
            id: string;
            service_id: string;
            organization_id: string;
            /** @enum {string} */
            action: "create" | "update" | "status" | "delete" | "restore" | "option.add" | "option.update" | "option.remove" | "option.recurrence" | "slot.add" | "slot.update" | "slot.remove";
            actor_id: string[];
            actor_role: string[];
            changes: {
                [key: string]: {
                    before?: unknown;
                    after?: unknown;
                };
            };
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        CreateServiceDto: {
            organization_id: string;
            category_id?: string | null;
            label?: string;
            enabled?: boolean;
            value?: {
                heading_label?: string;
                heading_value?: string;
                text_label?: string;
                text_value?: string;
                image_label?: string;
                image_value?: string;
                price_label?: string;
                price_value?: string;
                link_label?: string;
                link_value?: string;
                /** Format: email */
                subscribe?: string;
            };
            options?: {
                /** Format: uuid */
                id?: string;
                label?: string;
                /** @enum {string} */
                service_type?: "service_apply" | "service_payment" | "service_delivery" | "service_visit";
                enabled?: boolean;
                recurrent_dates?: {
                    /** @enum {string} */
                    day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                    /** @default [] */
                    time: {
                        time: string;
                        limit?: number | null;
                    }[];
                    limit?: number | null;
                }[] | null;
                recurrent_ranges?: {
                    /** @enum {string} */
                    day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                    from?: string;
                    to?: string;
                    resources: string[];
                    step_minutes?: number;
                    min_minutes?: number;
                    max_minutes?: number | null;
                }[] | null;
                slots?: ({
                    /** Format: uuid */
                    id?: string;
                    label?: string;
                    /** @enum {string} */
                    child_type: "date_time";
                    value: {
                        /** Format: date */
                        date: string;
                        time: {
                            time: string;
                            limit?: number | null;
                        }[];
                    };
                } | {
                    /** Format: uuid */
                    id?: string;
                    label?: string;
                    /** @enum {string} */
                    child_type: "date";
                    value: {
                        /** Format: date */
                        date: string;
                        limit?: number | null;
                    };
                } | {
                    /** Format: uuid */
                    id?: string;
                    label?: string;
                    /** @enum {string} */
                    child_type: "apply";
                    value: {
                        limit?: number | null;
                    };
                } | {
                    /** Format: uuid */
                    id?: string;
                    label?: string;
                    /** @enum {string} */
                    child_type: "time_range";
                    value: {
                        /** Format: date */
                        date: string;
                        from?: string;
                        to?: string;
                        step_minutes?: number;
                        min_minutes?: number;
                        max_minutes?: number | null;
                    };
                } | {
                    /** Format: uuid */
                    id?: string;
                    label?: string;
                    /** @enum {string} */
                    child_type: "callback";
                    value: {
                        /** Format: date */
                        date: string;
                        time: {
                            time: string;
                            to: string;
                            limit?: number | null;
                        }[];
                    };
                } | {
                    /** Format: uuid */
                    id?: string;
                    label?: string;
                    /** @enum {string} */
                    child_type: "pickup";
                    value: {
                        description?: string;
                        /** Format: uri */
                        link?: string;
                        price?: string;
                    };
                } | {
                    /** Format: uuid */
                    id?: string;
                    label?: string;
                    /** @enum {string} */
                    child_type: "courier";
                    value: {
                        description?: string;
                        /** Format: uri */
                        link?: string;
                        price?: string;
                    };
                } | {
                    /** Format: uuid */
                    id?: string;
                    label?: string;
                    /** @enum {string} */
                    child_type: "paycard";
                    value: {
                        description?: string;
                        /** Format: uri */
                        link?: string;
                        price?: string;
                    };
                })[];
            }[];
            slug?: string;
            /** @enum {string} */
            status?: "draft" | "published" | "archived";
            description?: string;
            tags?: string[];
            duration_minutes?: number | null;
            buffer_minutes?: number | null;
            price?: number | null;
            currency?: string;
            address?: string;
            location?: {
                lng: number;
                lat: number;
            } | null;
            working_hours?: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from: string;
                to: string;
            }[];
            holidays?: string[];
            blackout_dates?: string[];
            booking_policy?: {
                max_active_per_user?: number | null;
                lead_time_minutes?: number | null;
                max_advance_days?: number | null;
                cancel_deadline_minutes?: number | null;
                /** @enum {string} */
                late_cancel?: "forbid" | "no_show";
                requires_confirmation?: boolean;
                no_show_limit?: number | null;
                no_show_window_days?: number | null;
                no_show_suspension_days?: number | null;
                min_interval_days?: number | null;
                no_show_after_minutes?: number | null;
            };
            form_fields?: {
                key: string;
                label: string;
                /** @enum {string} */
                type: "text" | "textarea" | "number" | "date" | "boolean" | "select" | "phone" | "email";
                required?: boolean;
                options?: string[];
                placeholder?: string;
                max_length?: number | null;
            }[];
            required_documents?: {
                key: string;
                label: string;
                required?: boolean;
            }[];
        };
        ServiceResponseDto: {
            id: string;
            organization_id: string;
            category_id: string[];
            /** @default 0 */
            position: number;
            label: string;
            slug?: string;
            enabled: boolean;
            /**
             * @default draft
             * @enum {string}
             */
            status: "draft" | "published" | "archived";
            /**
             * Format: date-time
             * @default null
             */
            published_at: string | null;
            description?: string;
            /** @default [] */
            tags: string[];
            /** @default null */
            duration_minutes: number | null;
            /** @default null */
            buffer_minutes: number | null;
            /** @default null */
            price: number[];
            currency?: string;
            address?: string;
            location?: {
                /** @enum {string} */
                type: "Point";
                coordinates: [
                    number,
                    number
                ];
            };
            /** @default [] */
            working_hours: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from: string;
                to: string;
            }[];
            /** @default [] */
            holidays: string[];
            /** @default [] */
            blackout_dates: string[];
            /**
             * @default {
             *       "max_active_per_user": null,
             *       "lead_time_minutes": null,
             *       "max_advance_days": null,
             *       "cancel_deadline_minutes": null,
             *       "late_cancel": "forbid",
             *       "requires_confirmation": false,
             *       "no_show_limit": null,
             *       "no_show_window_days": null,
             *       "no_show_suspension_days": null,
             *       "min_interval_days": null,
             *       "no_show_after_minutes": null
             *     }
             */
            booking_policy: {
                /** @default null */
                max_active_per_user: number | null;
                /** @default null */
                lead_time_minutes: number | null;
                /** @default null */
                max_advance_days: number | null;
                /** @default null */
                cancel_deadline_minutes: number | null;
                /**
                 * @default forbid
                 * @enum {string}
                 */
                late_cancel: "forbid" | "no_show";
                /** @default false */
                requires_confirmation: boolean;
                /** @default null */
                no_show_limit: number | null;
                /** @default null */
                no_show_window_days: number | null;
                /** @default null */
                no_show_suspension_days: number | null;
                /** @default null */
                min_interval_days: number | null;
                /** @default null */
                no_show_after_minutes: number | null;
            };
            /** @default [] */
            form_fields: {
                key: string;
                label: string;
                /** @enum {string} */
                type: "text" | "textarea" | "number" | "date" | "boolean" | "select" | "phone" | "email";
                /** @default false */
                required: boolean;
                options?: string[];
                placeholder?: string;
                /** @default null */
                max_length: number | null;
            }[];
            /** @default [] */
            required_documents: {
                key: string;
                label: string;
                /** @default true */
                required: boolean;
            }[];
            value: {
                heading_label?: string;
                heading_value?: string;
                text_label?: string;
                text_value?: string;
                image_label?: string;
                image_value?: string;
                price_label?: string;
                price_value?: string;
                link_label?: string;
                link_value?: string;
                subscribe?: string;
            };
            options: {
                id: string;
                label: string;
                /** @enum {string} */
                service_type: "service_apply" | "service_payment" | "service_delivery" | "service_visit";
                enabled: boolean;
                recurrent_dates?: {
                    /** @enum {string} */
                    day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                    time: {
                        time: string;
                        /** @default null */
                        limit: number | null;
                    }[];
                    /** @default null */
                    limit: number | null;
                }[];
                recurrent_ranges?: {
                    /** @enum {string} */
                    day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                    from?: string;
                    to?: string;
                    resources: string[];
                    step_minutes?: number;
                    min_minutes?: number;
                    /** @default null */
                    max_minutes: number | null;
                }[];
                slots: ({
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "date_time";
                    value: {
                        date: string;
                        time: {
                            time: string;
                            /** @default null */
                            limit: number | null;
                            /** @default 0 */
                            booked_count: number;
                            /** @default [] */
                            bookings: ({
                                id: string;
                                user_id: string;
                                /** @default  */
                                person: string;
                                /** @default  */
                                phone: string;
                                /** @default  */
                                info: string;
                                /** @default null */
                                time: string | null;
                                /** @default null */
                                end_time: string | null;
                                /** @default null */
                                address: string | null;
                                /** @default confirmed */
                                status: string;
                                /** Format: date-time */
                                created_at: string;
                            } | {
                                /** @enum {string} */
                                status: "reserved";
                            })[];
                        }[];
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "date";
                    value: {
                        date: string;
                        /** @default null */
                        limit: number | null;
                        /** @default 0 */
                        booked_count: number;
                        /** @default [] */
                        bookings: ({
                            id: string;
                            user_id: string;
                            /** @default  */
                            person: string;
                            /** @default  */
                            phone: string;
                            /** @default  */
                            info: string;
                            /** @default null */
                            time: string | null;
                            /** @default null */
                            end_time: string | null;
                            /** @default null */
                            address: string | null;
                            /** @default confirmed */
                            status: string;
                            /** Format: date-time */
                            created_at: string;
                        } | {
                            /** @enum {string} */
                            status: "reserved";
                        })[];
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "apply";
                    value: {
                        /** @default null */
                        limit: number | null;
                        /** @default 0 */
                        booked_count: number;
                        /** @default [] */
                        bookings: ({
                            id: string;
                            user_id: string;
                            /** @default  */
                            person: string;
                            /** @default  */
                            phone: string;
                            /** @default  */
                            info: string;
                            /** @default null */
                            time: string | null;
                            /** @default null */
                            end_time: string | null;
                            /** @default null */
                            address: string | null;
                            /** @default confirmed */
                            status: string;
                            /** Format: date-time */
                            created_at: string;
                        } | {
                            /** @enum {string} */
                            status: "reserved";
                        })[];
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "time_range";
                    value: {
                        date: string;
                        resource?: string;
                        from: string;
                        to: string;
                        step_minutes: number;
                        min_minutes: number;
                        /** @default null */
                        max_minutes: number | null;
                        /** @default 0 */
                        booked_count: number;
                        /** @default [] */
                        bookings: ({
                            id: string;
                            user_id: string;
                            /** @default  */
                            person: string;
                            /** @default  */
                            phone: string;
                            /** @default  */
                            info: string;
                            /** @default null */
                            time: string | null;
                            /** @default null */
                            end_time: string | null;
                            /** @default null */
                            address: string | null;
                            /** @default confirmed */
                            status: string;
                            /** Format: date-time */
                            created_at: string;
                        } | {
                            /** @enum {string} */
                            status: "reserved";
                        })[];
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "callback";
                    value: {
                        date: string;
                        time: {
                            time: string;
                            to: string;
                            /** @default null */
                            limit: number | null;
                            /** @default 0 */
                            booked_count: number;
                            /** @default [] */
                            bookings: ({
                                id: string;
                                user_id: string;
                                /** @default  */
                                person: string;
                                /** @default  */
                                phone: string;
                                /** @default  */
                                info: string;
                                /** @default null */
                                time: string | null;
                                /** @default null */
                                end_time: string | null;
                                /** @default null */
                                address: string | null;
                                /** @default confirmed */
                                status: string;
                                /** Format: date-time */
                                created_at: string;
                            } | {
                                /** @enum {string} */
                                status: "reserved";
                            })[];
                        }[];
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "pickup";
                    value: {
                        description?: string;
                        link?: string;
                        price?: string;
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "courier";
                    value: {
                        description?: string;
                        link?: string;
                        price?: string;
                    };
                } | {
                    id: string;
                    label: string;
                    /** @enum {string} */
                    child_type: "paycard";
                    value: {
                        description?: string;
                        link?: string;
                        price?: string;
                    };
                })[];
            }[];
            /**
             * Format: date-time
             * @default null
             */
            deleted_at: string | null;
            distance_m?: number;
            organization?: {
                id: string;
                main_label: string;
                main_category?: string;
                main_image: string;
                /** @default active */
                status: string;
                address?: string;
                /** @default UTC */
                timezone: string;
            };
            category?: {
                id: string;
                label: string;
                /** @default false */
                enabled: boolean;
            } | null;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        UpdateServiceDto: {
            category_id?: string | null;
            label?: string;
            enabled?: boolean;
            value?: {
                heading_label?: string;
                heading_value?: string;
                text_label?: string;
                text_value?: string;
                image_label?: string;
                image_value?: string;
                price_label?: string;
                price_value?: string;
                link_label?: string;
                link_value?: string;
                /** Format: email */
                subscribe?: string;
            };
            slug?: string;
            /** @enum {string} */
            status?: "draft" | "published" | "archived";
            description?: string;
            tags?: string[];
            duration_minutes?: number | null;
            buffer_minutes?: number | null;
            price?: number | null;
            currency?: string;
            address?: string;
            location?: {
                lng: number;
                lat: number;
            } | null;
            working_hours?: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from: string;
                to: string;
            }[];
            holidays?: string[];
            blackout_dates?: string[];
            booking_policy?: {
                max_active_per_user?: number | null;
                lead_time_minutes?: number | null;
                max_advance_days?: number | null;
                cancel_deadline_minutes?: number | null;
                /** @enum {string} */
                late_cancel?: "forbid" | "no_show";
                requires_confirmation?: boolean;
                no_show_limit?: number | null;
                no_show_window_days?: number | null;
                no_show_suspension_days?: number | null;
                min_interval_days?: number | null;
                no_show_after_minutes?: number | null;
            };
            form_fields?: {
                key: string;
                label: string;
                /** @enum {string} */
                type: "text" | "textarea" | "number" | "date" | "boolean" | "select" | "phone" | "email";
                required?: boolean;
                options?: string[];
                placeholder?: string;
                max_length?: number | null;
            }[];
            required_documents?: {
                key: string;
                label: string;
                required?: boolean;
            }[];
            /** @description Not accepted. Options and slots are edited through /services/{id}/options. */
            options?: unknown;
        };
        SetServiceStatusDto: {
            /** @enum {string} */
            status: "draft" | "published" | "archived";
        };
        CloneServiceDto: {
            label?: string;
            slug?: string;
        };
        CreateOptionDto: {
            /** Format: uuid */
            id?: string;
            label?: string;
            /** @enum {string} */
            service_type?: "service_apply" | "service_payment" | "service_delivery" | "service_visit";
            enabled?: boolean;
            recurrent_dates?: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                /** @default [] */
                time: {
                    time: string;
                    limit?: number | null;
                }[];
                limit?: number | null;
            }[] | null;
            recurrent_ranges?: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from?: string;
                to?: string;
                resources: string[];
                step_minutes?: number;
                min_minutes?: number;
                max_minutes?: number | null;
            }[] | null;
            slots?: ({
                /** Format: uuid */
                id?: string;
                label?: string;
                /** @enum {string} */
                child_type: "date_time";
                value: {
                    /** Format: date */
                    date: string;
                    time: {
                        time: string;
                        limit?: number | null;
                    }[];
                };
            } | {
                /** Format: uuid */
                id?: string;
                label?: string;
                /** @enum {string} */
                child_type: "date";
                value: {
                    /** Format: date */
                    date: string;
                    limit?: number | null;
                };
            } | {
                /** Format: uuid */
                id?: string;
                label?: string;
                /** @enum {string} */
                child_type: "apply";
                value: {
                    limit?: number | null;
                };
            } | {
                /** Format: uuid */
                id?: string;
                label?: string;
                /** @enum {string} */
                child_type: "time_range";
                value: {
                    /** Format: date */
                    date: string;
                    from?: string;
                    to?: string;
                    step_minutes?: number;
                    min_minutes?: number;
                    max_minutes?: number | null;
                };
            } | {
                /** Format: uuid */
                id?: string;
                label?: string;
                /** @enum {string} */
                child_type: "callback";
                value: {
                    /** Format: date */
                    date: string;
                    time: {
                        time: string;
                        to: string;
                        limit?: number | null;
                    }[];
                };
            } | {
                /** Format: uuid */
                id?: string;
                label?: string;
                /** @enum {string} */
                child_type: "pickup";
                value: {
                    description?: string;
                    /** Format: uri */
                    link?: string;
                    price?: string;
                };
            } | {
                /** Format: uuid */
                id?: string;
                label?: string;
                /** @enum {string} */
                child_type: "courier";
                value: {
                    description?: string;
                    /** Format: uri */
                    link?: string;
                    price?: string;
                };
            } | {
                /** Format: uuid */
                id?: string;
                label?: string;
                /** @enum {string} */
                child_type: "paycard";
                value: {
                    description?: string;
                    /** Format: uri */
                    link?: string;
                    price?: string;
                };
            })[];
        };
        UpdateOptionDto: {
            label?: string;
            /** @enum {string} */
            service_type?: "service_apply" | "service_payment" | "service_delivery" | "service_visit";
            enabled?: boolean;
        };
        RecurrenceDto: {
            recurrent_dates?: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                /** @default [] */
                time: {
                    time: string;
                    limit?: number | null;
                }[];
                limit?: number | null;
            }[] | null;
            recurrent_ranges?: {
                /** @enum {string} */
                day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                from?: string;
                to?: string;
                resources: string[];
                step_minutes?: number;
                min_minutes?: number;
                max_minutes?: number | null;
            }[] | null;
        };
        UpdateSlotDto: {
            label?: string;
            /** Format: date */
            date?: string;
            limit?: number | null;
            time?: {
                time: string;
                to?: string;
                limit?: number | null;
            }[];
            from?: string;
            to?: string;
            step_minutes?: number;
            min_minutes?: number;
            max_minutes?: number | null;
        };
        CloseSlotResponseDto: {
            service_id: string;
            option_id: string;
            slot_id: string;
            time: string[];
            cancelled: number;
            waitlist_dropped: number;
            notifications_queued: number;
            removed: boolean;
        };
        CloseSlotDto: {
            time?: string;
            reason?: string;
            remove?: boolean;
            notify?: boolean;
        };
        MoveSlotResponseDto: {
            service_id: string;
            option_id: string;
            slot_id: string;
            date: string;
            previous_date: string;
            moved: number;
            notifications_queued: number;
        };
        MoveSlotDto: {
            /** Format: date */
            date: string;
            shift_minutes?: number;
            reason?: string;
            notify?: boolean;
        };
        CreateBookingDto: {
            /** Format: uuid */
            option_id: string;
            /** Format: uuid */
            slot_id: string;
            time?: string;
            end_time?: string;
            address?: string;
            info?: string;
            fields?: {
                [key: string]: unknown;
            };
            documents?: string[];
            on_behalf?: {
                phone: string;
                name: string;
            };
        };
        BookingCreatedResponseDto: {
            /** Format: uuid */
            booking_id: string;
            service_id: string;
            organization_id: string;
            option_id: string;
            slot_id: string;
            /** @enum {string} */
            child_type: "date_time" | "date" | "apply" | "time_range" | "callback" | "pickup" | "courier" | "paycard";
            status: string;
            date?: string[];
            time?: string[];
            end_time?: string[];
            user_id?: string;
            /** Format: date-time */
            created_at: string;
        };
        JoinWaitlistDto: {
            /** Format: uuid */
            option_id: string;
            /** Format: uuid */
            slot_id: string;
            time?: string;
        };
        WaitlistEntryResponseDto: {
            id: string;
            service_id: string;
            organization_id: string;
            option_id: string;
            slot_id: string;
            /** @default  */
            service_label: string;
            /** @default null */
            date: string[];
            /** @default null */
            time: string[];
            user_id: string;
            /** @default  */
            person: string;
            /** @default  */
            phone: string;
            /**
             * @default waiting
             * @enum {string}
             */
            status: "waiting" | "notified";
            /**
             * Format: date-time
             * @default null
             */
            notified_at: string | null;
            /** Format: date-time */
            created_at: string;
        };
        BookingResourceDto: {
            id: string;
            service_id: string;
            organization_id: string;
            option_id: string;
            slot_id: string;
            child_type: string;
            /** @default  */
            service_label: string;
            /** @default null */
            date: string[];
            /** @default null */
            time: string[];
            /** @default null */
            end_time: string[];
            /**
             * Format: date-time
             * @default null
             */
            starts_at: string | null;
            /**
             * Format: date-time
             * @default null
             */
            ends_at: string | null;
            /**
             * Format: date-time
             * @default null
             */
            cancel_deadline_at: string | null;
            user_id: string;
            /** @default  */
            person: string;
            /** @default  */
            phone: string;
            /** @default  */
            info: string;
            /** @default null */
            address: string[];
            /** @default {} */
            fields: {
                [key: string]: unknown;
            };
            /** @default [] */
            documents: string[];
            /**
             * @default confirmed
             * @enum {string}
             */
            status: "pending" | "confirmed" | "arrived" | "completed" | "no_show" | "cancelled";
            /**
             * Format: date-time
             * @default null
             */
            confirmed_at: string | null;
            /**
             * Format: date-time
             * @default null
             */
            arrived_at: string | null;
            /** @default null */
            checkin_code: string[];
            /**
             * Format: date-time
             * @default null
             */
            finished_at: string | null;
            /** @default false */
            late_cancel: boolean;
            /** @default null */
            created_by: string[];
            /** Format: date-time */
            created_at: string;
        };
        BookingStatsResponseDto: {
            total: number;
            by_status: {
                pending: number;
                confirmed: number;
                arrived: number;
                completed: number;
                no_show: number;
                cancelled: number;
            };
            no_show_rate: number | null;
            cancellation_rate: number | null;
        };
        CheckInByCodeDto: {
            code: string;
        };
        CalendarTokenResponseDto: {
            token: string;
            path: string;
        };
        SetBookingStatusDto: {
            /** @enum {string} */
            status: "confirmed" | "completed" | "no_show" | "cancelled";
        };
        RescheduleBookingDto: {
            /** Format: uuid */
            option_id?: string;
            /** Format: uuid */
            slot_id: string;
            time?: string;
            end_time?: string;
            address?: string;
        };
        SuspensionResourceDto: {
            id: string;
            user_id: string;
            service_id: string;
            organization_id: string;
            /** @default  */
            service_label: string;
            active: boolean;
            /**
             * @default null
             * @enum {string|null}
             */
            kind: "no_show" | "manual" | null;
            /** @default null */
            reason: string[];
            /**
             * Format: date-time
             * @default null
             */
            until: string | null;
            /** @default [] */
            booking_ids: string[];
            /**
             * Format: date-time
             * @default null
             */
            suspended_at: string | null;
            /** @default null */
            suspended_by: string[];
            /**
             * Format: date-time
             * @default null
             */
            lifted_at: string | null;
            /** @default null */
            lifted_by: string[];
        };
        CreateSuspensionDto: {
            service_id: string;
            user_id?: string;
            phone?: string;
            days?: number | null;
            reason: string;
            notify?: boolean;
        };
        FavoriteResponseDto: {
            /** @enum {string} */
            type: "service" | "organization";
            id: string;
            organization_id: string;
            available: boolean;
            service?: {
                id: string;
                organization_id: string;
                category_id: string | null;
                /** @default 0 */
                position: number;
                label: string;
                slug?: string;
                enabled: boolean;
                /**
                 * @default draft
                 * @enum {string}
                 */
                status: "draft" | "published" | "archived";
                /**
                 * Format: date-time
                 * @default null
                 */
                published_at: string | null;
                description?: string;
                /** @default [] */
                tags: string[];
                /** @default null */
                duration_minutes: number | null;
                /** @default null */
                price: number | null;
                currency?: string;
                address?: string;
                location?: {
                    /** @enum {string} */
                    type: "Point";
                    coordinates: [
                        number,
                        number
                    ];
                };
                value: {
                    heading_value?: string;
                    image_value?: string;
                    price_value?: string;
                };
                /** @default 0 */
                options_count: number;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            } | null;
            organization?: {
                id: string;
                main_label: string;
                category?: string;
                main_category?: string;
                main_image: string;
                /**
                 * @default active
                 * @enum {string}
                 */
                status: "active" | "temporarily_closed";
                closed_reason?: string;
                /**
                 * Format: date-time
                 * @default null
                 */
                closed_until: string | null;
                address?: string;
                location?: {
                    /** @enum {string} */
                    type: "Point";
                    coordinates: [
                        number,
                        number
                    ];
                };
                /** @default [] */
                working_hours: {
                    /** @enum {string} */
                    day: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                    from: string;
                    to: string;
                }[];
                /** @default [] */
                holidays: string[];
                /** @default UTC */
                timezone: string;
                /**
                 * @default {
                 *       "max_active_per_user": null,
                 *       "min_interval_days": null
                 *     }
                 */
                booking_policy: {
                    /** @default null */
                    max_active_per_user: number | null;
                    /** @default null */
                    min_interval_days: number | null;
                };
                distance_m?: number;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            } | null;
            /** Format: date-time */
            created_at: string;
        };
        SmsResponseDto: {
            id: string;
            phone: string;
            /** @enum {string} */
            purpose: "verification" | "test" | "reminder" | "waitlist" | "cancellation" | "reschedule" | "suspension";
            provider: string;
            /** @enum {string} */
            status: "sent" | "failed" | "blocked";
            /**
             * @default sms
             * @enum {string}
             */
            channel: "sms" | "viber" | "viber_sms";
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        TestSmsResponseDto: {
            phone: string;
            /** @enum {string} */
            status: "sent" | "failed" | "blocked";
        };
        SendTestSmsDto: {
            phone: string;
            /** @enum {string} */
            channel?: "sms" | "viber";
        };
        WebhookResponseDto: {
            id: string;
            organization_id: string[];
            url: string;
            events: string[];
            enabled: boolean;
            description?: string;
            /** Format: date-time */
            last_delivery_at?: string;
            /** Format: date-time */
            last_failure_at?: string;
            last_error?: string;
            /** @default 0 */
            consecutive_failures: number;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        CreateWebhookDto: {
            organization_id?: string | null;
            /** Format: uri */
            url: string;
            events: ("booking.created" | "booking.cancelled" | "booking.rescheduled" | "booking.status_changed" | "booking.reminder" | "booking.callback_due" | "waitlist.slot_available" | "booking.suspended" | "booking.suspension_lifted" | "webhook.test")[];
            enabled?: boolean;
            description?: string;
        };
        WebhookCreatedResponseDto: {
            id: string;
            organization_id: string[];
            url: string;
            events: string[];
            enabled: boolean;
            description?: string;
            /** Format: date-time */
            last_delivery_at?: string;
            /** Format: date-time */
            last_failure_at?: string;
            last_error?: string;
            /** @default 0 */
            consecutive_failures: number;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            secret: string;
        };
        UpdateWebhookDto: {
            /** Format: uri */
            url?: string;
            events?: ("booking.created" | "booking.cancelled" | "booking.rescheduled" | "booking.status_changed" | "booking.reminder" | "booking.callback_due" | "waitlist.slot_available" | "booking.suspended" | "booking.suspension_lifted" | "webhook.test")[];
            enabled?: boolean;
            description?: string | null;
        };
        WebhookTestResponseDto: {
            event_id: string;
            /** @enum {boolean} */
            queued: true;
        };
        OutboxEventResponseDto: {
            id: string;
            type: string;
            organization_id: string[];
            /** @enum {string} */
            status: "pending" | "delivered" | "failed";
            attempts: number;
            /** Format: date-time */
            next_attempt_at: string;
            /** Format: date-time */
            delivered_at?: string;
            last_error?: string;
            payload: {
                [key: string]: unknown;
            };
            deliveries: {
                target: string;
                /** @enum {string} */
                status: "pending" | "delivered" | "failed";
                attempts: number;
                last_error?: string;
                /** Format: date-time */
                delivered_at?: string;
            }[];
            /** @default null */
            request_id: string[];
            /** @default null */
            trace_id: string[];
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        NotificationResourceDto: {
            id: string;
            /** @enum {string} */
            type: "booking_cancelled" | "booking_rejected" | "slot_cancelled" | "booking_rescheduled" | "slot_moved" | "booking_confirmed" | "booking_created_for_you" | "booking_reminder" | "waitlist_slot_available" | "booking_suspended" | "booking_suspension_lifted" | "organization_message" | "client_booked" | "client_cancelled" | "client_rescheduled" | "callback_due" | "client_suspended";
            /** @enum {string} */
            audience: "client" | "staff";
            /** @enum {string} */
            status: "unread" | "read";
            title: string;
            body: string;
            organization: {
                id: string;
                label: string;
            };
            data: {
                booking_id?: string;
                service_id?: string;
                option_id?: string;
                slot_id?: string;
                service_label?: string;
                date?: string;
                time?: string;
                end_time?: string;
                previous_date?: string;
                previous_time?: string;
                reason?: string;
                until?: string;
                missed?: number;
                requires_action?: boolean;
                client_name?: string;
                client_phone?: string;
            };
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            read_at: string | null;
        };
        UnreadCountResponseDto: {
            unread: number;
            by_organization?: {
                organization_id: string;
                unread: number;
            }[];
        };
        ReadAllResponseDto: {
            updated: number;
        };
        ReadAllDto: {
            organization_id?: string;
            /** @enum {string} */
            audience?: "client" | "staff";
            /** Format: date-time */
            before?: string;
        };
        SendMessageDto: {
            user_id: string;
            title?: string;
            body: string;
        };
        SentMessageDto: {
            message_id: string;
            user_id: string;
            title: string;
            body: string;
            /** Format: date-time */
            created_at: string;
        };
        OrganizationClientDto: {
            user_id: string;
            name: string;
            phone: string;
            bookings: number;
            /** Format: date-time */
            last_booking_at: string;
        };
        ErrorEnvelope: {
            error: {
                /** @enum {string} */
                code: "VALIDATION_ERROR" | "UNAUTHENTICATED" | "TOKEN_INVALID" | "TOKEN_EXPIRED" | "SESSION_REVOKED" | "REFRESH_TOKEN_REUSED" | "FORBIDDEN" | "NOT_FOUND" | "CONFLICT" | "RATE_LIMITED" | "INTERNAL_ERROR" | "SERIALIZATION_ERROR" | "PAYLOAD_TOO_LARGE" | "UNSUPPORTED_MEDIA_TYPE" | "PAGE_OUT_OF_RANGE" | "DEPENDENCY_UNAVAILABLE" | "INVALID_CREDENTIALS" | "LOGIN_METHOD_DISABLED" | "LOGIN_IDENTIFIER_REQUIRED" | "OTP_INVALID" | "OTP_EXPIRED" | "OTP_ATTEMPTS_EXCEEDED" | "PHONE_COUNTRY_NOT_SUPPORTED" | "PASSWORD_TOO_SHORT" | "PASSWORD_TOO_LONG" | "PASSWORD_TOO_WEAK" | "PASSWORD_UNCHANGED" | "LOGIN_TOO_SHORT" | "ACCOUNT_HAS_NO_PASSWORD" | "USER_NOT_FOUND" | "LOGIN_TAKEN" | "PHONE_TAKEN" | "ADMIN_IDENTIFIER_REQUIRED" | "CLIENT_PHONE_REQUIRED" | "CLIENT_ACCOUNT_REQUIRED" | "ADMIN_PASSWORD_REQUIRED" | "ADMIN_PHONE_REQUIRED" | "LAST_SUPER_ADMIN" | "SELF_ROLE_CHANGE" | "PHONE_CODE_REQUIRED" | "PHONE_CODE_INVALID" | "ORGANIZATION_NOT_FOUND" | "CATEGORY_NOT_FOUND" | "SERVICE_NOT_FOUND" | "NEWS_NOT_FOUND" | "INFOSECTION_NOT_FOUND" | "IMAGE_NOT_FOUND" | "ARCHIVE_NOT_FOUND" | "CATEGORY_ORGANIZATION_MISMATCH" | "REORDER_MISMATCH" | "INCLUDE_NOT_ALLOWED" | "OPTION_NOT_FOUND" | "OPTION_HAS_BOOKINGS" | "SLOT_NOT_FOUND" | "SLOT_HAS_BOOKINGS" | "SLOT_NOT_DATED" | "SLOT_NOT_LIMITED" | "SLOT_NOT_TIMED" | "SLOT_NOT_BOOKABLE" | "SLOT_TIME_REQUIRED" | "SLOT_FULL" | "SLOT_EXPIRED" | "BOOKING_NOT_FOUND" | "SESSION_NOT_FOUND" | "BOOKING_ALREADY_EXISTS" | "IDEMPOTENCY_IN_PROGRESS" | "IDEMPOTENCY_KEY_REUSED" | "OPTION_DISABLED" | "SERVICE_MODIFIED" | "SLOT_TIME_BOOKED" | "SLOT_DATE_TAKEN" | "SLOT_TIME_OUT_OF_RANGE" | "SLOT_BULK_TOO_LARGE" | "SLOT_TYPE_NOT_ALLOWED" | "SLOT_NOT_RANGED" | "SLOT_RANGE_REQUIRED" | "SLOT_RANGE_INVALID" | "SERVICE_SLUG_TAKEN" | "SERVICE_NOT_DELETED" | "SERVICE_NOT_PUBLISHED" | "ORGANIZATION_CLOSED" | "BOOKING_LIMIT_REACHED" | "BOOKING_LEAD_TIME" | "BOOKING_TOO_FAR_AHEAD" | "BOOKING_CANCEL_DEADLINE_PASSED" | "BOOKING_FIELDS_INVALID" | "BOOKING_DOCUMENTS_REQUIRED" | "BOOKING_STATUS_TRANSITION" | "BOOKING_NOT_ACTIVE" | "BOOKING_NOT_DATED" | "BOOKING_ADDRESS_REQUIRED" | "BOOKING_PHONE_REQUIRED" | "BOOKING_SUSPENDED" | "BOOKING_ORGANIZATION_LIMIT_REACHED" | "BOOKING_TOO_FREQUENT" | "BOOKING_CHECK_IN_NOT_SUPPORTED" | "BOOKING_CHECK_IN_NOT_TODAY" | "SUSPENSION_NOT_FOUND" | "WAITLIST_NOT_FOUND" | "WAITLIST_ALREADY_JOINED" | "WAITLIST_NOT_SUPPORTED" | "SLOT_NOT_FULL" | "NEWS_SLUG_TAKEN" | "WEBHOOK_NOT_FOUND" | "CHANNEL_TEMPLATE_NOT_FOUND" | "NOTIFICATION_NOT_FOUND" | "CLIENT_NOT_FOUND" | "FIELDS_NOT_ALLOWED" | "FAVORITES_LIMIT_REACHED" | "FILE_REQUIRED" | "FILE_TYPE_NOT_ALLOWED" | "FILE_TOO_LARGE" | "IMAGE_TOO_LARGE" | "IMAGE_UNREADABLE" | "SMS_DELIVERY_FAILED" | "SMS_BUDGET_EXCEEDED" | "VIBER_DELIVERY_FAILED" | "VIBER_NOT_CONFIGURED" | "ARCHIVE_SERVICE_MISMATCH" | "SETTING_NOT_FOUND" | "SETTINGS_INVALID" | "SETTING_LOCKOUT_RISK" | "SETTINGS_READ_ONLY" | "SETTINGS_CONFLICT";
                message: string;
                details?: {
                    path?: string;
                    message: string;
                    code?: string;
                }[];
                request_id?: string;
            };
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    SettingsController_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["SettingsResourceDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    SettingsController_update: {
        parameters: {
            query?: never;
            header?: {
                /** @description ETag from GET /settings */
                "If-Match"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateSettingsDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["SettingsResourceDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `SETTINGS_CONFLICT` — The settings were changed by someone else. Reload them and try again.
             *
             *     `SETTINGS_READ_ONLY` — Settings are read-only while SETTINGS_IGNORE_DB is set.
             *
             *     `SETTING_LOCKOUT_RISK` — This change would leave administrators unable to sign in.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SETTINGS_CONFLICT" | "SETTINGS_READ_ONLY" | "SETTING_LOCKOUT_RISK";
                        };
                    };
                };
            };
            /** @description `SETTINGS_INVALID` — One or more settings are invalid. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SETTINGS_INVALID";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    SettingsController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["SettingResourceDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SETTING_NOT_FOUND` — There is no setting with this key.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SETTING_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    SettingsController_reset: {
        parameters: {
            query?: never;
            header?: {
                /** @description ETag from GET /settings */
                "If-Match"?: string;
            };
            path: {
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["SettingsResourceDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SETTING_NOT_FOUND` — There is no setting with this key.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SETTING_NOT_FOUND";
                        };
                    };
                };
            };
            /**
             * @description `SETTINGS_CONFLICT` — The settings were changed by someone else. Reload them and try again.
             *
             *     `SETTINGS_READ_ONLY` — Settings are read-only while SETTINGS_IGNORE_DB is set.
             *
             *     `SETTING_LOCKOUT_RISK` — This change would leave administrators unable to sign in.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SETTINGS_CONFLICT" | "SETTINGS_READ_ONLY" | "SETTING_LOCKOUT_RISK";
                        };
                    };
                };
            };
            /** @description `SETTINGS_INVALID` — One or more settings are invalid. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SETTINGS_INVALID";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AnalyticsController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                cursor?: string;
                mode?: "cursor" | "page";
                with_total?: boolean;
                type?: "organizations.listed" | "organization.viewed" | "auth.otp_requested" | "auth.otp_verified" | "booking.created" | "booking.cancelled";
                organization_id?: string;
                user_id?: string;
                user_role?: "common-user" | "common-admin" | "super-admin" | "operator";
                from?: string;
                to?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["AnalyticsEventResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number | null;
                            total_pages?: number | null;
                            has_next?: boolean;
                            next_cursor?: string | null;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    HealthController_live: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The Health Check is successful */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example ok */
                        status?: string;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       }
                         *     }
                         */
                        info?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /** @example {} */
                        error?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       }
                         *     }
                         */
                        details?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
            /** @description The Health Check is not successful */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example error */
                        status?: string;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       }
                         *     }
                         */
                        info?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "redis": {
                         *         "status": "down",
                         *         "message": "Could not connect"
                         *       }
                         *     }
                         */
                        error?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       },
                         *       "redis": {
                         *         "status": "down",
                         *         "message": "Could not connect"
                         *       }
                         *     }
                         */
                        details?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    HealthController_ready: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The Health Check is successful */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example ok */
                        status?: string;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       }
                         *     }
                         */
                        info?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /** @example {} */
                        error?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       }
                         *     }
                         */
                        details?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
            /** @description The Health Check is not successful */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example error */
                        status?: string;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       }
                         *     }
                         */
                        info?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "redis": {
                         *         "status": "down",
                         *         "message": "Could not connect"
                         *       }
                         *     }
                         */
                        error?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       },
                         *       "redis": {
                         *         "status": "down",
                         *         "message": "Could not connect"
                         *       }
                         *     }
                         */
                        details?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    HealthController_deps: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The Health Check is successful */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example ok */
                        status?: string;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       }
                         *     }
                         */
                        info?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /** @example {} */
                        error?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       }
                         *     }
                         */
                        details?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
            /** @description The Health Check is not successful */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example error */
                        status?: string;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       }
                         *     }
                         */
                        info?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "redis": {
                         *         "status": "down",
                         *         "message": "Could not connect"
                         *       }
                         *     }
                         */
                        error?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        } | null;
                        /**
                         * @example {
                         *       "database": {
                         *         "status": "up"
                         *       },
                         *       "redis": {
                         *         "status": "down",
                         *         "message": "Could not connect"
                         *       }
                         *     }
                         */
                        details?: {
                            [key: string]: {
                                status: string;
                            } & {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    HealthController_jobsStatus: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    HealthController_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    UsersController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                role?: "common-user" | "common-admin" | "super-admin" | "operator";
                organization_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["UserResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    UsersController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateUserDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    UsersController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["UserResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    UsersController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    UsersController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["UserResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    UsersController_setOrganizations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetUserOrganizationsDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["UserResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    UsersController_bookings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["UserBookingResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ChannelTemplatesController_list: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ChannelTemplateResourceDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `ORGANIZATION_NOT_FOUND` — Organization not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ChannelTemplatesController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ChannelTemplateResourceDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `CHANNEL_TEMPLATE_NOT_FOUND` — There is no channel template with this key.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             *
             *     `ORGANIZATION_NOT_FOUND` — Organization not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CHANNEL_TEMPLATE_NOT_FOUND" | "NOT_FOUND" | "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ChannelTemplatesController_save: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SaveChannelTemplateDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ChannelTemplateResourceDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `CHANNEL_TEMPLATE_NOT_FOUND` — There is no channel template with this key.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             *
             *     `ORGANIZATION_NOT_FOUND` — Organization not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CHANNEL_TEMPLATE_NOT_FOUND" | "NOT_FOUND" | "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ChannelTemplatesController_reset: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `CHANNEL_TEMPLATE_NOT_FOUND` — There is no channel template with this key.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             *
             *     `ORGANIZATION_NOT_FOUND` — Organization not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CHANNEL_TEMPLATE_NOT_FOUND" | "NOT_FOUND" | "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ChannelTemplatesController_preview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PreviewChannelTemplateDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["RenderedTemplateDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `CHANNEL_TEMPLATE_NOT_FOUND` — There is no channel template with this key.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             *
             *     `ORGANIZATION_NOT_FOUND` — Organization not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CHANNEL_TEMPLATE_NOT_FOUND" | "NOT_FOUND" | "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    NewsController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
                enabled?: string;
                main?: string;
                offers?: string;
                rubric?: string;
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["NewsResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    NewsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateNewsDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NewsResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `ORGANIZATION_NOT_FOUND` — Organization not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `NEWS_SLUG_TAKEN` — This slug is already used by another news item of the organization. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NEWS_SLUG_TAKEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    NewsController_rss: {
        parameters: {
            query?: {
                organization_id?: string;
                rubric?: string;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    NewsController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["NewsResponseDto"];
                    };
                };
            };
            /**
             * @description `NEWS_NOT_FOUND` — News item not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NEWS_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    NewsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    NewsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateNewsDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["NewsResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NEWS_NOT_FOUND` — News item not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NEWS_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `NEWS_SLUG_TAKEN` — This slug is already used by another news item of the organization. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NEWS_SLUG_TAKEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ImagesController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ImageResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_listImages: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ImageResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ImagesController_upload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ImageResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ImagesController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ArchivesController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
                type?: "news" | "service";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ArchiveResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ArchivesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateArchiveDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ArchiveResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ArchivesController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ArchiveResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ArchivesController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoginDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["TokenPairResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_register: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RegisterDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenPairResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_requestOtp: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OtpRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["OtpRequestResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_verifyOtp: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OtpVerifyDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["TokenPairResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_refresh: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RefreshDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["TokenPairResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_sessions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["SessionResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_revokeSession: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Session revoked */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_logout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_logoutAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_me: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["UserResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    AuthController_changePassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChangePasswordDto"];
            };
        };
        responses: {
            /** @description Password changed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ProfileController_update: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateProfileDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["UserResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `USER_NOT_FOUND` — User not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "USER_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `PHONE_TAKEN` — This phone number is already registered. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "PHONE_TAKEN";
                        };
                    };
                };
            };
            /**
             * @description `PHONE_CODE_INVALID` — The confirmation code is invalid or expired. Request a new one.
             *
             *     `PHONE_CODE_REQUIRED` — Confirm the new phone number with the code sent to it.
             *
             *     `PHONE_COUNTRY_NOT_SUPPORTED` — The phone number must belong to the supported country.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "PHONE_CODE_INVALID" | "PHONE_CODE_REQUIRED" | "PHONE_COUNTRY_NOT_SUPPORTED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ProfileController_requestPhoneCode: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PhoneCodeRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["OtpRequestResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `PHONE_COUNTRY_NOT_SUPPORTED` — The phone number must belong to the supported country. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "PHONE_COUNTRY_NOT_SUPPORTED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                main_category?: string;
                status?: "active" | "temporarily_closed";
                q?: string;
                empty?: string;
                include?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["MaskedOrganizationListItemDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOrganizationDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_nearby: {
        parameters: {
            query: {
                lat: number;
                lng: number;
                radius_m?: number;
                limit?: number;
                main_category?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["OrganizationResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["OrganizationDetailDto"];
                    };
                };
            };
            /** @description `FIELDS_NOT_ALLOWED` — One of the requested fields is not part of this response. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FIELDS_NOT_ALLOWED";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `ORGANIZATION_NOT_FOUND` — Organization not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateOrganizationDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["OrganizationResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_listNews: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["NewsResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_listInfoSections: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["InfoSectionResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_listCategories: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["CategoryResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_listServices: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["MaskedServiceResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_serviceBySlug: {
        parameters: {
            query?: {
                include?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["MaskedServiceResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_newsBySlug: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["NewsResponseDto"];
                    };
                };
            };
            /**
             * @description `NEWS_NOT_FOUND` — News item not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NEWS_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_reorderNews: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReorderDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_reorderInfoSections: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReorderDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_reorderCategories: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReorderDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationsController_reorderServices: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReorderDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    InfoSectionsController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
                enabled?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["InfoSectionResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    InfoSectionsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateInfoSectionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InfoSectionResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    InfoSectionsController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["InfoSectionResponseDto"];
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    InfoSectionsController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    InfoSectionsController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateInfoSectionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["InfoSectionResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    CategoriesController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
                enabled?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["CategoryResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    CategoriesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCategoryDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategoryResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    CategoriesController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["CategoryResponseDto"];
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    CategoriesController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    CategoriesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateCategoryDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["CategoryResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    CategoriesController_reorderServices: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReorderDto"];
            };
        };
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
                category_id?: string;
                enabled?: string;
                status?: "draft" | "published" | "archived";
                tags?: string;
                q?: string;
                deleted?: string;
                include?: string;
                fields?: string;
                facets?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["MaskedServiceResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /**
             * @description `FIELDS_NOT_ALLOWED` — One of the requested fields is not part of this response.
             *
             *     `VALIDATION_ERROR` — The request is invalid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FIELDS_NOT_ALLOWED" | "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `PAGE_OUT_OF_RANGE` — The requested page is beyond the supported depth. Narrow the query instead. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "PAGE_OUT_OF_RANGE";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateServiceDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServiceResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `CATEGORY_NOT_FOUND` — Category not found.
             *
             *     `ORGANIZATION_NOT_FOUND` — Organization not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CATEGORY_NOT_FOUND" | "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /**
             * @description `CONFLICT` — The request conflicts with the current state.
             *
             *     `SERVICE_SLUG_TAKEN` — This slug is already used by another service of the organization.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CONFLICT" | "SERVICE_SLUG_TAKEN";
                        };
                    };
                };
            };
            /**
             * @description `CATEGORY_ORGANIZATION_MISMATCH` — The category belongs to a different organization.
             *
             *     `SLOT_RANGE_INVALID` — The requested interval does not fit the slot range, step or duration limits.
             *
             *     `SLOT_RANGE_REQUIRED` — The interval needs from and to, or working hours for its weekday.
             *
             *     `SLOT_TYPE_NOT_ALLOWED` — This slot type is not allowed for the option service type.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CATEGORY_ORGANIZATION_MISMATCH" | "SLOT_RANGE_INVALID" | "SLOT_RANGE_REQUIRED" | "SLOT_TYPE_NOT_ALLOWED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_nearby: {
        parameters: {
            query: {
                lat: number;
                lng: number;
                radius_m?: number;
                limit?: number;
                tags?: string;
                include?: string;
                fields?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["MaskedServiceResponseDto"];
                    };
                };
            };
            /**
             * @description `FIELDS_NOT_ALLOWED` — One of the requested fields is not part of this response.
             *
             *     `VALIDATION_ERROR` — The request is invalid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FIELDS_NOT_ALLOWED" | "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_getOne: {
        parameters: {
            query?: {
                include?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["MaskedServiceResponseDto"];
                    };
                };
            };
            /**
             * @description `FIELDS_NOT_ALLOWED` — One of the requested fields is not part of this response.
             *
             *     `VALIDATION_ERROR` — The request is invalid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FIELDS_NOT_ALLOWED" | "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_remove: {
        parameters: {
            query?: {
                permanent?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateServiceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ServiceResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `CATEGORY_NOT_FOUND` — Category not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CATEGORY_NOT_FOUND" | "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `SERVICE_SLUG_TAKEN` — This slug is already used by another service of the organization. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SERVICE_SLUG_TAKEN";
                        };
                    };
                };
            };
            /** @description `CATEGORY_ORGANIZATION_MISMATCH` — The category belongs to a different organization. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CATEGORY_ORGANIZATION_MISMATCH";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_availability: {
        parameters: {
            query?: {
                from?: string;
                to?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["AvailabilityResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_slotCandidates: {
        parameters: {
            query?: {
                from?: string;
                to?: string;
                after?: string;
                before?: string;
                option_id?: string;
                only_available?: string;
                limit?: number;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ServiceSlotsResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_history: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ServiceRevisionResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_setStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetServiceStatusDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ServiceResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_restore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ServiceResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `SERVICE_NOT_DELETED` — The service is not in the trash. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SERVICE_NOT_DELETED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_clone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CloneServiceDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServiceResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `SERVICE_SLUG_TAKEN` — This slug is already used by another service of the organization. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SERVICE_SLUG_TAKEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_addOption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOptionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServiceResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `CONFLICT` — The request conflicts with the current state. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CONFLICT";
                        };
                    };
                };
            };
            /**
             * @description `SLOT_RANGE_INVALID` — The requested interval does not fit the slot range, step or duration limits.
             *
             *     `SLOT_RANGE_REQUIRED` — The interval needs from and to, or working hours for its weekday.
             *
             *     `SLOT_TYPE_NOT_ALLOWED` — This slot type is not allowed for the option service type.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SLOT_RANGE_INVALID" | "SLOT_RANGE_REQUIRED" | "SLOT_TYPE_NOT_ALLOWED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_removeOption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                option_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `OPTION_NOT_FOUND` — The requested service option does not exist.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "OPTION_NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `OPTION_HAS_BOOKINGS` — This option still has bookings. Cancel them before removing it. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "OPTION_HAS_BOOKINGS";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_updateOption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                option_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateOptionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ServiceResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `OPTION_NOT_FOUND` — The requested service option does not exist.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "OPTION_NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `SLOT_TYPE_NOT_ALLOWED` — This slot type is not allowed for the option service type. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SLOT_TYPE_NOT_ALLOWED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_setRecurrence: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                option_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecurrenceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ServiceResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `OPTION_NOT_FOUND` — The requested service option does not exist.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "OPTION_NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /**
             * @description `SLOT_RANGE_INVALID` — The requested interval does not fit the slot range, step or duration limits.
             *
             *     `SLOT_RANGE_REQUIRED` — The interval needs from and to, or working hours for its weekday.
             *
             *     `SLOT_TYPE_NOT_ALLOWED` — This slot type is not allowed for the option service type.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SLOT_RANGE_INVALID" | "SLOT_RANGE_REQUIRED" | "SLOT_TYPE_NOT_ALLOWED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_addSlot: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                option_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ServiceResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `OPTION_NOT_FOUND` — The requested service option does not exist.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "OPTION_NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `CONFLICT` — The request conflicts with the current state. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CONFLICT";
                        };
                    };
                };
            };
            /**
             * @description `SLOT_RANGE_INVALID` — The requested interval does not fit the slot range, step or duration limits.
             *
             *     `SLOT_RANGE_REQUIRED` — The interval needs from and to, or working hours for its weekday.
             *
             *     `SLOT_TYPE_NOT_ALLOWED` — This slot type is not allowed for the option service type.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SLOT_RANGE_INVALID" | "SLOT_RANGE_REQUIRED" | "SLOT_TYPE_NOT_ALLOWED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_removeSlot: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                option_id: string;
                slot_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `OPTION_NOT_FOUND` — The requested service option does not exist.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             *
             *     `SLOT_NOT_FOUND` — The requested slot does not exist.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "OPTION_NOT_FOUND" | "SERVICE_NOT_FOUND" | "SLOT_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `SLOT_HAS_BOOKINGS` — This slot still has bookings. Cancel them before removing it. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SLOT_HAS_BOOKINGS";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_updateSlot: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                option_id: string;
                slot_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateSlotDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ServiceResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `OPTION_NOT_FOUND` — The requested service option does not exist.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             *
             *     `SLOT_NOT_FOUND` — The requested slot does not exist.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "OPTION_NOT_FOUND" | "SERVICE_NOT_FOUND" | "SLOT_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `SLOT_TIME_BOOKED` — A time that already has bookings cannot be renamed or removed. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SLOT_TIME_BOOKED";
                        };
                    };
                };
            };
            /**
             * @description `SLOT_NOT_DATED` — This slot type has no date.
             *
             *     `SLOT_NOT_LIMITED` — This slot type has no capacity limit.
             *
             *     `SLOT_NOT_RANGED` — This slot type has no bookable interval.
             *
             *     `SLOT_NOT_TIMED` — This slot type has no time entries.
             *
             *     `SLOT_RANGE_INVALID` — The requested interval does not fit the slot range, step or duration limits.
             *
             *     `SLOT_RANGE_REQUIRED` — The interval needs from and to, or working hours for its weekday.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SLOT_NOT_DATED" | "SLOT_NOT_LIMITED" | "SLOT_NOT_RANGED" | "SLOT_NOT_TIMED" | "SLOT_RANGE_INVALID" | "SLOT_RANGE_REQUIRED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_closeSlot: {
        parameters: {
            query?: never;
            header: {
                "idempotency-key": string;
            };
            path: {
                id: string;
                option_id: string;
                slot_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CloseSlotDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["CloseSlotResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `OPTION_NOT_FOUND` — The requested service option does not exist.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             *
             *     `SLOT_NOT_FOUND` — The requested slot does not exist.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "OPTION_NOT_FOUND" | "SERVICE_NOT_FOUND" | "SLOT_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `IDEMPOTENCY_IN_PROGRESS` — A request with this Idempotency-Key is still being processed. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "IDEMPOTENCY_IN_PROGRESS";
                        };
                    };
                };
            };
            /**
             * @description `IDEMPOTENCY_KEY_REUSED` — This Idempotency-Key was already used for a different request.
             *
             *     `SLOT_BULK_TOO_LARGE` — The slot holds more bookings than one bulk operation may touch.
             *
             *     `SLOT_NOT_BOOKABLE` — This slot type cannot be booked.
             *
             *     `SLOT_NOT_TIMED` — This slot type has no time entries.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "IDEMPOTENCY_KEY_REUSED" | "SLOT_BULK_TOO_LARGE" | "SLOT_NOT_BOOKABLE" | "SLOT_NOT_TIMED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_moveSlot: {
        parameters: {
            query?: never;
            header: {
                "idempotency-key": string;
            };
            path: {
                id: string;
                option_id: string;
                slot_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MoveSlotDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["MoveSlotResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `OPTION_NOT_FOUND` — The requested service option does not exist.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             *
             *     `SLOT_NOT_FOUND` — The requested slot does not exist.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "OPTION_NOT_FOUND" | "SERVICE_NOT_FOUND" | "SLOT_NOT_FOUND";
                        };
                    };
                };
            };
            /**
             * @description `IDEMPOTENCY_IN_PROGRESS` — A request with this Idempotency-Key is still being processed.
             *
             *     `SLOT_DATE_TAKEN` — Another slot of this option already covers that date.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "IDEMPOTENCY_IN_PROGRESS" | "SLOT_DATE_TAKEN";
                        };
                    };
                };
            };
            /**
             * @description `IDEMPOTENCY_KEY_REUSED` — This Idempotency-Key was already used for a different request.
             *
             *     `SLOT_BULK_TOO_LARGE` — The slot holds more bookings than one bulk operation may touch.
             *
             *     `SLOT_EXPIRED` — The slot date has passed.
             *
             *     `SLOT_NOT_DATED` — This slot type has no date.
             *
             *     `SLOT_NOT_TIMED` — This slot type has no time entries.
             *
             *     `SLOT_TIME_OUT_OF_RANGE` — The shift moves a time out of the day.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "IDEMPOTENCY_KEY_REUSED" | "SLOT_BULK_TOO_LARGE" | "SLOT_EXPIRED" | "SLOT_NOT_DATED" | "SLOT_NOT_TIMED" | "SLOT_TIME_OUT_OF_RANGE";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_forService: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                option_id?: string;
                slot_id?: string;
                status?: "pending" | "confirmed" | "arrived" | "completed" | "no_show" | "cancelled" | "active" | "all";
                date_from?: string;
                date_to?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["BookingResourceDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_createBooking: {
        parameters: {
            query?: never;
            header: {
                "idempotency-key": string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateBookingDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BookingCreatedResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             *
             *     `SLOT_NOT_FOUND` — The requested slot does not exist.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND" | "SLOT_NOT_FOUND";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_ALREADY_EXISTS` — You already have a booking for this slot.
             *
             *     `CONFLICT` — The request conflicts with the current state.
             *
             *     `IDEMPOTENCY_IN_PROGRESS` — A request with this Idempotency-Key is still being processed.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_ALREADY_EXISTS" | "CONFLICT" | "IDEMPOTENCY_IN_PROGRESS";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_ADDRESS_REQUIRED` — An address is required for this booking.
             *
             *     `BOOKING_DOCUMENTS_REQUIRED` — Required documents were not confirmed.
             *
             *     `BOOKING_FIELDS_INVALID` — The booking form is invalid.
             *
             *     `BOOKING_LEAD_TIME` — The slot starts too soon to be booked.
             *
             *     `BOOKING_LIMIT_REACHED` — You already have the maximum number of active bookings for this service.
             *
             *     `BOOKING_ORGANIZATION_LIMIT_REACHED` — You already have the maximum number of active bookings with this organization.
             *
             *     `BOOKING_PHONE_REQUIRED` — A phone number is required for a call-back request.
             *
             *     `BOOKING_SUSPENDED` — Booking this service is suspended for your account.
             *
             *     `BOOKING_TOO_FAR_AHEAD` — The slot is too far ahead to be booked.
             *
             *     `BOOKING_TOO_FREQUENT` — You booked too recently. Bookings must be further apart.
             *
             *     `CLIENT_ACCOUNT_REQUIRED` — This phone number belongs to a staff account. Book on behalf of clients only.
             *
             *     `IDEMPOTENCY_KEY_REUSED` — This Idempotency-Key was already used for a different request.
             *
             *     `OPTION_DISABLED` — This service option is disabled.
             *
             *     `ORGANIZATION_CLOSED` — The organization is temporarily closed.
             *
             *     `PHONE_COUNTRY_NOT_SUPPORTED` — The phone number must belong to the supported country.
             *
             *     `SERVICE_NOT_PUBLISHED` — The service is not published.
             *
             *     `SLOT_EXPIRED` — The slot date has passed.
             *
             *     `SLOT_FULL` — The slot is fully booked.
             *
             *     `SLOT_NOT_BOOKABLE` — This slot type cannot be booked.
             *
             *     `SLOT_RANGE_INVALID` — The requested interval does not fit the slot range, step or duration limits.
             *
             *     `SLOT_TIME_REQUIRED` — A time is required for this slot.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_ADDRESS_REQUIRED" | "BOOKING_DOCUMENTS_REQUIRED" | "BOOKING_FIELDS_INVALID" | "BOOKING_LEAD_TIME" | "BOOKING_LIMIT_REACHED" | "BOOKING_ORGANIZATION_LIMIT_REACHED" | "BOOKING_PHONE_REQUIRED" | "BOOKING_SUSPENDED" | "BOOKING_TOO_FAR_AHEAD" | "BOOKING_TOO_FREQUENT" | "CLIENT_ACCOUNT_REQUIRED" | "IDEMPOTENCY_KEY_REUSED" | "OPTION_DISABLED" | "ORGANIZATION_CLOSED" | "PHONE_COUNTRY_NOT_SUPPORTED" | "SERVICE_NOT_PUBLISHED" | "SLOT_EXPIRED" | "SLOT_FULL" | "SLOT_NOT_BOOKABLE" | "SLOT_RANGE_INVALID" | "SLOT_TIME_REQUIRED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_cancelBooking: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                booking_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_NOT_FOUND` — Booking not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_CANCEL_DEADLINE_PASSED` — The cancellation deadline for this booking has passed.
             *
             *     `BOOKING_NOT_ACTIVE` — The booking is no longer active.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_CANCEL_DEADLINE_PASSED" | "BOOKING_NOT_ACTIVE";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_waitlistForService: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                option_id?: string;
                slot_id?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["WaitlistEntryResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    ServicesController_joinWaitlist: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["JoinWaitlistDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WaitlistEntryResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             *
             *     `SLOT_NOT_FOUND` — The requested slot does not exist.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SERVICE_NOT_FOUND" | "SLOT_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `WAITLIST_ALREADY_JOINED` — You are already on the waitlist for this slot. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "WAITLIST_ALREADY_JOINED";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_SUSPENDED` — Booking this service is suspended for your account.
             *
             *     `OPTION_DISABLED` — This service option is disabled.
             *
             *     `ORGANIZATION_CLOSED` — The organization is temporarily closed.
             *
             *     `SERVICE_NOT_PUBLISHED` — The service is not published.
             *
             *     `SLOT_EXPIRED` — The slot date has passed.
             *
             *     `SLOT_NOT_BOOKABLE` — This slot type cannot be booked.
             *
             *     `SLOT_NOT_FULL` — The slot still has free capacity. Book it instead of joining the waitlist.
             *
             *     `SLOT_TIME_REQUIRED` — A time is required for this slot.
             *
             *     `WAITLIST_NOT_SUPPORTED` — This slot type has no waitlist.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_SUSPENDED" | "OPTION_DISABLED" | "ORGANIZATION_CLOSED" | "SERVICE_NOT_PUBLISHED" | "SLOT_EXPIRED" | "SLOT_NOT_BOOKABLE" | "SLOT_NOT_FULL" | "SLOT_TIME_REQUIRED" | "WAITLIST_NOT_SUPPORTED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
                service_id?: string;
                user_id?: string;
                option_id?: string;
                slot_id?: string;
                child_type?: "date_time" | "date" | "apply" | "time_range" | "callback" | "pickup" | "courier" | "paycard";
                status?: "pending" | "confirmed" | "arrived" | "completed" | "no_show" | "cancelled" | "active" | "all";
                date_from?: string;
                date_to?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["BookingResourceDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_stats: {
        parameters: {
            query?: {
                organization_id?: string;
                service_id?: string;
                date_from?: string;
                date_to?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["BookingStatsResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_export: {
        parameters: {
            query?: {
                organization_id?: string;
                service_id?: string;
                user_id?: string;
                option_id?: string;
                slot_id?: string;
                child_type?: "date_time" | "date" | "apply" | "time_range" | "callback" | "pickup" | "courier" | "paycard";
                status?: "pending" | "confirmed" | "arrived" | "completed" | "no_show" | "cancelled" | "active" | "all";
                date_from?: string;
                date_to?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/csv": string;
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_checkInByCode: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CheckInByCodeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["BookingResourceDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `BOOKING_NOT_FOUND` — Booking not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_FOUND";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_CHECK_IN_NOT_SUPPORTED` — This booking has no visit to check in to.
             *
             *     `BOOKING_CHECK_IN_NOT_TODAY` — Check-in is open on the day of the booking only.
             *
             *     `BOOKING_STATUS_TRANSITION` — The booking cannot move to this status from its current one.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_CHECK_IN_NOT_SUPPORTED" | "BOOKING_CHECK_IN_NOT_TODAY" | "BOOKING_STATUS_TRANSITION";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_own: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                status?: "pending" | "confirmed" | "arrived" | "completed" | "no_show" | "cancelled" | "active" | "all";
                date_from?: string;
                date_to?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["BookingResourceDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_feed: {
        parameters: {
            query?: {
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/calendar": string;
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_issueCalendarToken: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CalendarTokenResponseDto"];
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_revokeCalendarToken: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_ownWaitlist: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                option_id?: string;
                slot_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["WaitlistEntryResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_leaveWaitlist: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `WAITLIST_NOT_FOUND` — Waitlist entry not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "WAITLIST_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["BookingResourceDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_NOT_FOUND` — Booking not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_cancel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_NOT_FOUND` — Booking not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_CANCEL_DEADLINE_PASSED` — The cancellation deadline for this booking has passed.
             *
             *     `BOOKING_NOT_ACTIVE` — The booking is no longer active.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_CANCEL_DEADLINE_PASSED" | "BOOKING_NOT_ACTIVE";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_calendarOf: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/calendar": string;
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_NOT_FOUND` — Booking not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `BOOKING_NOT_DATED` — The booking has no date, so it cannot be added to a calendar. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_DATED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_setStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetBookingStatusDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["BookingResourceDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_NOT_FOUND` — Booking not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_NOT_ACTIVE` — The booking is no longer active.
             *
             *     `BOOKING_STATUS_TRANSITION` — The booking cannot move to this status from its current one.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_ACTIVE" | "BOOKING_STATUS_TRANSITION";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_confirm: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["BookingResourceDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_NOT_FOUND` — Booking not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `BOOKING_STATUS_TRANSITION` — The booking cannot move to this status from its current one. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_STATUS_TRANSITION";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_checkIn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["BookingResourceDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_NOT_FOUND` — Booking not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_CHECK_IN_NOT_SUPPORTED` — This booking has no visit to check in to.
             *
             *     `BOOKING_CHECK_IN_NOT_TODAY` — Check-in is open on the day of the booking only.
             *
             *     `BOOKING_STATUS_TRANSITION` — The booking cannot move to this status from its current one.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_CHECK_IN_NOT_SUPPORTED" | "BOOKING_CHECK_IN_NOT_TODAY" | "BOOKING_STATUS_TRANSITION";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    BookingsController_reschedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RescheduleBookingDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["BookingResourceDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_NOT_FOUND` — Booking not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             *
             *     `SLOT_NOT_FOUND` — The requested slot does not exist.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_NOT_FOUND" | "NOT_FOUND" | "SLOT_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `BOOKING_ALREADY_EXISTS` — You already have a booking for this slot. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_ALREADY_EXISTS";
                        };
                    };
                };
            };
            /**
             * @description `BOOKING_ADDRESS_REQUIRED` — An address is required for this booking.
             *
             *     `BOOKING_CANCEL_DEADLINE_PASSED` — The cancellation deadline for this booking has passed.
             *
             *     `BOOKING_LEAD_TIME` — The slot starts too soon to be booked.
             *
             *     `BOOKING_NOT_ACTIVE` — The booking is no longer active.
             *
             *     `BOOKING_TOO_FAR_AHEAD` — The slot is too far ahead to be booked.
             *
             *     `BOOKING_TOO_FREQUENT` — You booked too recently. Bookings must be further apart.
             *
             *     `OPTION_DISABLED` — This service option is disabled.
             *
             *     `SLOT_EXPIRED` — The slot date has passed.
             *
             *     `SLOT_FULL` — The slot is fully booked.
             *
             *     `SLOT_NOT_BOOKABLE` — This slot type cannot be booked.
             *
             *     `SLOT_RANGE_INVALID` — The requested interval does not fit the slot range, step or duration limits.
             *
             *     `SLOT_TIME_REQUIRED` — A time is required for this slot.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "BOOKING_ADDRESS_REQUIRED" | "BOOKING_CANCEL_DEADLINE_PASSED" | "BOOKING_LEAD_TIME" | "BOOKING_NOT_ACTIVE" | "BOOKING_TOO_FAR_AHEAD" | "BOOKING_TOO_FREQUENT" | "OPTION_DISABLED" | "SLOT_EXPIRED" | "SLOT_FULL" | "SLOT_NOT_BOOKABLE" | "SLOT_RANGE_INVALID" | "SLOT_TIME_REQUIRED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    SuspensionsController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
                service_id?: string;
                user_id?: string;
                status?: "active" | "all";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["SuspensionResourceDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    SuspensionsController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateSuspensionDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SuspensionResourceDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `SERVICE_NOT_FOUND` — Service not found.
             *
             *     `USER_NOT_FOUND` — User not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SERVICE_NOT_FOUND" | "USER_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `CLIENT_ACCOUNT_REQUIRED` — This phone number belongs to a staff account. Book on behalf of clients only. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CLIENT_ACCOUNT_REQUIRED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    SuspensionsController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["SuspensionResourceDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SUSPENSION_NOT_FOUND` — Suspension not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SUSPENSION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    SuspensionsController_lift: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `SUSPENSION_NOT_FOUND` — Suspension not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "SUSPENSION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    FavoritesController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                type?: "service" | "organization";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["FavoriteResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    FavoritesController_add: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "service" | "organization";
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `ORGANIZATION_NOT_FOUND` — Organization not found.
             *
             *     `SERVICE_NOT_FOUND` — Service not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "ORGANIZATION_NOT_FOUND" | "SERVICE_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `FAVORITES_LIMIT_REACHED` — You already have the maximum number of favorites. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FAVORITES_LIMIT_REACHED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    FavoritesController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "service" | "organization";
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    SmsController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                cursor?: string;
                mode?: "cursor" | "page";
                with_total?: boolean;
                from?: string;
                to?: string;
                period?: "this_month" | "last_month";
                phone?: string;
                channel?: "sms" | "viber" | "viber_sms";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["SmsResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number | null;
                            total_pages?: number | null;
                            has_next?: boolean;
                            next_cursor?: string | null;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    SmsController_sendTest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SendTestSmsDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["TestSmsResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    WebhooksController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["WebhookResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    WebhooksController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateWebhookDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookCreatedResponseDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `ORGANIZATION_NOT_FOUND` — Organization not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    WebhooksController_getOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["WebhookResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `WEBHOOK_NOT_FOUND` — Webhook not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "WEBHOOK_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    WebhooksController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `WEBHOOK_NOT_FOUND` — Webhook not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "WEBHOOK_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    WebhooksController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateWebhookDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["WebhookResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `WEBHOOK_NOT_FOUND` — Webhook not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "WEBHOOK_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    WebhooksController_rotate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["WebhookCreatedResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `WEBHOOK_NOT_FOUND` — Webhook not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "WEBHOOK_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    WebhooksController_test: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["WebhookTestResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `WEBHOOK_NOT_FOUND` — Webhook not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "WEBHOOK_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    WebhooksController_events: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
                type?: "booking.created" | "booking.cancelled" | "booking.rescheduled" | "booking.status_changed" | "booking.reminder" | "booking.callback_due" | "waitlist.slot_available" | "booking.suspended" | "booking.suspension_lifted" | "webhook.test";
                status?: "pending" | "delivered" | "failed";
                request_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["OutboxEventResponseDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    WebhooksController_replay: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["OutboxEventResponseDto"];
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `NOT_FOUND` — The requested resource was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `CONFLICT` — The request conflicts with the current state. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CONFLICT";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    NotificationsController_list: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                organization_id?: string;
                audience?: "client" | "staff";
                status?: "unread" | "read" | "all";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["NotificationResourceDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `PAGE_OUT_OF_RANGE` — The requested page is beyond the supported depth. Narrow the query instead. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "PAGE_OUT_OF_RANGE";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    NotificationsController_unreadCount: {
        parameters: {
            query?: {
                organization_id?: string;
                audience?: "client" | "staff";
                by_organization?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["UnreadCountResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    NotificationsController_readAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReadAllDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ReadAllResponseDto"];
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    NotificationsController_read: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOTIFICATION_NOT_FOUND` — Notification not found.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOTIFICATION_NOT_FOUND" | "NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationMessagesController_send: {
        parameters: {
            query?: never;
            header: {
                "idempotency-key": string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SendMessageDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SentMessageDto"];
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `CLIENT_NOT_FOUND` — This user is not a client of the organization.
             *
             *     `NOT_FOUND` — The requested resource was not found.
             *
             *     `ORGANIZATION_NOT_FOUND` — Organization not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "CLIENT_NOT_FOUND" | "NOT_FOUND" | "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `IDEMPOTENCY_IN_PROGRESS` — A request with this Idempotency-Key is still being processed. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "IDEMPOTENCY_IN_PROGRESS";
                        };
                    };
                };
            };
            /** @description `IDEMPOTENCY_KEY_REUSED` — This Idempotency-Key was already used for a different request. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "IDEMPOTENCY_KEY_REUSED";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
    OrganizationMessagesController_clients: {
        parameters: {
            query?: {
                page?: number;
                limit?: number;
                sort?: string;
                order?: "asc" | "desc";
                q?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["OrganizationClientDto"][];
                        meta?: {
                            page?: number;
                            limit?: number;
                            total?: number;
                            total_pages?: number;
                            has_next?: boolean;
                        };
                    };
                };
            };
            /** @description `VALIDATION_ERROR` — The request is invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "VALIDATION_ERROR";
                        };
                    };
                };
            };
            /**
             * @description `SESSION_REVOKED` — The session has been revoked.
             *
             *     `TOKEN_EXPIRED` — The token has expired.
             *
             *     `TOKEN_INVALID` — The token is invalid.
             *
             *     `UNAUTHENTICATED` — Authentication is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "SESSION_REVOKED" | "TOKEN_EXPIRED" | "TOKEN_INVALID" | "UNAUTHENTICATED";
                        };
                    };
                };
            };
            /** @description `FORBIDDEN` — You are not allowed to perform this action. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "FORBIDDEN";
                        };
                    };
                };
            };
            /**
             * @description `NOT_FOUND` — The requested resource was not found.
             *
             *     `ORGANIZATION_NOT_FOUND` — Organization not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "NOT_FOUND" | "ORGANIZATION_NOT_FOUND";
                        };
                    };
                };
            };
            /** @description `PAGE_OUT_OF_RANGE` — The requested page is beyond the supported depth. Narrow the query instead. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "PAGE_OUT_OF_RANGE";
                        };
                    };
                };
            };
            /** @description `RATE_LIMITED` — Too many requests. Please try again later. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "RATE_LIMITED";
                        };
                    };
                };
            };
            /**
             * @description `INTERNAL_ERROR` — An unexpected error occurred.
             *
             *     `SERIALIZATION_ERROR` — The response could not be serialized.
             */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"] & {
                        error?: {
                            /** @enum {unknown} */
                            code?: "INTERNAL_ERROR" | "SERIALIZATION_ERROR";
                        };
                    };
                };
            };
        };
    };
}
