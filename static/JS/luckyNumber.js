

var repeat = "y";
do
{

var entry = prompt("enter a whole number");
        entry = parseInt(entry);

        var addition = 9;
        addition = parseInt(addition);

        var multiplication = 2;
        multiplication = parseInt(multiplication);

        var subtraction = 4;
        subtraction = parseInt(subtraction);

        var division = 2;
        division = parseInt(division);


    if(!isNaN(entry) && entry > 0)
    {
        var newNum = (entry + addition);
        newNum = parseInt(newNum);

        var secondNum = (newNum* multiplication);
        secondNum = parseInt(secondNum);

        var thirdNum = (secondNum -= subtraction);
        thirdNum = parseInt(thirdNum);

        var fourthNum = (thirdNum/division);
        fourthNum = parseInt(fourthNum);

        var finalNum = (fourthNum -= entry);
        finalNum = parseInt(finalNum);
    

        alert("The magic number is always " + finalNum);

    }
    else
    {
        alert("invalid entry");
    }
    repeat = prompt("Repeat entry?","y");
}
    while (repeat == "y");


        document.write("<h1>The answer is 7</h1>");

    document.write(
        
    "The number " + entry + " plus " + " 9 " + " gives you" + newNum + 
    " multiplied by " + " 2 " + " has a product of " + secondNum + " . " + secondNum + 
    " minus " + " 4 " + " equals " + thirdNum + " . " + thirdNum + " divided by " + " 2 " + 
    + " equals " + fourthNum + " . " + fourthNum + " subtracted by the original number, in this case " + "(" + entry + ")" +
    " will always equal " + finalNum + "<br>" + "<br>" );
    

