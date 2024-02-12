const form = document.querySelector('form')
const input = document.querySelector('input')
const message = document.querySelector('textarea')
const btn = document.querySelector('button')
const keyOfStorage = "feedback-form-state";


function readForm (form) {
  const userEmail = input.value.trim();
  const userMessage = message.value.trim();  
  return {
        userEmail,
        userMessage
    }
}

form.addEventListener('input', (event) => {
    const data = readForm(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(keyOfStorage, jsonData)
})


const rowData = localStorage.getItem(keyOfStorage);
if (rowData) {
    const data = JSON.parse(rowData)
    input.value = data.userEmail || "";
    message.value = data.userMessage || "";
}

form.addEventListener('submit', userSubmit)

function userSubmit(event) {
    event.preventDefault()
    if (input.value.trim() !== "" && message.value.trim() !== "") {
        console.log({
            email: input.value.trim(),
            message: message.value.trim(),
        })
    }
    else {
        alert("Будь ласка, заповніть усі поля")
    }
    localStorage.removeItem(keyOfStorage);
    form.reset()
}