let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let myImage =document.querySelector("img");

if (!localStorage.getItem('name')){
    setUserName();
}
else{
    let myName =localStorage.getItem('name');
    myHeading.textContent = "Mozilla is cool, " + myName;
}

function setUserName(){
    let myName = prompt("Please input your name");
    if (!myName){
        setUserName();
    }else {
        myHeading.textContent = "Mozilla is cool, " + myName;
        localStorage.setItem('name', myName);
    }

}
myButton.onclick = function(){
    setUserName();
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
