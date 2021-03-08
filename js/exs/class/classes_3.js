class SortNumbers {
  constructor(arrOfNum = []) {
    this.numList = arrOfNum;
  }
  addnum(num) {
    if (isPrime(num) && !this.numList.includes(num)) {
      this.numList.push(num);
      return true;
    }
    return false;
  }
  removeNum(num) {
    if (this.numList.includes(num)) {
      const index = this.numList.findIndex(num);
      this.numList.splice(index, 1);
      return true;
    }
    return false;
  }
  getAll() {
    return this.numList;
  }
  print() {
    console.log(this.numList);
  }
  share(arr) {
    arr = arr.getAll();
    let count = 0;
    this.numList.forEach((num) => {
      if (arr.includes(num)) count++;
    });
    return count;
  }
  union(arr) {
    let newArr = new SortNumbers(this.getAll());
    arr.getAll().forEach((num) => {
      newArr.addnum(num);
    });
    return newArr;
  }
}
function isPrime(number) {
  if (number === 1) {
    return true;
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
    return true;
  }
}
let arr1 = new SortNumbers();
arr1.addnum(1);
arr1.addnum(3);
arr1.addnum(11);
arr1.addnum(17);
let arr2 = new SortNumbers([]);
arr2.addnum(9);
arr2.addnum(5);
arr2.addnum(5);
arr2.addnum(2);
arr2.addnum(11);
console.log(arr2.share(arr1));
arr1.union(arr2);
