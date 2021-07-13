var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gorilla.jpg') {
      myImage.setAttribute ('src','images/monke.png');
    } else {
      myImage.setAttribute ('src','images/gorilla.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Держи банан, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Держи банан, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  