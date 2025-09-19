/* 
previous lecture 

-Arrays questions
   -frequency array
   -prefix sum
   all pairs with difference =k
   time and space complexity
   pilus minus
*/

// Scopes

x=10;
let y=5;
const z=12;
var w=6;

{
    var y1=6;
    const y2=17;

    console.log("var inside block scope: ",y1);
    console.log("const outside block scope:",y2);
}
console.log("var inside block scope: ",y1);
//console.log("const outside block scope:",y2);

    function sayHi(){
        for(let i=0;i<x;i++) console.log("Hi",i);
    }

    sayHi();

// nested scopes
function nestedScopes(){
    let value=145;
    for(let i=0;i<5;i++){
        if(i%2==0){
            let value2=35;
            console.log(value,value2);
        }
    }
}
nestedScopes();

/* NESTED ARRAYS */

let arr=[1,[1,2,3],4,5,[6,95,71],80];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
   
//we know that  the array will contain oly numbers and arrays
//METHOD 1- using undefined keyword (as a variable which is not array,will have .length =undefined)
console.log("Print the using undefined keyword");
for(let i=0;i<arr.length;i++){
    if(arr.length===undefined){
        //this means that this element is a number
        console.log(arr[i]);
    }
    else{
        //since arr[i] is an array,we'll use a for loop to print this array
        for(let j=0;j<arr[i].length;j++){
            console.log(arr[i][j]);
        }
    }
}
//METHOD 2-using typeof keyword
console.log("Print the array using typeof keyword");
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]=="number") console.log(arr[i]);
    else{
        for(let j=0;j<arr[i].length;j++){
            console.log(arr[i][j]);
        }
    }
}

//METHOD 3-using isArray method
console.log("Print the array using isArray() Method");
for(let i=0;i<arr.length;i++){
    if(!Array.isArray(arr[i])) console.log(arr[i]);
    else{
        for(let j=0;j<arr[i].length;j++){
            console.log(arr[i][j]);
        }
    }
}

// Q. write a function , that takes a nested array as an argument and tells if this nested array is a matrix or not

function matrix(arr){
    if(!Array.isArray(arr)) return false;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length!=arr[0].length){
            return false;
        }
    }
    return true;

}
const num=[[1,2],[2,3,4]];
const num1=[1,2,3,4];
const num2=[[1,2],[2,3]];
console.log(matrix(num));
console.log(matrix(num1));
console.log(matrix(num2));

//Q. write a function to calculate product of sum of each rows

function calculateProduct(arr){
    let product=1
    for(let i=0;i<arr.length;i++){
      let sum=0;
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j];
        }
        product*=sum;
    }
    return product;
}

console.log(calculateProduct([
    [1,2,3],
    [2,3],
    [1,4,5],
])
);

// write a function to calulate the sum of the nested arrays

function calculateSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j];
        }
    }
    return sum;
}


console.log(calculateSum([
    [1,2,3],
    [2,3],
    [1,4,5],
])
);

const nums=[1,2,3,4,5];
for(let i=0;i<nums.length;i++){
    for(let j=i;j<nums.length;j++){
        // console.log(nums.slice(i,j));
        let subarray=[];
        for(let k=i;k<=j;k++){
            subarray.push(arr[k]);
        }
        console.log(subarray);
    }
}