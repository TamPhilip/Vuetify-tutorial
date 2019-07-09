import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5-h3UpcnE-VdsrkmYrgMWAzhPzq4wpnc",
    authDomain: "vuetify-tutorial-42c9c.firebaseapp.com",
    databaseURL: "https://vuetify-tutorial-42c9c.firebaseio.com",
    projectId: "vuetify-tutorial-42c9c",
    storageBucket: "vuetify-tutorial-42c9c.appspot.com",
    messagingSenderId: "865268123540",
    appId: "1:865268123540:web:9390f128c6432586"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();

db.settings({timestampsInSnapshots: true});

export default db;
