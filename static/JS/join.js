"use strict"

const $ = function(id){
    return document.getElementById(id);
};


//Get value of queryString parameter using the parameter key
const getQueryStringParmValue = (parmKey) => {
    // retrieve whole queryString
    const queryString = window.location.search;
    //retrieve the list of parameters
    const urlParams = new URLSearchParams(queryString);
    //get param value
    const paramValue = urlParams.get(parmKey);
    console.log('parmKey/value' + parmKey + ':' + paramValue);
    return paramValue;
};

const confirmData = function(){
    $('confirm_form').submit();
};

window.onload = function(){

    $("firstName").innerHTML = 'First Name:' +
        getQueryStringParmValue("first_name");

    $("emailAddress").innerHTML = 'EmailAddress:' +
        getQueryStringParmValue("email_address1");
        
    $("confirmBtn").onclick=confirmData;
};



