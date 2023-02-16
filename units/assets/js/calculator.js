function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var FromValue = document.getElementById("FromValue").value;

        // Operator
        // Get the value associated with the operator that was checked (+, -, *, or /)
        var FromUnit;
        if (document.getElementById("cm").checked) {
             FromUnit = document.getElementById("cm").value;
        }
        if (document.getElementById("m").checked) {
            FromUnit = document.getElementById("m").value;
        }
        if (document.getElementById("km").checked) {
            FromUnit = document.getElementById("km").value;
        }
        if (document.getElementById("in").checked) {
            FromUnit = document.getElementById("in").value;
        }
        if (document.getElementById("ft").checked) {
            FromUnit = document.getElementById("ft").value;
        }
        if (document.getElementById("yd").checked) {
            FromUnit = document.getElementById("yd").value;
        }
        if (document.getElementById("mi").checked) {
            FromUnit = document.getElementById("mi").value;
        }
        
        
  var ToUnit;
  if (document.getElementById("ToUnitcm").checked) {
      ToUnit = document.getElementById("ToUnitcm").value;
  }
  if (document.getElementById("ToUnitm").checked) {
      ToUnit = document.getElementById("ToUnitm").value;
  }
  if (document.getElementById("ToUnitkm").checked) {
      ToUnit = document.getElementById("ToUnitkm").value;
  }
  if (document.getElementById("ToUnitin").checked) {
      ToUnit = document.getElementById("ToUnitin").value;
  }
  if (document.getElementById("ToUnitft").checked) {
      ToUnit = document.getElementById("ToUnitft").value;
  }
  if (document.getElementById("ToUnityd").checked) {
      ToUnit = document.getElementById("ToUnityd").value;
  }
  if (document.getElementById("ToUnitmi").checked) {
      ToUnit = document.getElementById("ToUnitmi").value;
  }

        CalculateResult(FromValue, FromUnit, ToUnit);
    }
}

async function CalculateResult(FromValue, FromUnit, ToUnit) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);
        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueError").innerHTML = "";
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("cm").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("km").checked = false;
    document.getElementById("in").checked = false;
    document.getElementById("ft").checked = false;
    document.getElementById("yd").checked = false;
    document.getElementById("mi").checked = false;
    document.getElementById("ToUnitcm").checked = false;
    document.getElementById("ToUnitm").checked = false;
    document.getElementById("ToUnitkm").checked = false;
    document.getElementById("ToUnitin").checked = false;
    document.getElementById("ToUnitft").checked = false;
    document.getElementById("ToUnityd").checked = false;
    document.getElementById("ToUnitmi").checked = false;
    document.getElementById("Result").innerHTML = "";
    
}

$( "#myform" ).validate({

});