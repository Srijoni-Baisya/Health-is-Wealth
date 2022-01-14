//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDXn3Fx9YKEfOYO3XHSTUZEshKgO_6DpA0",
    authDomain: "health-is-wealth-e5526.firebaseapp.com",
    databaseURL: "https://health-is-wealth-e5526-default-rtdb.firebaseio.com",
    projectId: "health-is-wealth-e5526",
    storageBucket: "health-is-wealth-e5526.appspot.com",
    messagingSenderId: "950783730036",
    appId: "1:950783730036:web:b5f5640a4d66002a504c21"
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function signIn(){
    //store email and pswd in variables
    email_id = document.getElementById("signIn_username").value;
    user_pswd = document.getElementById("signIn_pswd").value;

    firebase.auth().signInWithEmailAndPassword(email_id, user_pswd)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    window.location = "home_page.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
   alert(errorMessage);
  });
  }

function forgot_password(){
  email = document.getElementById("signIn_username").value;
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      alert(error);
    });
}

function signUp_screen(){
    //redirect the new user to sign up screen
    window.location = "sign_up.html";
}  

