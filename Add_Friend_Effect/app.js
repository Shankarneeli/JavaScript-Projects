var isStatus = document.querySelector('#status');
var buttonClick = document.querySelector('button');
let check =0;
buttonClick.addEventListener('click',()=>{
    if (check == 0){
        isStatus.innerHTML = 'friends✅';
        isStatus.style.color = 'green';
        buttonClick.innerHTML = 'Remove Friend';
        buttonClick.style.backgroundColor = 'red';
        check =1;
    }else{
        isStatus.innerHTML = 'Stranger';
        isStatus.style.color = 'Red';
        buttonClick.innerHTML = 'Add Friend';
        buttonClick.style.backgroundColor = 'rgb(2, 30, 46)';
        check =0;
    }

})