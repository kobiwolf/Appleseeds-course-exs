function noraml1(pass){
    if(pass.length>=7){
        console.log('strong');
    }else{
        console.log('weak');
    }
}
let noraml2=pass=>{
    pass.length>7?console.log('strong'):console.log('weak');
}
let normal3=(pass)=>{
    pass.length>7&&!!console.log('strong');
    pass.length<7&&!!console.log('weak');
}
function advanced(pass){
    pass.length>7&&/[A-Z]/.test(pass)?console.log('very strong'):'';
    pass.length===7||pass.length>7&&!/[A-Z]/.test(pass)?console.log('strong'):'';
    pass.length<7?console.log('weak'):'';
}
advanced('A1234657')
advanced('a1234657')
advanced('A123456')
advanced('123456')
