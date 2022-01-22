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

console.log("App working !");

function save(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          console.log(uid);
          try {
            name_user = document.getElementById("name").value;
            age_user = document.getElementById("age").value;
            gender_user = document.getElementById("gender").value;
            var user = {
                name: name_user,
                age: age_user,
                gender: gender_user,
                uid: uid
            }
            writeUserData(user)
    
        } catch (error) {
            console.log(error.message)
        }
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
}


  function writeUserData(user) {
    firebase.database().ref('users/' + user.uid).set(user).catch(error => {
        console.log(error.message)
    });
}

firebase.auth().onAuthStateChanged(user => { if(user) {
    console.log(user.uid); 
  }
})

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        getUserData(user.uid)
    }
})

function getUserData(uid) {
    firebase.database().ref('users/' + uid).once("value", snap => {
        console.log(snap.val())
        data = snap.val();
        names = data.name;
        age = data.age;
        gender = data.gender;
        console.log(names + ", " + age + " , " + gender);
        document.getElementById("data_name").innerHTML = "Name : " + names;
        document.getElementById("data_age").innerHTML = "Age : " + age;
        document.getElementById("data_gender").innerHTML = "Gender : " + gender;
        localStorage.setItem("user_name",names);
        localStorage.setItem("age",age);
        localStorage.setItem("gender",gender);
    })
}