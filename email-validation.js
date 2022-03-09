const doneBtn = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const message = document.getElementById('message');
    if (pattern.test(inputFieldText)) {
        message.innerText = 'Well done,your email is ok';
        message.style.color = 'darkgreen';
    }
    else {
        message.innerText = "Hey!what's wrong with you?are you okay?";
        message.style.color = 'darkred';
    }
    inputField.value = '';
}