//This Code youtube link -  https://youtu.be/efrW5-IYoCU?si=UFiUVzuzK7vmtodQ

const randomColor = function (){
 const hex = "0123456789ABCDEF";
 let color = "#";

 for(let i =0; i<6;i++){
  color +=hex[Math.floor(Math.random()*16)];
 }
 return color;
}
console.log(randomColor());

let intervalId;
let startChangingColor = function(){
// if(!intervalId){
if(intervalId == null ){
//Checking whether intervalId is empty/ null or not, jst to make cleaner code.
  intervalId = setInterval(changeBgColor,1000);
}
  function changeBgColor (){
    document.body.style.backgroundColor = randomColor();
  }
}

let stopChangingColor = function(){

  clearInterval(intervalId);
  intervalId = null; 
  //To make code cleaner.Emptying intervalId after every tym clicking Stop button. 
}

document.querySelector("#start").addEventListener("click",startChangingColor);
document.querySelector("#stop").addEventListener("click",stopChangingColor);
