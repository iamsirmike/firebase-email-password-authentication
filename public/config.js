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
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnRegister = document.getElementById('btnRegister');
const emailError = document.getElementById("emailError");


//add login event
btnLogin.addEventListener('click', e =>{
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //signin
auth.signInWithEmailAndPassword(email, pass).catch(function (error){
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  })

  })
 

//add register event
btnRegister.addEventListener('click', e =>{
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  //register
  auth.createUserWithEmailAndPassword(email, pass).catch(function (error){
    var errorCode = error.code
    var errorMessage = error.message
    console.log(errorCode)

    if (errorCode =="auth/invalid-email") {
      alert("email is not correct");
    }else if(errorCode == "auth/email-already-in-use"){
      alert("User already exist");
    }else{
      console.log("Registered successfully");
    }
     
  })


})

//add change listener
const auth = firebase.auth()
auth.onAuthStateChanged(function (user){
  if (user) {
    window.location.href = "dashboard.html";
    console.log("user is signedIn");
  }else{
    console.log("user is loggedout");
  }
})
