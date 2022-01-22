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

user_name = localStorage.getItem("user_name");
group_name = localStorage.getItem("group");

function send_message(){
      msg = document.getElementById("message").value;
      firebase.database().ref(group_name).push({
            name:user_name,
            message:msg,
      });
      document.getElementById("message").value="";
}

function getData() { firebase.database().ref(group_name).on('value', function(snapshot) { document.getElementById("messages").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);

      name= message_data['name'];
      message= message_data['message'];

      name_tag = "<p> "+name+"</p>";
      message_tag = "<p class='message_p'> "+message+" </p> <hr> ";

      row= name_tag+message_tag;
      document.getElementById("messages").innerHTML +=row;
//End code
      } });  }); }
getData();

function back(){
      window.location = "community.html";
}