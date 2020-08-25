const form = document.getElementById(form);
const username = document.getElementById(username);
const password = document.getElementById(password);
const password2 = document. getElementById(password2);

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    // create a function to check for inputs in the form
    checkForInputs();
});

//check for inputs function
function checkForInputs(){

    //get the input vlaues of the inputs
    //create a variable for those input values
    const userValue = username.value.trim();
    const passValue = password.value.trim();
    const pass2Value = password2.value.trim();

    //write an if statement to check for the values inputted
    if(userValue === ''){
        //set the error
        displayError( username,'username is blank');
    }else{
        //set success
        displaySuccess(username)
    }



}
function displayError(input, message){
    //create a variable for the input
    const checkInput = input.parentElement;
    
}