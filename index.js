var add = document.getElementById("add");
var calculate = document.getElementById("calculate");
var clear = document.getElementById("clear");

var courseCode = document.getElementById("courseCode");
var grades = document.getElementById("grades");
var units = document.getElementById("units");

var heading = document.querySelector("#heading h1");

var list = document.querySelector(".list ul");

var points = 0;
var totalUnits = 0;
var cgpa = 0



add.addEventListener("click", function(){
    var li = document.createElement("li");
    
    var courseCodeText = courseCode.value;
    var gradeText = grades.options[grades.selectedIndex].text;
    var unitText = units.options[units.selectedIndex].text;
    var gradeValue = grades.options[grades.selectedIndex].value;
    var unitValue = units.options[units.selectedIndex].value;
    
    if (courseCode.value && gradeText && unitText) {
        li.innerHTML = courseCodeText + " " + gradeText + " " + unitText;
        list.prepend(li);
    }else {
        return false;
    }

    var point = parseInt(gradeValue) * parseInt(unitValue);
    points += point;
    totalUnits += parseInt(unitValue);
    cgpa = points/totalUnits;
    cgpa = cgpa.toFixed(1);

    courseCode.value = "";

    console.log(points)
    console.log(totalUnits)
    console.log(cgpa)
})

calculate.addEventListener("click", function(){
    if (cgpa == "0") {
        heading.innerText = "Your CGPA is:"
    }else{
        heading.innerText = "Your CGPA is: " + cgpa;
        console.log(cgpa)
    }
})

clear.addEventListener("click", function(){
    window.location.reload();
})
