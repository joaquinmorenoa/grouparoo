export const DEFAULT = {
  routes: (api) => {
    // prettier-ignore
    return {
      get: [
        { path: "/v:apiVersion/status", action: "status" },
        { path: "/v:apiVersion/swagger", action: "swagger" },
        { path: "/v:apiVersion/plugins", action: "plugins" },
        { path: "/v:apiVersion/session", action: "session:view" },
        { path: "/v:apiVersion/totals", action: "totals" },
        { path: "/v:apiVersion/logs", action: "logs:list" },
        { path: "/v:apiVersion/imports", action: "imports:list" },
        { path: "/v:apiVersion/import/:guid", action: "import:view" },
        { path: "/v:apiVersion/exports", action: "exports:list" },
        { path: "/v:apiVersion/export/:guid", action: "export:view" },
        { path: "/v:apiVersion/navigation", action: "navigation:list" },
        { path: "/v:apiVersion/teams", action: "teams:list" },
        { path: "/v:apiVersion/team/:guid", action: "team:view" },
        { path: "/v:apiVersion/teamMembers", action: "teamMembers:list" },
        { path: "/v:apiVersion/team/:guid/members", action: "teamMembers:list" },
        { path: "/v:apiVersion/team/member/:guid", action: "teamMember:view" },
        { path: "/v:apiVersion/apiKeys", action: "apiKeys:list" },
        { path: "/v:apiVersion/apiKey/:guid", action: "apiKey:view" },
        { path: "/v:apiVersion/groups", action: "groups:list" },
        { path: "/v:apiVersion/groups/ruleOptions",action: "groups:ruleOptions" },
        { path: "/v:apiVersion/group/:guid", action: "group:view" },
        { path: "/v:apiVersion/group/:groupGuid/profiles", action: "profiles:list" },
        { path: "/v:apiVersion/group/:guid/destinations", action: "group:listDestinations" },
        { path: "/v:apiVersion/group/:guid/countComponentMembers", action: "group:countComponentMembers" },
        { path: "/v:apiVersion/group/:guid/countPotentialMembers", action: "group:countPotentialMembers" },
        { path: "/v:apiVersion/profilePropertyRules", action: "profilePropertyRules:list" },
        { path: "/v:apiVersion/profilePropertyRuleOptions", action: "profilePropertyRules:options" },
        { path: "/v:apiVersion/profilePropertyRule/:guid", action: "profilePropertyRule:view" },
        { path: "/v:apiVersion/profilePropertyRule/:guid/filterOptions", action: "profilePropertyRule:filterOptions" },
        { path: "/v:apiVersion/profilePropertyRule/:guid/groups", action: "profilePropertyRule:groups" },
        { path: "/v:apiVersion/profilePropertyRule/:guid/profilePreview", action: "profilePropertyRule:profilePreview" },
        { path: "/v:apiVersion/profiles", action: "profiles:list" },
        { path: "/v:apiVersion/profiles/autocompleteProfileProperty", action: "profiles:autocompleteProfileProperty" },
        { path: "/v:apiVersion/profile/:guid", action: "profile:view" },
        { path: "/v:apiVersion/profile/:profileGuid/logs", action: "logs:list" },
        { path: "/v:apiVersion/account", action: "account:view" },
        { path: "/v:apiVersion/settings", action: "settings:list" },
        { path: "/v:apiVersion/events", action: "events:list" },
        { path: "/v:apiVersion/events/counts", action: "events:counts" },
        { path: "/v:apiVersion/events/types", action: "events:types" },
        { path: "/v:apiVersion/events/autocompleteType", action: "events:autocompleteType" },
        { path: "/v:apiVersion/apps", action: "apps:list" },
        { path: "/v:apiVersion/sources", action: "sources:list" },
        { path: "/v:apiVersion/source/:guid/connectionOptions", action: "source:connectionOptions" },
        { path: "/v:apiVersion/source/:guid/preview", action: "source:preview" },
        { path: "/v:apiVersion/runs", action: "runs:list" },
        { path: "/v:apiVersion/run/:guid", action: "run:view" },
        { path: "/v:apiVersion/appOptions", action: "app:options" },
        { path: "/v:apiVersion/app/:guid/optionOptions", action: "app:optionOptions" },
        { path: "/v:apiVersion/app/:guid", action: "app:view" },
        { path: "/v:apiVersion/event/:guid", action: "event:view" },
        { path: "/v:apiVersion/sources/connectionApps", action: "sources:connectionApps" },
        { path: "/v:apiVersion/source/:guid", action: "source:view" },
        { path: "/v:apiVersion/schedules", action: "schedules:list" },
        { path: "/v:apiVersion/schedule/:guid", action: "schedule:view" },
        { path: "/v:apiVersion/destinations/connectionApps", action: "destinations:connectionApps" },
        { path: "/v:apiVersion/destinations", action: "destinations:list" },
        { path: "/v:apiVersion/destinationOptions", action: "destination:options" },
        { path: "/v:apiVersion/destination/:guid", action: "destination:view" },
        { path: "/v:apiVersion/destination/:guid/connectionOptions", action: "destination:connectionOptions" },
        { path: "/v:apiVersion/destination/:guid/mappingOptions", action: "destination:mappingOptions" },
        { path: "/v:apiVersion/destination/:guid/profilePreview", action: "destination:profilePreview" },
        { path: "/v:apiVersion/files", action: "files:list" },
        { path: "/v:apiVersion/files/options", action: "files:options" },
        { path: "/v:apiVersion/file/:guid/details", action: "file:details" },
        { path: "/v:apiVersion/file/:guid", action: "file:view" }
      ],

      post: [
        { path: "/v:apiVersion/session", action: "session:create" },
        { path: "/v:apiVersion/team", action: "team:create" },
        { path: "/v:apiVersion/team/initialize", action: "team:initialize" },
        { path: "/v:apiVersion/team/member", action: "teamMember:create" },
        { path: "/v:apiVersion/apiKey", action: "apiKey:create" },
        { path: "/v:apiVersion/group", action: "group:create" },
        { path: "/v:apiVersion/profile", action: "profile:create" },
        { path: "/v:apiVersion/profile/:guid/importAndUpdate", action: "profile:importAndUpdate" },
        { path: "/v:apiVersion/profilePropertyRule", action: "profilePropertyRule:create" },
        { path: "/v:apiVersion/app", action: "app:create" },
        { path: "/v:apiVersion/event", action: "event:create" },
        { path: "/v:apiVersion/track", action: "event:create" },
        { path: "/v:apiVersion/source", action: "source:create" },
        { path: "/v:apiVersion/source/:guid/bootstrapUniqueProfilePropertyRule", action: "source:bootstrapUniqueProfilePropertyRule" },
        { path: "/v:apiVersion/schedule", action: "schedule:create" },
        { path: "/v:apiVersion/schedule/:guid/run", action: "schedule:run" },
        { path: "/v:apiVersion/destination", action: "destination:create" },
        { path: "/v:apiVersion/destination/:guid/track", action: "destination:trackGroup" },
        { path: "/v:apiVersion/destination/:guid/unTrack", action: "destination:unTrackGroup" },
        { path: "/v:apiVersion/destination/:guid/export", action: "destination:export" },
        { path: "/v:apiVersion/file", action: "file:create" },
        { path: "/v:apiVersion/import", action: "import:create" }
      ],

      put: [
        { path: "/v:apiVersion/team/:guid", action: "team:edit" },
        { path: "/v:apiVersion/team/member/:guid", action: "teamMember:edit" },
        { path: "/v:apiVersion/apiKey/:guid", action: "apiKey:edit" },
        { path: "/v:apiVersion/group/:guid", action: "group:edit" },
        { path: "/v:apiVersion/group/:guid/add", action: "group:addProfile" },
        { path: "/v:apiVersion/group/:guid/run", action: "group:run" },
        { path: "/v:apiVersion/group/:guid/export", action: "group:export" },
        { path: "/v:apiVersion/group/:guid/remove", action: "group:removeProfile" },
        { path: "/v:apiVersion/profile/:guid", action: "profile:edit" },
        { path: "/v:apiVersion/profiles/importAndUpdate", action: "profiles:importAndUpdate" },
        { path: "/v:apiVersion/profilePropertyRule/:guid", action: "profilePropertyRule:edit" },
        { path: "/v:apiVersion/account", action: "account:edit" },
        { path: "/v:apiVersion/setting/:guid", action: "setting:edit" },
        { path: "/v:apiVersion/app/:guid/test", action: "app:test" },
        { path: "/v:apiVersion/profilePropertyRule/:guid/test", action: "profilePropertyRule:test" },
        { path: "/v:apiVersion/app/:guid", action: "app:edit" },
        { path: "/v:apiVersion/source/:guid", action: "source:edit" },
        { path: "/v:apiVersion/schedule/:guid", action: "schedule:edit" },
        { path: "/v:apiVersion/destination/:guid", action: "destination:edit" }
      ],

      delete: [
        { path: "/v:apiVersion/session", action: "session:destroy" },
        { path: "/v:apiVersion/team/:guid", action: "team:destroy" },
        { path: "/v:apiVersion/team/member/:guid", action: "teamMember:destroy" },
        { path: "/v:apiVersion/apiKey/:guid", action: "apiKey:destroy" },
        { path: "/v:apiVersion/group/:guid", action: "group:destroy" },
        { path: "/v:apiVersion/profile/:guid", action: "profile:destroy" },
        { path: "/v:apiVersion/profilePropertyRule/:guid", action: "profilePropertyRule:destroy" },
        { path: "/v:apiVersion/app/:guid", action: "app:destroy" },
        { path: "/v:apiVersion/event/:guid", action: "event:destroy" },
        { path: "/v:apiVersion/source/:guid", action: "source:destroy" },
        { path: "/v:apiVersion/schedule/:guid", action: "schedule:destroy" },
        { path: "/v:apiVersion/destination/:guid", action: "destination:destroy" },
        { path: "/v:apiVersion/file/:guid", action: "file:destroy" }
      ]
    };
  },
};
