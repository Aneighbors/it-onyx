
        $( "#CircleForm" ).validate({

        });
        
        function displayCircle() {
            // if the form is valid, then make the calculations
            if ($("#CircleForm").valid()) {

                // clear out any old calculation
                
                 document.getElementById("diameter").innerHTML = "";
                 document.getElementById("circumference").innerHTML = "";
                 document.getElementById("area").innerHTML = "";



                 var radius; // string representation of the radius
                 var radiusfp; // floating point value of radius
                 var diameter; // floating point diameter
                 var circumference; // floating point circumference
                 var area; // floating point area
                 var result; // displayable result

                 // read in the legs as a string
                 radius = document.getElementById("radius").value;
            
                 // Convert numbers from strings to Floating Point
                 radiusfp = parseFloat( radius ); 

                 // calculate the diameter
                 diameter = calcDiameter(radius);

                 // display the diameter
                 document.getElementById("diameter").innerHTML = diameter.toString()

                  // calculate the circumference
                  circumference = calcCircumference(radius);

                  // display the circumference
                  document.getElementById("circumference").innerHTML = circumference.toString()

                  
                  // calculate the area
                  area = calcArea(radius);

                  // display the circumference
                  document.getElementById("area").innerHTML = area.toString()
 
 
            
            
                }
        }

          function calcDiameter (radius)
          // returns diameter of a circle
          // 2 times the radius
          {
              return 2 * radius;
          }
          function calcCircumference (radius)
          // returns diameter of a circle
          // 2 times the radius
          {
              return 2 * radius * Math.PI
          }

          function calcArea (radius)
          // returns area of a circle
          // 2 times the radius
          {
              return  Math.PI * (radius * radius)
          }
          

          function clearForm()
        {
            document.getElementById("radius").value = "";
            document.getElementById("diameter").innerHTML = "";
            document.getElementById("circumference").innerHTML = "";
            document.getElementById("area").innerHTML = "";
            
        }
    