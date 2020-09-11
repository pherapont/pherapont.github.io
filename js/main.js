const emailCheck = (email) => {
	const check = /^\w+@\w+\.\w+$/
	return check.test(email)
}

const subscribeForm = document.querySelector('.form')
var isError = false

const emailValidator = (e) => {
	e.preventDefault()
	const falseMessage = 'Please provide a valid email'
	const trueMessage = 'The subscribe was successfully sent'
	const input = subscribeForm.querySelector('.form__input')
	const message = document.querySelector('.form__message')
	if (emailCheck(input.value)) {
		message.innerHTML = trueMessage
		message.style.color = 'green'
		if (isError) {
			subscribeForm.classList.remove('error-form')
			isError = false
		}
	} else {
		message.innerHTML = falseMessage
		message.style.color = 'red'
		subscribeForm.classList.add('error-form')
		isError = true
	}
	console.log (isError)
}

window.addEventListener('submit', emailValidator)