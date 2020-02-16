import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDSezQlKpXeA0D6YZ7M0Hq9Xq6XtJWjvTM",
    authDomain: "firstweb-304f2.firebaseapp.com",
    databaseURL: "https://firstweb-304f2.firebaseio.com",
    projectId: "firstweb-304f2",
    storageBucket: "firstweb-304f2.appspot.com",
    messagingSenderId: "383518059850",
    appId: "1:383518059850:web:ebd87272f122e0712265b3",
    measurementId: "G-YT5F8JPX2M"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;