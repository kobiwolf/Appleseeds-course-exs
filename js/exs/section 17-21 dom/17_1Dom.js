let plus=document.querySelector('.plus')
let minus=document.querySelector('.minus')
let p=document.querySelector('.p')
let num=16
function bigger(){
    if(num<100) num+=4
    p.style.fontSize=`${num}px`
}
function smaller(){
    if(num>6) num-=4
    p.style.fontSize=`${num}px`
}

plus.addEventListener('click',bigger)
minus.addEventListener('click',smaller)