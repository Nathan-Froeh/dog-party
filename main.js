/*target elements on page in js*/
// target input element
// target DOM element
// assign DOM element to input element 


var inputBox = document.querySelector('#dogName');
var outputBox = document.querySelector('.h1_bold');
var button = document.querySelector('.name_dog');
// query selectors are used to target elements on the DOM in JS


button.addEventListener('click', changeName);
// adding an event to an element on the DOM

function changeName(event){
	event.preventDefault();
// prevents the page refreshing on the click, the page would normally do this and delete the input
	console.log('Input text ' + inputBox.value);
	console.log('Original text ' + outputBox.innerText);
	outputBox.innerText = inputBox.value 
}
