//SCOPES
console.log("Below code is of handson file");
a=10;
let b=5;
const c=6;
var d=12;

{
    var y1=6;
    const y2=17;

    console.log("Var inside block scope:" ,y1);
    console.log("Const outside block scope:" , y2);
}

console.log("Var inside block scope:" ,y1);
//console.log("Const outside block scope :", y2);


function sayHI(){
    for(let i=0;i<a;i++)
        console.log("hii",i);
}

sayHI();

//Nested scope

function nestedScopes(){
    let value=125;
    for(let i=0;i<5;i++){
        if(i%2==0){
            let value2=35;
            console.log(value,value2);
        }
    }
}

nestedScopes();


//NESTED ARRAYS
let arrr=[1,[1,2,3],4,5,[6,95,71],80];
for(let i=0;i<arrr.length;i++){
    console.log(arrr[i]);
}

//we know that the array will contain only numbers and arrays
//METHOD 1- Using undefined keyword (asw a variable which is not array,will have .length=undefined)
console.log("Print Using the undefined keyword");
for(let i=0;i<arrr.length;i++){
    if(arrr[i].length===undefined){
        console.log(arrr[i]);
    } else{
        for(let j=0;j<arrr[i].length;j++){
            console.log(arrr[i][j]);
        }
    }
}
//QUESTONS 
console.log("Practice Problem");
const arrr1=[1,[2,3],4];
for(let i=0;i<arrr1.length;i++){
    if(arrr1[i].length===undefined){
        console.log(arrr1[i]);
    }else{
        for(let j=0;j<arrr1[i].length;j++){
            console.log(arrr1[i][j]);
        }
    }
}


const arrr2=[[10,20],[30,40,50]];
console.log("Length of an array is:", arrr2.length);
console.log("Length of an array is:",arrr2[1].length);
console.log("Second element of second inner array is :" ,arrr2[1][1]);

const arrr3=[1,[2,[3,4],5],6];
console.log("arrr3.length is :" ,arrr3.length);
console.log("arrr3[1].length is:",arrr3[1].length);
console.log("arrr3[1][1].length:" ,arrr3[1][1].length);
console.log("element at arrr3[1][1][0] is :",arrr3[1][1][0]);

const arrr4=[[1,2,3],[4,5],[6,[7,8]]];
console.log("arrr4[0].length is:",arrr4[0].length);
console.log("arrr4[1].length is:",arrr4[1].length);
console.log("arrr4[2].length is:",arrr4[2].length);
console.log("arrr4[2][1].length is:",arrr4[2][1].length);

console.log(arrr4[2][1][1]);

//METHOD 2- Using typeof keyword
console.log("Print the arrya using typeof keyword");
let arrr5=[1,[1,2,3],4,5,[6,95,71],80];
for(let i=0;i<arrr5.length;i++){
    if(typeof arrr5[i]=="number")
        console.log(arrr5[i]);
    else{
        for(let j=0;j<arrr5[i].length;j++){
            console.log(arrr5[i][j]);
        }
    }
}

//METHOD 3- Using isArray method
console.log("Print the array using isArray() Mathod");
for(let i=0;i<arrr5.length;i++){
    if(!Array.isArray(arrr5[i]))
        console.log(arrr5[i]);
    else{
        for(let j=0;j<arrr5[i].length;j++){
            console.log(arrr5[i][j]);
        }
    }
}

//QUESTION - write a function, that takes a nested array as argument and tells if this nested array is a matrix or not
 function matrix(arr){
    if(!Array.isArray(arr))
        return false;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length!=arr[0].length){
            return false;
        }
    }
    return true;
 }
const arrr6=[[1,2],[2,3,4]];
const arrr7=[[1,2,3,4]];
const arrr8=[[1,2],[2,3]];
console.log(matrix(arrr5));
console.log(matrix(arrr6));
console.log(matrix(arrr7));

//QUESTION - write a function to calculate product of sum of each rows

function calculateProductOfSum(arr){
    let product=1;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j];
        }
        product*=sum;
    }
    return product;
}

const arrr9=[
    [1,2,3],
    [2,3],
    [1,4,5],
];
console.log(calculateProductOfSum(arrr9));

//QUESTION - write a function calculate the sum of nested arrays
function calculateSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j];
        }
    }
    return sum;
}
console.log(calculateSum(arrr9));

const arrr10=[1,2,3,4,5];
for(let i=0;i<arrr10.length;i++){
    let subarray=[];
    for(let j=i;j<arrr10.length;j++){
        subarray.push(arrr10[j]);
        console.log(subarray);
    }
 
}