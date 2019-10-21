// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBF_nsHA3JnvdqORSOqtpUUk52EcR1yrA",
    authDomain: "registration-login-d4562.firebaseapp.com",
    databaseURL: "https://registration-login-d4562.firebaseio.com",
    projectId: "registration-login-d4562",
    storageBucket: "registration-login-d4562.appspot.com",
    messagingSenderId: "1048808952310",
    appId: "1:1048808952310:web:27082d6056da1b98a837d7",
    measurementId: "G-0BNDZDY5N2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //get elements
  const btnLogout = document.getElementById("btnLogout");

  btnLogout.addEventListener('click', e =>{
      const auth = firebase.auth();
      auth.signOut().then(function() {
        window.location.href = "index.html"
      }).catch(function(error) {
        console.log(error);
      });
  })