/* ================================FUNCTIONS======================= */
/* =================================Arrow Functions================================ */

const arroww=(a,b)=>{
    return a-b;
}
console.log(arroww(6,7));


//write an arrow function to check if number is divisible by 3 or not
//doing it using more than 1 statement
const isDivisibleBy2=(a)=>{
    if(a%3==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isDivisibleBy2(6));
console.log(isDivisibleBy2(7));

// doing it using single statement

const isDivisibleBy=(a)=>!(a%5);
console.log(isDivisibleBy(20));
console.log(isDivisibleBy(21));

//Note : arrow functions do not have their own `this` keyword, they uses parent's `this`

const student1={
    fullName:"Tejashree Tagad",
    age:25,
    result1:function(resultStatus){
        console.log(this.fullName + " has " + resultStatus + " the Exam ");
        console.log(this);
    },
    result2: (resultStatus)=>{
        console.log(this.fullName+ " has " + resultStatus + " in thi exam ");
        console.log(this);
    },

};
student1.result1("Passes");
student1.result2("failed");

/* ===========================Anonymous functions==================== */

//basically a function with no name 

/* ===============================Higher Order Functions (HOFs)======================================= */
/* Types of HOFs */
/* 1. forEach 
   -applies callback functions on each statement
   -iterates over the each element and do
*/

let arrr=[2,1,6,3,9];
console.log(
    arrr.forEach((value,index,array)=>{
        value*=2;
        array[index]=value;
        console.log(value,index,array);
    })
);

console.log(arrr);

let users1=[
    {name:"Ramesh",age:20},
    {name:"Suresh" ,age:15},
    {name: "rutuja",age:21},
];

//print the name and age users array using foreach

users1.forEach((value)=>{
    console.log(value.name + " " + value.age);
});

arrr=[3,2,9,0,10];
let squareArrr=arrr.map((value ,index,array)=>{
    return value * value;
});
console.log({squareArrr});

users1=[
    {name:"Ramesh" , age:20},
    {name:"Suresh" ,ageL:15},
    {name:"Kalpesh" ,age:25},
];

//transform the name of each user to uppercase

let capitalName = users1.map((value)=>{
    return {name:value.name.toUpperCase(),age:value.age};

});

console.log({capitalName});

