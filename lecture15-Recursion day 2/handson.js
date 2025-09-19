 console.log("Handson file");
 //write the recursive function to find the sum of first N Naturam numbers
 //output = 15
 let num=5;
 function recursiveSum(num){
    if(num<=0) return 0
    return num+recursiveSum(num-1);
 }

 console.log("Recursive Sum of " + num + " Natural numbers is " + recursiveSum(num));

 /*
   GCD--> Greatest common divisor
   The big number which can divide both given numbers
   eg., GCD(9,15) = 3 
        GCD(12,24) = 6
        GCD(0,8)  = 8 , NOTE- GCD(0,x) is always x
  */

 //find the GCD using iterative method

let x=12,y=24;  //output=12
function greatestCommonDivisor(x,y){
    while(x!=0){
        let temp=x;
        x=y%x;
        y=temp;
    }
    return y;
}
let result=greatestCommonDivisor(x,y);
console.log("Greatest Common Divisor of " + x + " and " + y + " is ",result); 

//Recursive function to find GCD

x=15,y=25;     //output=5
function gcdArr(x,y){
    if(x==0) return y;

    return gcdArr(y%x,x);
}
let result1=gcdArr(x,y);
console.log("Greatest Common Divisor of " + x + " and " + y + " is ",result1); 

//GCD of an array

let arrr=[27,12,18,24,30];

 function GCDArray(arr){
    if(arr.length==0) return 0;
    let gcdarr=0;
    for(let i=0;i<arr.length;i++){
        gcdarr=gcdArr(gcdarr,arr[i]);
    }
    return gcdarr;
 }

 console.log(GCDArray(arrr));


//Fibonacci series --> sum of two previous numbers

//write the recursive function to find the N th fibonacci series

let num1=9;  //output = 21
function fibbonacciSeries(N){
    if(N==0) return 0;
    if(N==1) return 1;
    return fibbonacciSeries(N-1) + fibbonacciSeries(N-2);
}
let result2=fibbonacciSeries(num1);
console.log("Fibonacci Series number at " + num1 + " th is " ,result2);

//Print all fibonacci series till N th term
//output= 0 0 1 2 3 5 8 13 21
let ans=[];
for(let i=0;i<num1;i++){
    ans.push(fibbonacciSeries(i));
}
console.log("Fibonacci Series " , ans.join(" "));

//find a to the power b using iterative method
//TC = O(n)

function findPower(a,n){
    let power=1;
    for(let i=0;i<n;i++){
        power*=a;
    }
    return power;
}
let a1=3,b1=5;    //output = 243
let ans1=findPower(a1,b1);
console.log(a1 + " to the power of " + b1 + " is " ,ans1);

//find  a to the power b using RECURSIVE method (Binary Exponentiation)

function binaryExponentiation(a,n){
    if(n==0) return 1;
    if(n==1) return a;
    let temp=binaryExponentiation(a,Math.floor(n/2));
    return temp*temp*a**(n%2);
}
let x1=2,y1=10; // output = 1024
x1=5 , y1=15;   // output = 30517578125
console.log(x1 + " to the power of " + y1 + " th is " , binaryExponentiation(x1,y1));

