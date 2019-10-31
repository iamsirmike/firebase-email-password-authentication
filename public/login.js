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
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');



//register
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  console.log(email, pass)

  auth.signInWithEmailAndPassword(email, pass).catch(function (error){
    const errorMessage = error.message;
    const errorCode = error.code;
    console.log(errorCode, errorMessage);

  })

})

//AUthchanged
const auth = firebase.auth();
auth.onAuthStateChanged(function (user){
  if(user){
    window.location.href = "dashboard.html"
  }else{
    console.log("not logged in")
  }
})