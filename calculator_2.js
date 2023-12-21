const output=document.querySelector(".output");
const result=document.querySelector(".result");
const keys=document.querySelectorAll("button");
const hist=document.querySelector('.history');


function clearone(){
    let v = output.innerText.split('');
    let ar = [0,1,2,3,4,5,6,7,8,9];
      
      for(a of v){
          let index = ar.indexOf(parseInt(a)); 
          if(index == -1){
              v.pop();
              v= v.join("");
              output.innerHTML=v;
              console.log(v);
              console.dir(v);
              break;
          }else{
              v.pop();            
          }   
      }
  }


var dj="";
var his="";
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});
function calculate(){
    let buttonText=this.innerText;

    if (buttonText==="CE") {
        clearone();
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

document.body.addEventListener("keydown",(ev)=>{
    if(ev.key==="0"||ev.key==="1"||ev.key==="2"||ev.key==="3"||ev.key==="4"||ev.key==="5"||ev.key==="6"||ev.key==="7"||
    ev.key==="8"||ev.key==="9"||ev.key==".")
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
    else if(ev.key=="%"||ev.key=="*"||ev.key=="+"||ev.key=="/"||ev.key=="-")
    {
        if(result.innerHTML==0)
        {
            output.innerText += ev.key;
        }
        else
        {
            output.innerHTML=result.innerHTML+ev.key;
        }
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