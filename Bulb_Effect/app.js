var bulb = document.querySelector("#bulb");
var btn =  document.querySelector("#button");

var counter = 0;

btn.addEventListener("click",function(){
    if(counter == 0 ){
    bulb.style.backgroundColor = "yellow";
    console.log("Bulb is ON");
    counter = 1;   
}else{
    bulb.style.backgroundColor = "transparent";
    console.log("Bulb is OFF");
    counter = 0;
}
})

