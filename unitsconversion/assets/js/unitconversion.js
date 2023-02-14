function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* On each keystroke, get the current value of the input text box */
async function showHint() {
    
    var hintvalue = document.getElementById("Operand1").value;
    
    /* If the textbox is empty, then the hint is empty */
    /* if the textbox is not empty - perform the AJAX call to display the result */    
    if (hintvalue.length == 0) { 
        document.getElementById("txtHint").innerHTML = "";
    } else {
        /* URL for AJAX Call */
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitconversion.php";

        /* Append parameters to URL */
        var myURL = myURL + "?Name=" + hintvalue;FromValue=10&FromUnit=cm&ToUnit=in
        FromValue=10&FromUnit=cm&ToUnit=in

        /* Fetch the data */
        let myHintObject = await fetch(myURL);
        let myHintText = await myHintObject.text();

        /* Display the result */
        document.getElementById("txtHint").innerHTML = myHintText;
    }
}

/* AJAX call to return the result of the hint */
        
        /* figure out which operator was checked and place the value in operator */
        var operator1;
        if (document.getElementById("centimeters").checked) {
            operator1 = document.getElementById("centimeters").value;
        }
        if (document.getElementById("meters").checked) {
            operator1 = document.getElementById("meters").value;
        }
        if (document.getElementById("kilometers").checked) {
            operator1 = document.getElementById("kilometers").value;
        }
        if (document.getElementById("inches").checked) {
            operator1 = document.getElementById("inches").value;
        }
        if (document.getElementById("feet").checked) {
            operator1 = document.getElementById("feet").value;
        }
        if (document.getElementById("yards").checked) {
            operator1 = document.getElementById("yards").value;
        }
        if (document.getElementById("miles").checked) {
            operator1 = document.getElementById("miles").value;
        }

        var operator2;
 
        if (document.getElementById("centimeters").checked) {
            operator2 = document.getElementById("centimeters").value;
        }
        if (document.getElementById("meters").checked) {
            operator2 = document.getElementById("meters").value;
        }
        if (document.getElementById("kilometers").checked) {
            operator2 = document.getElementById("kilometers").value;
        }
        if (document.getElementById("inches").checked) {
            operator2 = document.getElementById("inches").value;
        }
        if (document.getElementById("feet").checked) {
            operator2 = document.getElementById("feet").value;
        }
        if (document.getElementById("yards").checked) {
            operator2 = document.getElementById("yards").value;
        }
        if (document.getElementById("miles").checked) {
            operator2 = document.getElementById("miles").value;
        }

        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("AdditionOperator").checked = false;
    document.getElementById("SubtractionOperator").checked = false;
    document.getElementById("MultiplicationOperator").checked = false;
    document.getElementById("DivisionOperator").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});