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

usr_name = "";
age = "";
gender = "";

function save(){
    usr_name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    gender = document.getElementById("gender").value;
    firebase.database().ref("profiles").push({
          name:usr_name,
          age:age,
          gender:gender
    });
    alert("Data saved successfully!");

    //save th data in local storage
    localStorage.setItem("user_name", usr_name)
    localStorage.setItem("age", age)
    localStorage.setItem("gender", gender)
}