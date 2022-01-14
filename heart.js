function heartRate(){
    //....1. get the no of beats and convert it into a number
    beats = document.getElementById("no_of_beats").value;
    no_of_beats = parseInt(beats);

    //....2. calculate heart rate
    var heart_rate = no_of_beats * 6;
    document.getElementById("heart_rate").innerHTML = "Your Heart Rate is " + heart_rate + " bpm";

    //....3. compare the heart rate 
    var compare = "";
    if(heart_rate >= 60 && heart_rate <= 100){
        compare = "Your heart rate is normal.";
    }
    else if(heart_rate < 60){
        compare = "Your heart rate is lower than the normal level.";
    }
    else if(heart_rate > 100){
        compare = "Your heart rate is higher than the normal level.";
    }

    
    //....4. display the comparison
    document.getElementById("comparison").innerHTML = "A normal resting heart rate for adults ranges from 60 to 100 beats per minute. " + compare;
    
    tips_array_lower = [];
    //....5.1 tips for lowering heart rate
    if(compare == "Your heart rate is higher than the normal level."){
    lower_tips = ["1. Exercise regularly.",
    "2. Stay hydrated.",
    "3. Eat a healthy, balanced diet rich in fruits, vegetables, proteins, nuts, legumes. Try to eat food rich in vitamin A, vitamin C, dietary fibre.",
    "4. Get enough sleep. Most adults should get between 7 and 9 hours of sleep every night.",
    "5. Maintain a healthy body weight.",
    "6. Reduce stress.",
    "7. Spend time outdoors (amidst nature)."];

    for(k = 0; k < 7; k++){
    tips_array_lower.push("<p id = 'tips_array'>" + lower_tips[k] + "</p>");
    }
    document.getElementById("tips").style.display = "inline-block";
    document.getElementById("tips").innerHTML = tips_array_lower.join(" ");
    }    

    //....5.2 tips for increasing heart rate
    increase_tips_array = [];
    if(compare == "Your heart rate is lower than the normal level."){
        increase_tips = ["1. Set an incline. If you’re on the treadmill increase the incline. Or if you’re walking outside look for hills. This will challenge your muscles and help increase your heart rate.",
        "2. Take the stairs. Just like adding an incline, stairs bring a new challenge to your workout.",
        "3. Alter your pace. Whether you’re walking, riding a bike, swimming or practicing yoga, you don’t have to increase your pace for the entire workout. Add in short bursts of increased effort at a faster pace. Over time, you’ll be able to increase the duration of these bursts.",
        "4. Take shorter breaks. If you’re doing an interval workout or lifting weights, take shorter breaks in between the different exercises."];
    
        for(k = 0; k < 4; k++){
        increase_tips_array.push("<p id = 'tips_array'>" + increase_tips[k] + "</p>");
        }
        document.getElementById("tips").style.display = "inline-block";
        document.getElementById("tips").innerHTML = increase_tips_array.join(" ");
    }
}

function back_heart(){
    window.location = "health.html";
}