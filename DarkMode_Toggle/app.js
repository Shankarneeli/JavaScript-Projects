let btn = document.querySelector("#Toggle");
let body = document.querySelector("body");
let currentTheme = "Light";

btn.addEventListener("click",()=>{
    if (currentTheme === "Light") {
        currentTheme = "Dark";  
        
        // body.style.backgroundColor = "black"; 
        // body.style.color = "white";
        // btn.style.backgroundColor = "white";
        // btn.style.color = "black";

        //way2
        body.classList.add("dark");
        body.classList.remove("light");
        
        btn.classList.add('light');     // as the bgc & colors of button is opposite we use opposote here too
        btn.classList.remove('dark');
    }
    
    else{
        currentTheme = "Light";

        // body.style.backgroundColor = "white"; 
        // body.style.color = "black";
        // btn.style.backgroundColor = "black";
        // btn.style.color = "white";
        
        //way2
        body.classList.add("light");
        body.classList.remove("dark");

        btn.classList.add('dark');   // as the bgc & colors of button is opposite we use opposote here too
        btn.classList.remove('light');
        
        
    }
    console.log(currentTheme);
})