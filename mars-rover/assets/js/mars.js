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


let PictureObject = await fetch(myURL2);
let Result = await PictureObject.text();
let msg =JSON.parse(Result); 
document.getElementById("numberofphotos").innerHTML = msg.photos.length + " pictures found"
if (numberofphotos >25)
{numberofphotos = 25}
                
                for (let i = 0; i < 25; i++) {
                    // Note how we construct the name for image1, image2, etc...this sets the image source
                    document.getElementById("image" + i).src = msg.photos[i].img_src;
                   /* do something to set the tool tip = msg.photos[i].camera.full_name; */
                   document.getElementById("image" + i).style.visibility = "visible";
                }
            }
            
      
    }

    function openToolTip () {
        var tooltipPopup = document.getElementById("displayText");
        tooltipPopup.classList.toggle("show"); // toggle the tooltip
        }
  
function clearorm() {
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("selconvertcurrency").checked = false;

}