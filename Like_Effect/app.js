var con = document.querySelector('#container');
var likeBtn = document.querySelector('i');

con.addEventListener('dblclick',()=>{
    console.log("Hello");
    likeBtn.style.transform = 'translate(-50%,-50%) scale(1)';
    likeBtn.style.opacity = '0.6';

    setTimeout(()=>{
        likeBtn.style.opacity = '0';
    },1500)
    setTimeout(()=>{
        likeBtn.style.transform = 'translate(-50%,-50%) scale(0)';
    },2000)
})
