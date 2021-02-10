const people = ["Greg", "Mary", "Devon", "James"];
let peopleCopy=[...people]
    // ex1
for (let i = 0; i< people.length; i++) {
  console.log(people[i]);
    }
    //ex2
people.shift() 
    //ex3
people.pop();
    // ex4
people.unshift('Matt')
    //ex5
people.push("kobi")
    //ex6
for (let i = 0; i< people.length; i++){
    console.log(people[i]);
    if(people[i]==='Mary'){
        break
    }
}
    //ex7
let newArr=people.slice(2)
    //ex8
people.indexOf("Mary");
    //ex9
people.indexOf("foo");
    //ex10
peopleCopy=[...peopleCopy.splice(0,2),"Elizabeth", "Artie",...peopleCopy.splice(1)]
console.log(peopleCopy);
    //ex11
let withBob=[...people,"Bob"]