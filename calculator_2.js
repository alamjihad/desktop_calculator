const output=document.querySelector(".output");
const result=document.querySelector(".result");
const keys=document.querySelectorAll("button");
const hist=document.querySelector('.history');

var dj="";
var his="";
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});
function calculate(){
    let buttonText=this.innerText;
    if(buttonText==="CE"){
        output.innerText="";
        result.innerText="0";
        return;
    }
    else if(buttonText==="C"){
        output.innerText="";
        result.innerText="0";
        return;
    }
    else if(buttonText==="<"){
        output.innerText=output.textContent.substr(0,output.textContent.length-1);
        return;
    }
    else if(buttonText==="="){
        dj=eval(output.innerText);
        result.innerHTML=dj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        his=his+`${output.innerText} = <br>${dj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br>`;
        hist.innerHTML=(his);
    }
    else if(buttonText==="+/-"){
        output.textContent=output.textContent*(-1);
        output.innerText=output.textContent;
    }
    else{
        output.textContent += buttonText;
        return;
    }
}

var rm=document.querySelector('.rm');
function ans(){
    rm.style.display="block";
}

function rmv(){
    hist.innerHTML=("");
}