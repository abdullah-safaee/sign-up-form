const form = document.querySelector('form')
const fName = form.querySelector('#f-name')
const lName = form.querySelector('#l-name')
const email = form.querySelector('#email')
const phoneNumber = form.querySelector('#phone-number')
const password = form.querySelector('#password')
const confirmPassword = form.querySelector('#confirm-pasword')


// console.log(form,fName,lName,email,phoneNumber,password,confirmPassword)

form.addEventListener('submit' ,function(e) {
    e.preventDefault()

    if (password.value !== confirmPassword.value){
        confirmPassword.parentElement.querySelector('div.error').textContent = 'Passwords don\'t match!'
    }
    
    if (password.value === 'password'){
        password.parentElement.querySelector('div.error').textContent = 'Password can\'t be password'
    }

    else{
        form.submit()
    }
})

