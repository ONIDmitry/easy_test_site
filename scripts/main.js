var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello, World!";

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} */

var myImage = document.querySelector('img');
var myButton = document.querySelector('button');

myImage.onclick = function () {
	var srcImage = myImage.getAttribute('src');
	if (srcImage == "images/firefox-icon.png") myImage.setAttribute('src', 'images/house.jpg');
	else myImage.setAttribute('src', 'images/firefox-icon.png');
}

function setUserName() {
	var myName = prompt("What is your name?");
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is coll, ' + myName;
}

if (!localStorage.getItem('name'))
{
	setUserName();
}
else
{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is coll, ' + storedName;
}

myButton.onclick = function () {
	setUserName();
}
