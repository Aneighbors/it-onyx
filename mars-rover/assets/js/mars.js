async function GetPhotos() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the form elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
             // Operator
        // Get the value associated with the operator that was checked 
        var rover;
        if (document.getElementById("curiosity").checked) {
            rover = document.getElementById("curiosity").value;
        }
        if (document.getElementById("opportunity").checked) {
            rover = document.getElementById("opportunity").value;
        }
        if (document.getElementById("spirit").checked) {
            rover = document.getElementById("spirit").value;
        }
     
        var picturedate = document.getElementById("picturedate").value;
        var apiKey = "veO5OolZX0sJ5E77PeGyWQbciSS34TgeMXLA0QOC";
         
 
        /* URL for AJAX Call */
        var myURL2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + picturedate + "&api_key=" + apiKey;
        /* Make the AJAX call */
        var msg2Object = await fetch(myURL2);
        /* Check the status */
        if (msg2Object.status >= 200 && msg2Object.status <= 299) {            
            var msg2JSONText = await msg2Object.text();
            // Parse the JSON string into an object
            var msg2 = JSON.parse(msg2JSONText);
            /* Your code to process the result goes here - 
               display the returned message */
                /* Your code to process the result goes here  
                    display the returned message */
                var closeprice = [];
                var stockdate= [];
                var numdays = msg2.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        closeprice[i] = msg2.results[i].c;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg2.results[i].t);
                        /* extract the date string from the value */
                        stockdate[i] = tempdate.toLocaleDateString();
                    }
                }
        }
        else {
            /* AJAX completed with error - probably invalid stock ticker symbol */
            alert("Stock Not Found - Status: " + msg2Object.status)
            return
        }
    }
}

function ClearForm() {
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("selconvertcurrency").checked = false;


  
    
    
    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}