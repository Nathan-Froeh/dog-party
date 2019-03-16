/*target elements on page in js*/
// target input element
// target DOM element
// assign DOM element to input element 


var input = document.querySelector('#dogName');
var output = document.querySelector('.h1_bold');
var button = document.querySelector('.name_dog');

button.addEventListener('click', yourDog);

function yourDog (event){
	console.log('Input text ' + input.value);
	console.log('Original text ' + output.innerText);
	output.innerText = input.value 
}



/*figure out how to include a default text in case the input is empty. */