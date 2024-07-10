
function calculate() {
    const radius = document.getElementById("inputRadius").value;
    const pi = 3.14159265359;


    if (radius < 0 || isNaN(radius)){
        alert("Please enter a valid number for the radius.");
        document.getElementById("inputRadius").value = "";
        document.getElementById("resultArea").value = "";
        document.getElementById("resultCircumference").value = "";
        return;
    } else if (radius === "") { 
        alert("Invalid input number for decimal base. Please Try Again.");
        document.getElementById("inputRadius").value = "";
        document.getElementById("resultArea").value = "";
        document.getElementById("resultCircumference").value = "";
        return;
    } else {
        let area = pi * Math.pow(radius, 2);
        let circumference = 2 * radius * pi;
        document.getElementById("resultArea").value = parseFloat(area.toFixed(2));
        document.getElementById("resultCircumference").value = parseFloat(circumference.toFixed(2));
    }

}

document.getElementById("inputRadius").addEventListener("keypress", function(check) {
    const radius = document.getElementById("inputRadius").value;
    const pi = 3.14159265359;

    if (check.keyCode === 13 ) {
        if (radius < 0 || isNaN(radius)){
        alert("Please enter a valid number for the radius.");
        document.getElementById("inputRadius").value = "";
        document.getElementById("resultArea").value = "";
        document.getElementById("resultCircumference").value = "";
        return;
    } else if (radius === "") { 
        alert("Invalid input number for decimal base. Please Try Again.");
        document.getElementById("inputRadius").value = "";
        document.getElementById("resultArea").value = "";
        document.getElementById("resultCircumference").value = "";
        return;
    } else {
        let area = pi * Math.pow(radius, 2);
        let circumference = 2 * radius * pi;
        document.getElementById("resultArea").value = parseFloat(area.toFixed(2));
        document.getElementById("resultCircumference").value = parseFloat(circumference.toFixed(2));
    }
    } 
  });