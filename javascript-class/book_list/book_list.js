"use strict";

$(document).ready( () =>{
 
    $("#startup_message"). fadeOut(5000) .slideDown(1000);

    $("#categories a").each( (index, link) => {
      const image = new Image();
      image.src= link.href;
    });

    $("#categories a").click (evt => {
        const link = evt.currentTarget;

        $("#image").attr("src", link.href);

        evt.preventDefault();
    })

    $("#categories h2").click( evt => {
        const h2 = evt.currentTarget;
        $(h2).toggleClass("minus");

        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else{
            $(h2).next().show();
        }

        evt.preventDefault();
    });



});