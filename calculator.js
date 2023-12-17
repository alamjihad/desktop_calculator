const keys =document.querySelectorAll('.key');
const display_input=document.querySelector('.display .input');
const display_output=document.querySelector('.display .output');
const hist=document.querySelector('.history');

let input ="";
let his="";
let result="";
for(let key of keys){
    const value = key.dataset.key;
    key.addEventListener('click',()=>{
        if(value == "clear"){
            input ="";
            display_input.innerHTML="";
            display_output.innerHTML="";
        }else if(value=="back"){
            input=input.slice(0,-1);
            display_input.innerHTML=input;
        }else if(value=="="){
            result = eval(input);
            display_output.innerHTML=result;
            his=his+`${input} = <br>${result}<br>`;
            hist.innerHTML=(his);
        }else{
            input+=value;
            display_input.innerHTML=input;
        }
    })
};
// function ans(){
//     hist.innerHTML=("<br>"+input+" = "+"<br>"+result);
// }
function rmv(){
    hist.innerHTML="";
}