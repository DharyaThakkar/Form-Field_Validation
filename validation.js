const inputs = document.querySelectorAll('input');


const patterns = {
   telephone: /^\d{11}$/,
   username: /^[a-z\d]{5,12}$/i,
   password: /^[\w@-]{8,20}$/,
   slug: /^[a-z\d-]{8,20}$/,
   email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

//validation function - to test the regular expression against the input field data provided by the user.

function validate(field,regex) {
    //console.log(regex.test(field.value));//it will return 'true' if the particular field is valid ,otherwise it will return 'false'.
    
    if(!regex.test(field.value)) {
        field.className = 'invalid';   
    }else{
        field.className = 'valid';
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup',e=>{
           //console.log(e.target.attributes.name.value);  
           validate(e.target,patterns[e.target.attributes.name.value]);
    });
});

//here, e is the object of the keyup event and it has a 'target' property using which we can determine, the element in which the event occurred.