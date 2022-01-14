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



function createGroup(){
  user_name = localStorage.getItem("user_name");
    group_name = document.getElementById("group_name").value;
    console.log(group_name);
    /*firebase.database().ref(group_name).push({
        purpose:"creating group"
    });*/
    firebase.database().ref("/").child(group_name).update({
      purpose:"creating group"
    });
    localStorage.setItem("group",group_name);
    //window.location="chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("groups").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Groups = childKey; 
    //Start code
    console.log("Group name - "+Groups);
    row = "<div class='groups_name' id="+Groups+" onclick='redirectToGroupName(this.id)' >#"+Groups+"</div><hr>";
    console.log(row);
    document.getElementById("groups").innerHTML += row;
    if(Groups == "profiles"){
      document.getElementById(Groups).style.display = "none";
    }
    //End code
    });
  });
}
getData();

function redirectToGroupName(name){
    console.log(name);
    window.location="chat.html";
    localStorage.setItem("group",group_name);
}