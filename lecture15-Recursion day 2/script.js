//write a recursive function to find the sum of first N natural numbers
let N=4;
function printSum(N){
    if (N<=0) return 0;

    return N+(printSum(N-1));
}
console.log(printSum(N));


//find the GCD using iterative method 
let a=15,b=25;
function GCD(a,b){ 
    while(a!=0){ 
        let temp=a;
        a=b%a;
        b=temp;  
    }
    return b;
}
console.log(GCD(a,b));

//Recursive function to print the GCD of two numbers

function gcd(a,b){
    if(a==0) return b;

    return gcd(b%a,a);
}

console.log(gcd(a,b));


//GCD of an array
// let arr1=[27,12,18,24,30];
// let gcdArr=0;
//     for(let i=0;i<arr.length;i++){
//     gcdArr=gcd(gcdArr,arr[i]);
// }

// console.log(gcd(arr1));

//H.W: Nth fibonacci 
let FN=8;
function fibbonacci(N){
    if(N==0) return 0;
    if(N==1) return 1;
    return fibbonacci(N-1) + fibbonacci(N-2);
}
console.log("fibbonacci series:",fibbonacci(FN));

//TC = O(b)
function power(a,b){
    let power=1;
    for(let i=0;i<b;i++){
        power*=a;
    }
    return power;
}

console.log(power(2,10));


function binaryExponentiation(a,n){
    if(n==0) return 1;
    if(n==1) return a;
    let temp=binaryExponentiation(a,Math.floor(n/2));
    return temp*temp*a**(n%2);
}

console.log(binaryExponentiation(5,15));
console.log(binaryExponentiation(2,10));