var btn = document.getElementById("submit");
btn.addEventListener("click",imperialBMR);

function metricBMR() {
    var bmr;
    var Gender;
    var ci;
    var calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;

    var act1 = document.getElementById("activityLevel1");
    var act2 = document.getElementById("activityLevel2");
    var act3 = document.getElementById("activityLevel3");
    var act4 = document.getElementById("activityLevel4");
    var act5 = document.getElementById("activityLevel5");

    (act1.checked) ? (calories += 1.2) : (calories += 0);
    (act2.checked) ? (calories += 1.375) : (calories += 0);
    (act3.checked) ? (calories += 1.55) : (calories += 0);
    (act4.checked) ? (calories += 1.725) : (calories += 0);
    (act5.checked) ? (calories += 1.9) : (calories += 0);

    (Gender == "Male") ? bmr = 66.5 + (13.75 * Weight ) + (5.003 * Height ) - (6.755 * Age ) : bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age);
    (Gender == "Female") ? bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age ) : bmr = 66.5 + (13.75 * Weight ) + (5.003 * Height ) - (6.755 * Age);
   
    ci = bmr * calories;

    document.write(Gender);
    document.write("<p>Your BMR is " + bmr + ".</p>");

    document.write("<p>Your calorie intake should be: " + ci + ".</p>");
}
document.getElementById("submit").addEventListener("click", metricBMR, false);

function imperialBMR() {
    var bmr;
    var Gender;
    var ci;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;

    var act1 = document.getElementById("activityLevel1");
    var act2 = document.getElementById("activityLevel2");
    var act3 = document.getElementById("activityLevel3");
    var act4 = document.getElementById("activityLevel4");
    var act5 = document.getElementById("activityLevel5");

    (act1.checked) ? (calories += 1.2) : (calories += 0);
    (act2.checked) ? (calories += 1.375) : (calories += 0);
    (act3.checked) ? (calories += 1.55) : (calories += 0);
    (act4.checked) ? (calories += 1.725) : (calories += 0);
    (act5.checked) ? (calories += 1.9) : (calories += 0);
    
    (Gender == "Male") ? bmr = 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age) : 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age);
    (Gender == "Female") ? bmr = 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age) : 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age);

    ci = bmr * calories;

    document.write(Gender);
    document.write("<p>Your BMR is" + bmr + ".</p>");

    document.write("<p>Your calorie intake is:" + ci + ".</p>");
}
document.getElementsId("submit").addEventListener("click", imperialBMR, false);
