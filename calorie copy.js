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

var tips1 = [];
var tips2 = [];

function calculate(){
    //initialize the variables
    h = document.getElementById("height").value;
    w = document.getElementById("weight").value;

    //***********************CALCULATE HEIGHT****************/
    height = Math.floor(h * 12);
    console.log("Height : " + height);
    //***********************CALCULATE HEIGHT****************/

    //***********************CALCULATE WEIGHT****************/
    weight = Math.floor(w * 2.205);
    console.log("Weight : " + weight);
    //***********************CALCULATE WEIGHt****************/

    age = localStorage.getItem("age");
    gender = localStorage.getItem("gender");
    activity = document.getElementById("activity_level").value;
    points = 0;
    calories = 0;

    //calculate bmr for males
    if(gender == "male"){
        bmr = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
        console.log("BMR = " + bmr);
    }
    else if(gender == "female"){    //calculate bmr for females
        bmr = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        console.log("BMR = " + bmr);
    }

    //give points for activity level
    if(activity == "1.2 (Little to no exercise)"){
        points = 1.2;
    }
    else if(activity == "1.375 (Light Exercise : 1-3 days per week)"){
        points = 1.375;
    }
    else if(activity == "1.55 (Moderate Exercise : 3-5 days per week)"){
        points = 1.55;
    }
    else if(activity == "1.725 (Hard Exercise : 6-7 days per week)"){
        points = 1.725;
    }
    else if(activity == "1.9 (Very Hard Exercise, training or a physical job)"){
        points = 1.9;
    }

    //calculate calories 
    cal = bmr*points;
    calories = Math.round(cal);
    document.getElementById("calories").innerHTML = "You can maintain your current weight by consuming " + calories + " calories per day.";

}

//show tips accordingly
function tips(){
    option = document.getElementById("tips_option").value;
    document.getElementById("tips").innerHTML = "";

    if(option == "Increase calories"){
        tips1 = [];
        tips_increase = ["1. Eat 3 to 5 meals a day.",
                     "2. Eat food items rich in proteins, fibre, carbohydrates and fats",
                     "3. Drink high calorie smoothies and shakes.",];
                    for(k = 0; k < 3; k++){
                        tips1.push("<p id = 'tips_array'>" + tips_increase[k] + "</p>");
                    }
                    document.getElementById("tips").style.display = "inline-block";
                    document.getElementById("tips").innerHTML = "<p> Tips to increase calories : </p> " + tips1.join(" ");
    }
    else if(option == "Decrease calories"){
        tips2 = [];
        tips_decrease = ["1. Substitute lower-calorie options for some of your high-calorie favorites.",
            "2. Take a 40-minute brisk walk after lunch or dinner.",
            "3. Avoid taking a second helping as it can add up to unwanted calories.",
            "4. Avoid eating fried food (eg. french fries). Instead of frilled chicken and fish, eat grilled ones."];
            for(k = 0; k < 3; k++){
                tips2.push("<p id = 'tips_array'>" + tips_decrease[k] + "</p>");
            }

            document.getElementById("tips").style.display = "inline-block";
        document.getElementById("tips").innerHTML = "<p>Tips to decrease calories : </p> " + tips2.join(" ") ;
    }
    

}
//tips end here

function back(){
    window.location = "health.html";
}