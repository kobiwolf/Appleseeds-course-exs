function checkLength(arr){
    let arrLength=[]
    for (let i = 0; i< arr.length; i++) { 
            arrLength.push(arr[i].length)
    }
    return arrLength
}
console.log(checkLength(['eer','ettt','ert2d']));