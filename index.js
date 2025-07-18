
let count=1;

function increase()
{
    count++;
   document.getElementById("crt_data").innerHTML=count;
}
function decrease(){
    if(count>0){
        count--;
        document.getElementById("crt_data").innerHTML=count;
    }
}