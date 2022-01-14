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

function cal_whr(){

    //...1.1 store hip circumference, waist circumference and convert to numbers
    hip_circum = document.getElementById("hip").value;
    hip = parseInt(hip_circum);
    waist_circum = document.getElementById("waist").value;
    waist = parseInt(waist_circum);

    //...1.2 store gender
    gender = localStorage.getItem("gender");
    console.log(gender);

    //...2. calculate whr
    whr = waist / hip;

    //...3.1 compare for women
    if (gender == "female"){
        if(whr <= 0.80){
            risk = "Low";
            shape = "Pear";
        }
        else if(whr > 0.80 && whr < 0.86){
            risk = "Moderate";
            shape = "Avocado";
        }
        else if(whr > 0.85){
            risk = "High";
            shape = "Apple";
        }
    }

    
    else if (gender == "male"){  //...3.2 compare for men
        if(whr < 0.96){
            risk = "Low";
            shape = "Pear";
        }
        else if(whr > 0.95 && whr <= 1.0){
            risk = "Moderate";
            shape = "Avocado";
        }
        else if(whr > 1.0){
            risk = "High";
            shape = "Apple";
        }
    }

    //..4. display the body shape
    document.getElementById("body_shape").style.display = "inline-block";
    document.getElementById("body_shape").innerHTML = "Body Shape : " + shape;

    //...5. display the health risk
    document.getElementById("health_risk").style.display = "inline-block";
    document.getElementById("health_risk").innerHTML = "Health Risk : " + risk;

    tips = [];

    //...6 set the tips
        if(risk == "High"){
            tips_array = ["1. Eat more fruits and vegetables, and less fatty protein, such as salmon.",
                      "2. Sugar, pizza, bread, bagels, rice, white potatoes and corn can spike your blood sugar level and produce more fat.",
                      "3. Exercise at least 30 minutes per day to lose weight, and you can combine abdominal strengthening exercises to tighten the muscle."];
        for(k = 0; k < 3; k++){
        tips.push("<p id = 'tips_array'>" + tips_array[k] + "</p>");
        }
        document.getElementById("whr_tips").style.display = "inline-block";
        document.getElementById("whr_tips").innerHTML = tips.join(" ");
        }
        else if(risk == "Moderate"){
            tips_array = ["1. Full-body workout routines are good, since you could gain fat in both your upper and lower body.",
                          "2. You can also add more low-fat and high-fiber food to your diet to maintain a healthy weight. "];

        for(k = 0; k < 2; k++){
        tips.push("<p id = 'tips_array'>" + tips_array[k] + "</p>");
        }
        document.getElementById("whr_tips").style.display = "inline-block";
        document.getElementById("whr_tips").innerHTML = tips.join(" ");
        }
        else if(risk == "Low"){
            tips_array = ["1. Fat accumulated in the lower body can be stubborn. You may have seen progress in your abdomen, but not so much.The formula for successful weight-loss is simple: diet and exercise. That starts with eating smaller portions and including more vegetables, fruits and low-fat protein."];
            console.log(tips_array);
            for(k = 0; k < 1; k++){
                tips.push("<p id = 'tips_array'>" + tips_array[k] + "</p>");
                }
                document.getElementById("whr_tips").style.display = "inline-block";
                document.getElementById("whr_tips").innerHTML = tips.join(" ");
        }     
}

function backWhr(){
    window.location = "health.html";
}