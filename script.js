const inpt=document.querySelectorAll('input');
const btn=document.querySelectorAll('button');

let string="";
let arr=Array.from(btn);
arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            inpt[0].value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            inpt[0].value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.slice(0,-1);
            inpt[0].value=string;
        }
        else{
            string+=e.target.innerHTML;
            inpt[0].value=string;
        }
    })
})