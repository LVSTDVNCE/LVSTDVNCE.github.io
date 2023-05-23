//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

/*
alert('Нажав окей, вы предоствите удаленный доступ к вашему ПК!');
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pon1.jpg') {
      myImage.setAttribute ('src','images/pon5.jpg');
    } else {
      myImage.setAttribute ('src','images/pon1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Обезбяна по имени, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Обезбяна по имени, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }