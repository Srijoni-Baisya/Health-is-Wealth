function glucoseCal_fasting(){
    //...1. store the type of patient
    type = document.getElementById("patient_category").value;
    console.log(type);

    compare = "";

    decrease_array = [];
    increase_array = [];
    
    //...2.1 check fasting level for diabetic patient
    if(type == "Diabetic"){
        level_fasting = document.getElementById("glucose_level_1").value;

        if(level_fasting > 79 && level_fasting < 131){
            fasting_compare = "normal";
        }
        else if(level_fasting < 80){
            fasting_compare = "low";
            increase_tips = ["1. Eat sweets like 6 large jelly beans, 1 tablespoon of honey, 1 tablespoon suagr in water.",
                      "2. Drink beverages like 1/2 cup apple, orange or pineapple juice; 1/3 cup cranberry juice; 1 cup fat free milk.",
                      "3. Eat fruits like 1 small apple, orange, 15 grapes, 2 tablespoons of raisins."];
      
        for(k = 0; k < 3; k++){
            increase_array.push("<p id = 'tips_array'> " + increase_tips[k] + " </p>");
        }
        console.log(increase_array);
        document.getElementById("tips").innerHTML = "<br> <p class = 'tips_array'> Tips to increase blood glucose : </p> <br> " + increase_array.join(" ");
        }
        else if(level_fasting > 130){
            fasting_compare = "high";
            decrease_tips = ["1. Exercise regularly",
                     "2. Eat more fibre and manage your carbohydrate intake.",
                     "3. Drink plenty of water and stay hydrated.",
                     "4. Try to manage your stress levels.",
                     "5. Monitor your blood sugar levels."];
     
        for(k = 0; k < 5; k++){
            decrease_array.push("<p id = 'tips_array'> " + decrease_tips[k] + " </p>");
        }
        console.log(decrease_array);
        document.getElementById("tips").innerHTML ="<p class= 'tips_array'> Tips to decrease blood glucose : </p> <br> " + decrease_array.join(" ");
        }

        document.getElementById("comparison_glucose1").innerHTML = "In case of fasting, the normal glucose level for a diabetic person is 80-130 mg/dL. Your glucose level is " + fasting_compare + ".";
    }

    //...3.1 check fasting level for non-diabetic person
    if(type == "Non-diabetic"){
        level_fasting = document.getElementById("glucose_level_1").value;
        
        if(level_fasting > 69 && level_fasting < 100){
            fasting_compare = "normal";
        }
        else if(level_fasting < 70){
            fasting_compare = "low";
        }
        else if(level_fasting > 99){
            fasting_compare = "high";
        }

        document.getElementById("comparison_glucose1").innerHTML = "In case of fasting, the normal glucose level for a non-diabetic person is 70-99 mg/dL. Your glucose level is " + fasting_compare + ".";
    
    }

}

function glucoseCal_afterMeal(){

    type = document.getElementById("patient_category").value;
    
    //...2.2 check after meal level for diabetic person
    if(type == "Diabetic"){
        level_afterMeal = document.getElementById("glucose_level_2").value;

        if(level_afterMeal < 180){
            afterMeal_compare = "normal";
        }
        else{
            afterMeal_compare = "high";
        }

        document.getElementById("comparison_glucose2").innerHTML = "In case of 2 hours after meal, the normal glucose level for a diabetic person is less than 180 mg/dL. Your glucose level is " + afterMeal_compare + ".";
    }

    //...3.2 check after meal level for non-diabetic person
    if(type == "Non-diabetic"){
        level_afterMeal = document.getElementById("glucose_level_2").value;

        if(level_afterMeal < 140){
            afterMeal_compare = "normal";
        }
        else{
            afterMeal_compare = "high";
        }

        document.getElementById("comparison_glucose2").innerHTML = "In case of 2 hours after meal, the normal glucose level for a non-diabetic person is less than 140 mg/dL. Your glucose level is " + afterMeal_compare;
    }

}

function backGlucose(){
    window.location = "health.html";
}