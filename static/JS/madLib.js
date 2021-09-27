

//const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();

};

const processEntries = () => {
    const adjective1 = document.getElementById('adjective1').value;
    const nationality = document.getElementById('nationality').value;
    const person = document.getElementById('person').value;
    const noun1 = document.getElementById('noun1').value;
    const adjective2 = document.getElementById('adjective2').value;
    const noun2 = document.getElementById('noun2').value;
    const adjective3 = document.getElementById('adjective3').value;
    const adjective4 = document.getElementById('adjective4').value;
    const pluralNoun = document.getElementById('pluralNoun').value;
    const noun3 = document.getElementById('noun3').value;
    const num = document.getElementById('num').value;
    const shape = document.getElementById('shape').value;
    const food1 = document.getElementById('food1').value;
    const food2 = document.getElementById('food2').value;
    const num2 = document.getElementById('num2').value;
};

var clearEntries = () =>{
    $('adjective1').value = "";
    $('nationality').value = "";
    $('person').value = "";
    $('person').value = "";
    $('noun1').value = "";
    $('adjective2').value = "";
    $('noun2').value = "";
    $('adjective3').value = "";
    $('adjective4').value = "";
    $('pluralNoun').value = "";
    $('noun3').value = "";
    $('num').value = "";
    $('shape').value = "";
    $('food1').value = "";
    $('food2').value = "";
    $('num2').value = "";

};    

function myFunction() { 
     var p = document.getElementById("demo").innerHTML ("Pizza was invented by a " + adjective1 + ' ' + nationality + ' ' + person + '. ' + ' To make a pizza, you need to take a lump of' + 
noun1 + ', ' + ' and make a thin, round ' + adjective2 + ' ' + noun2 + '. Then you cover it with ' + adjective3 + ' sauce, ' + adjective4 + 
' cheese, and fresh chopped ' + pluralNoun + '. Next you have to bake it in a very hot ' + noun3 + '. When its done, cut it into ' + num + ' ' + shape + 
'. Some kids like ' + food1 + ' pizza the best, but my favorite is the ' + food2 + ' pizza. If i could, I would eat pizza ' + num2 + ' times a day!' )

};

