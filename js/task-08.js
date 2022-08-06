const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) { 
    event.preventDefault();

    const formElem = event.currentTarget.elements;
    const email = formElem.email.value;
    const password = formElem.password.value;
    
    if (email === "" ) {
        alert('Введіть електронну пошту');
        return;
    }

    if (password === "" ) {
        alert('Введіть пароль');
        return;
    }
    
    const formData = { email, password };
    console.log(formData);  
    formEl.reset();
}
