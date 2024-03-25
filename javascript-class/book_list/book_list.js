"use strict";

$(document).ready( () =>{
 

    $("#categories h2").click( evt => {
        const h2 = evt.currentTarget;
        $(h2).toggleClass("minus");

        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else{
            $(h2).next().show();
        }
        
        $("#image").attr("src", "");

        evt.preventDefault();
    });

    $("#categories a").each( (index, link) => {
        const image = new Image();
        image.src= link.href;
      
  
      $("#categories a").click (evt => {
          const link = evt.currentTarget;
  
          $("#image").attr("src", link.href);
  
          evt.preventDefault();
      })
    });
});