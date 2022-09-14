
// lock the screen's orientation change
screen.orientation.lock("any").then(r => console.log(r))

const form = document.querySelector('#form')

form.addEventListener('submit', submitHandler)

function submitHandler(e){
    // prevent the form from submit the data (which is default behaviour)
    e.preventDefault();

    // validate the name field
    // check if it's just text and if it's not empty
    const nameBox = document.querySelector('#name');
    const Name = nameBox.value;
    if(!Name || Name.length <= 0){
        alert("Name is required!")
        highlightError(nameBox)
        return;
    }else if(isNaN(Name) === false){
        alert("Name should just be text not a number or just spaces!")
        highlightError(nameBox);
        return;
    }

    // validate number field
    // check if it's not empty and if it's a number
    const numberBox = document.querySelector('#number');
    const number = numberBox.value;
    if(!number || number.length <= 0){
        alert("Number is required!")
        highlightError(numberBox)
        return;
    }else if(isNaN(number)){
        alert("only numbers allowed for number field!")
        highlightError(numberBox)
        return;
    }

    // validate email field
    // check if it's not empty and if it's the correct format
    /* format:
    // 1. at least two characters to the left of @ symbol
    // 2. at least two characters to the right of @ symbol
    // 3. at least two characters to the left and right of the '.' symbol
     */
    const emailBox = document.querySelector('#email');
    const email = emailBox.value;
    const at_symbol_index = email.indexOf('@')
    const dot_symbol_index = email.indexOf('.')
    if(!email || email.length <= 0) {
        alert("Email is required!")
        highlightError(emailBox);
        return;
    }else if(at_symbol_index <= 1 || dot_symbol_index <= 3 || dot_symbol_index + 2 <= 6 ){
        alert("wrong email format, should be like 'example@gmail.com")
        highlightError(emailBox)
        return;
    }

    // validate the enquiry field
    // check if it's not empty
    const enquiryBox = document.querySelector('#enquiry')
    const enquiry = enquiryBox.value;
    if(!enquiry || enquiry.length <= 0) {
        alert("Enquiry required!")
        highlightError(enquiryBox)
        return;
    }

    alert("Enquiry Successful!")
    form.reset();
}

function highlightError(field){
    // field.style.backgroundColor = 'red'
    field.style.boxShadow = '0 0 5px 5px rgba(200, 100, 100, 1.0)'
    setTimeout(() => {
        // field.style.backgroundColor = 'white';
        field.style.boxShadow = 'none'
    }, 5000)
}