const worldP=7900;
function pOfWorld1(cityN,cityP,world=worldP){
    return `${cityN} is ${(cityP/world*100).toFixed(2)}% of the world`
}
let a=pOfWorld1('Chine',790);
let b=pOfWorld1('USA',1000);
let c=pOfWorld1('Israel',300);
console.log(a,b,c);
let pOfWorld2=(cityN,cityP,world=worldP)=>`${cityN} is ${(cityP/world*100).toFixed(2)}% of the world`;
let d=pOfWorld2('France',600)
let e=pOfWorld2('Germany',550)
let f=pOfWorld2('Greece',400)
console.log(d,e,f);
if(-1){
    console.log(true);
}