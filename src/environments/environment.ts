// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDYKZo4VSzf_54hmzaXwlJSxfDZIe-jbEo',
        authDomain: 'fir-demo-4cba9.firebaseapp.com',
        databaseURL: 'https://fir-demo-4cba9.firebaseio.com',
        projectId: 'fir-demo-4cba9',
        storageBucket: 'fir-demo-4cba9.appspot.com',
        messagingSenderId: '716663830703'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
