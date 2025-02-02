let colors = document.querySelectorAll(".color");
let body = document.querySelector("body");


colors.forEach((color)=>{
    // console.log(color);

    color.addEventListener("click",(i)=>{
        // console.log(i);
        console.log(i.target.id);
        body.style.backgroundColor = i.target.id.toLowerCase();
        
    })
    
})

