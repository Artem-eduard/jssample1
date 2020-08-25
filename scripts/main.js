let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let myImage = document.querySelector("image");

function setUserName() {
    let myName = prompt("please input your name");

    if (!myName) {
        setUserName();
    } else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = "Mozilla is cool, " + myName;
    }

}
if (!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedname;
}
myButton.onclick=function(){
    setUserName();
}