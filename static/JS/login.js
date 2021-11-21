let em ="";

function isValidEmail(){
    em = $.trim($("input[name='email']").val());
    const emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(em)){
        return true;
    }
    else {
        alert ('Invalid Email');
        return false;
    }
}

function clearResults(){
    $('#output').empty();
}

$(document).on('submit', function(){
    event.preventDefault(); // default for event is to reload or navigate to a new page
    clearResults();
    $('#output').append('<p>Form output:<\p>');
    if (isValidEmail() ){
        var emvalue ='<p>' + em + '</p>'
        $('#output').append(emvalue);
        var password1 = $("input[name='password1']").val();
        var password2 = $("input[name='password2']").val();
        if (password1 != password2){
            alert('passwords do not match')
        }
        else{
            $('#output').append('<p>Passwords match</p>')
        }
    }

});