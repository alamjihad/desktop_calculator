const output=document.querySelector(".output");
const result=document.querySelector(".result");
const keys=document.querySelectorAll("button");
const hist=document.querySelector('.history');

document.body.addEventListener("keydown",(ev)=>{
    console.log(ev.key);  
    console.log("You pressed down.");
    if(ev.key==="0"||ev.key==="1"||ev.key==="2"||ev.key==="3"||ev.key==="4"||ev.key==="5"||ev.key==="6"||ev.key==="7"||
    ev.key==="8"||ev.key==="9"||ev.key=="-"||ev.key==".")
    {
        output.innerText += ev.key;
        return;
    }
    else if(ev.key=="Enter"||ev.key=="="){
        dj=eval(output.innerText);
        result.innerHTML=dj;
        his=his+`${output.innerText} = <br>${dj}<br><br>`;
        hist.innerHTML=(his);
        rm.style.display="block";
        return;
    }
    else if(ev.ctrlKey && ev.key=="%"||ev.key=="*"||ev.key=="+"||ev.key=="/")
    {
        output.innerText += ev.key;
        return;
    }
    else if(ev.key="Backspace")
    {
        output.innerText=output.textContent.substr(0,output.textContent.length-1);
        return;
    }
    else if(ev.key=="Shift")
    {
        output.innerText=output.innerText;
        return;
    }
});

function clearone(){
    let v = output.textContent.split('');
    let ar = [0,1,2,3,4,5,6,7,8,9];
    for(a of v){
        let index = ar.indexOf(parseInt(a)); 
        if(index == -1){
            v.pop();
            v= v.join("");
            output.innerText=v;
            break;
        }else{
            v.pop();            
        }
        return;
    }
}
var dj="";
var his="";
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});
function calculate(){
    let buttonText=this.innerText;
    if (buttonText=== "CE") {
        clearone()
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
        his=his+`${output.innerText} = <br>${dj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br><br>`;
        hist.innerHTML=(his);
        return;
    }
    else if(buttonText==="+/-"){
        output.textContent=output.textContent*(-1);
        output.innerText=output.textContent;
        return;
    }
    else{
        if(result.innerHTML!==0){
            output.textContent = result.innerHTML+buttonText;
            // output.textContent = output.textContent+buttonText;
            return;
        }
        else{
            output.textContent = output.textContent+buttonText;
            // output.textContent = result.innerHTML+buttonText;
            return;
        }
    }
}

var rm=document.querySelector('.rm');
function ans(){
    rm.style.display="block";
}

function rmv(){
    const histItem = document.querySelector(".history");
    while(histItem.firstChild){
        histItem.removeChild(histItem.firstChild)
    }
}

var acb= document.querySelector(".display");
function drs(){
    acb.style.border="none";
}