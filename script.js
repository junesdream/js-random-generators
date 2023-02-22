const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

// Functions to get password
function getLowerCase() {
	return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
	return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// Function to get random password
function generatePassword() {
	const len = lenEl.value;

	let password = "";

	if (upperEl.checked) {
		password += getUpperCase();
	}

	if (lowerEl.checked) {
		password += getLowerCase();
	}

	if (numberEl.checked) {
		password += getNumber();
	}

	if (symbolEl.checked) {
		password += getSymbol();
	}

	for (let i = password.length; i < len; i++) {
		const x = generateX();
		password += x;
	}

	pwEl.innerText = password;
}

// To generate passwords
function generateX() {
	const xs = [];
	if (upperEl.checked) {
		xs.push(getUpperCase());
	}

	if (lowerEl.checked) {
		xs.push(getLowerCase());
	}

	if (numberEl.checked) {
		xs.push(getNumber());
	}

	if (symbolEl.checked) {
		xs.push(getSymbol());
	}

	if (xs.length === 0) return "";

	return xs[Math.floor(Math.random() * xs.length)];
}

//eventListner for Button
generateEl.addEventListener("click", generatePassword);

//Copy the generated password on Clipboard
copyEl.addEventListener("click", () => {
	//1. create textarea
	const textarea = document.createElement("textarea");
	//Put password result to innerText
	const password = pwEl.innerText;
	//If we have no password return
	if (!password) {
		return;
	}
	//otherwise we put password into textarea
	textarea.value = password;
	//we append the body
	document.body.appendChild(textarea);
	//We select it
	textarea.select();
	//We use doc execCommand copy 
	document.execCommand("copy");
	//and then we remove the textarea 
	textarea.remove();
	alert("Password copied to clipboard");
});
