import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form")
const input = document.querySelector("input")
const textarea = document.querySelector("textarea")
const button = document.querySelector("button")
form.addEventListener("input", throttle(onInput, 500))
const currentInput = {
        email: " ",
        message: " "
    }
function onInput(evt){
    if (evt.target === evt.currentTarget) {
        return
    }
    
if(evt.target.hasAttribute('type')){
currentInput.email = evt.target.value
}
if (evt.target.hasAttribute('rows')) {
currentInput.message = evt.target.value
}
localStorage.setItem("feedback-form-state", JSON.stringify(currentInput))
}
if (localStorage.getItem("feedback-form-state") === null) {
    return
} else {
    input.value = JSON.parse(localStorage.getItem("feedback-form-state")).email
textarea.value = JSON.parse(localStorage.getItem("feedback-form-state")).message
}


form.addEventListener("submit", onClick)

function onClick(evt) {
    evt.preventDefault()
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")).email);
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")).message);
    localStorage.removeItem("feedback-form-state")
    input.value = " "
textarea.value = " "
}






