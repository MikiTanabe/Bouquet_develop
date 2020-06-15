//FireBase
    // The core Firebase JS SDK is always required and must be listed first -->
        
    // TODO: Add SDKs for Firebase products that you want to use
    //https://firebase.google.com/docs/web/setup#available-libraries -->
        
    // Your web app's Firebase configuration
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAzTLzkO1Y_PeGhljMnXtzA8dp1asiB71w",
    authDomain: "bouquet-e3ec0.firebaseapp.com",
    databaseURL: "https://bouquet-e3ec0.firebaseio.com",
    projectId: "bouquet-e3ec0",
    storageBucket: "bouquet-e3ec0.appspot.com",
    messagingSenderId: "982398394729",
    appId: "1:982398394729:web:2cfa2bebf63e09f99d9df8",
    measurementId: "G-PB8XMNXQ6B"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
