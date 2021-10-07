"use strict"

const $ = function(id){
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
 
};

//Get value of queryString parameter using the parameter key
const getQueryStringParmValue = (parmKey) => {
    // retrieve whole queryString
    const queryString = window.location.search;
    //retrieve the list of parameters
    const urlParams = new URLSearchParams(queryString);
    //get param value
    const paramValue = urlParams(parmKey);
    console.log('parmKey/value' + parmKey + ':' + paramValue);
    return paramValue;
};

const confirmData = function(){
    $("firstName").innerHTML = 'First Name:' +
        getQueryStringParmValue(first_name);

    $("emailAddress").innerHTML = 'EmailAddress:' +
        getQueryStringParmValue(email_address1);
        
    $("confirmBtn").onclick=confirmData;
};

