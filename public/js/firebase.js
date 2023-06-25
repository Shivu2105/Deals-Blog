let firebaseConfig = {
    apiKey: "AIzaSyC4wN7c-D1vHA8oKT_CCRn99TZTmmEMGn0",
    authDomain: "blogging-website-85563.firebaseapp.com",
    projectId: "blogging-website-85563",
    storageBucket: "blogging-website-85563.appspot.com",
    messagingSenderId: "471837698309",
    appId: "1:471837698309:web:3fb6eeda93dfcdfa572f6c",
    measurementId: "G-G6YXN700NQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);