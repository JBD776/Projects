'use strict'; 



document.getElementById("adjective1").value = "";
document.getElementById("nationality").value  = "";
document.getElementById("person").value  = "";
document.getElementById("noun1").value  = "";
document.getElementById("adjective2").value  = "";
document.getElementById("noun2").value  = "";
document.getElementById("adjective3").value  = "";
document.getElementById("adjective4").value  = "";


function myFunction(adjective1, nationality, person, noun1, adjective2 ){

    var adjective1 = document.getElementById("adjective1").value
    var nationality = document.getElementById("nationality").value
    var person = document.getElementById("person").value
    var noun1 = document.getElementById("noun1").value
    var adjective2 = document.getElementById("adjective2").value
    var noun2 = document.getElementById("noun2").value
    var adjective3 = document.getElementById("adjective3").value
    var adjective4 = document.getElementById("adjective4").value


    var output = alert( "Pizza was invented by a " + adjective1 + ' ' + nationality + ' ' + person + '. ' + ' To make a pizza, you need to take a lump of ' + 
    noun1 + ', ' + ' and make a thin, round ' + adjective2 +  ' ' + noun2 + '. Then you cover it with ' + adjective3 + ' sauce, ' + adjective4 + 
    ' cheese, bake, serve hot and enjoy! ' );


    return output;

}


