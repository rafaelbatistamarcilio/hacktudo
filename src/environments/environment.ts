// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: {
    CHAT_WS: 'http://localhost:3001'
  },
  DB: {
    NAME: 'DESPESAS_DB',
    VERSION: 1
  },
  AMG_KEY: 'AIzaSyC3xQ3NAFXZvSd3b7NUx4tWaP9gepMc-AU'
  // AMG_KEY: 'AIzaSyBNeIiCCS9f5tXda_0iy1kqkXtfVS7sUJM'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
