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

function sign_Up_user(){
  password = document.getElementById("signUp_pswd").value;
  email = document.getElementById("signUp_username").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    console.log(user);
    window.location = "sign_in.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorMessage);
  });
}

  function signIn_screen(){
    //redirect the user to sign in screen
    window.location = "sign_in.html";
}