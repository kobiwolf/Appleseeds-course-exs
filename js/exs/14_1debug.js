function getSum(arr1, arr2) {
  let sum = 0;
  debugger;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [5, 66, 23]);
//ex1
// line 4 because arr1 is not defined
//2
// devtools I read where is the problam
// 3
// the function got only 1 argumant becaouse ther is no comma there
// needed to fix also the decleration of sum from const to let
