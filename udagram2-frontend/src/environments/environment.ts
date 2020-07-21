// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  /* native microservices */
  //feedApiHost: 'http://localhost:8080/api/v0',
  //userApiHost: 'http://localhost:8081/api/v0'
  /* docker microservices */
  //feedApiHost: 'http://172.17.0.3:8080/api/v0',
  //userApiHost: 'http://172.17.0.4:8081/api/v0'
  /* remote proxy */
  //feedApiHost: 'http://172.17.0.2:8080/api/v0',
  //userApiHost: 'http://172.17.0.2:8081/api/v0'
  feedApiHost: 'http://udagram2-reverseproxy:8080/api/v0',
  userApiHost: 'http://udagram2-reverseproxy:8081/api/v0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
