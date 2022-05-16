let marquesina=["Re","ci","cla","mos"];
let i=0;
let ubicacionDOM=document.getElementById("mjeReciclamos");
function setI(){
    if(i<3){i++}
    else{i=0}
    ubicacionDOM.innerHTML=marquesina[i];
}
setInterval(setI, 1000);