 const firebaseConfig = {
  apiKey: "AIzaSyD0BnAtfQ4aTZws6UyCQvRw1BU7rMHvmu4",
  authDomain: "blogging-website-b9f5e.firebaseapp.com",
  projectId: "blogging-website-b9f5e",
  storageBucket: "blogging-website-b9f5e.appspot.com",
  messagingSenderId: "6454972693",
  appId: "1:6454972693:web:0d851c126c7da0cbfad91c"
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();