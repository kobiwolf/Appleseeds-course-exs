function checkHome(language, isIsland, population,country){
    if(language==='English' && population<50 && !isIsland){
        console.log(`You should live in ${country}`);
    }else{
        console.log(`${country} ani't right for you`);
    }
}
checkHome('Hebrew',false,49,'Israel')
checkHome('English',false,49,'Canada')
