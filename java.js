var x=document.getElementById('plus')
var y=document.getElementById('moins')
var z=document.getElementById('num')
var e=document.getElementById('reset')

var p=0
function plus(){
p++
z.innerHTML=p
if(p>0)
    z.style.color='green'
    else if(p<0)
         z.style.color='red'
         else
            z.style.color='black'
}

function moins(){
p--
z.innerHTML=p
if(p>0)
    z.style.color='green'
    else if(p<0)
         z.style.color='red'
         else
            z.style.color='black'
}

function rese(){
z.textContent=0
}

x.addEventListener('click',plus)
y.addEventListener('click',moins) 
e.addEventListener('click',rese)