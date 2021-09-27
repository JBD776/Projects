"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => '${lbl} must be valid number greater than zero.';

const getErrorMsgTax = lbl => '${lbl} tax must be a number greater than zero & less than 1.';

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();

};

const calculateTax = (subtotal, taxRate) => {
    const taxAmount = (subtotal * taxRate);
    return taxAmount;
};

const processEntries = () => {
    const sale = parseFloat ($('#sale').value);
    const tax = parseFloat ($("#tax").value);

    if (isNaN(sale) || isNaN(tax)){
        alert(getErrorMsg("#sale"));
    }else if((sale <=0) || (tax <=0)) 
        alert (getErrorMsgTax("tax"));
    else{
        $('#total').value = (sale + calculateTax(sale,tax)).toFixed(2);
    };    
};

var clearEntries = () =>{
    $('#sale').value = "";
    $('#tax').value = "";
    $('#total').value = "";
};
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#sale").focus();
});

