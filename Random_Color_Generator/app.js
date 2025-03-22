const container = document.querySelector('.container');
const result = document.querySelector('.color');
const buttonHex = document.querySelector('.btn')
// const body = document.querySelector('body');
const hex =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function random(arr){
   let randomIndex =  Math.floor(Math.random()*arr.length);
   return arr[randomIndex]
}

buttonHex.addEventListener('click', ()=>{
    // console.log('eventCall working...');
    let hash = '#';
    for(let i=0;i<6;i++){
        hash += random(hex);
    }
    container.style.backgroundColor = hash;
    result.innerText = hash;
    // body.style.backgroundColor = hash;
})