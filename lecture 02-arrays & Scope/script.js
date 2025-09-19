const arr=new Array(10);
console.log(arr);

const arr1=new Array("10");
console.log(arr1);

const arr2=["RCB","SRH","CSK","KKR","MI"];
//IndexOf array
console.log(arr2.indexOf("SRH"));

//Replace KKR with LSG
const kkrIndex=arr2.indexOf("KKR");
if(kkrIndex!=-1){
    arr2[kkrIndex]="LSG";
}
console.log(arr2);
//includes() function in Arrays -->tells if a value present in arrays or not
//return boolean values only-true/false

const arr3=["RCB","SRH","CSK","KKR","MI"];

// if(arr3.includes("KKR")){
//     let kkrIndex1=arr3.indexOf("KKR");
//     arr3[kkrIndex1]="LSG";
// }
// console.log(arr3);

// Best way to write above code
const oldteam="KKR";
const newteam="LSG";

if(arr3.includes(oldteam)){
    let kkrIndex=arr3.indexOf("KKR");
    arr3[kkrIndex]="LSG";
}

console.log(arr3);

//concat function in arrays

const arr4=["DC","RR"];
console.log(arr3.concat(arr4));

/* Q1.
find the factorial of number
*/

function fact(num){
    let result=1;
    for(let i=1;i<=num;i++){
        result*=i;
    }
    return result;
}
console.log("facotrial of number",fact(5));
//Q  find the average of numbers
let array1=[3, 4, 6 ,5,2];
function average(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=array1[i];
    }  
    let avg=sum/num.length;
    return avg;
}

console.log(average(array1));


/*Q2. given an array-->[4,10,20,14] anr r=4
find nCr of each element of this array
nCR=n!/[(n-r)! * r!]

*/
function factorial(num){
    let result=1;
    for(let i=1;i<=num;i++){
        result*=i;
    }
    return result;
}

function nCr(n,r){
    if(n-r<0){
        return -1;
    }

    let nfact=factorial(n);
    let rfact=factorial(r);
    let nrfact=factorial(n-r);

    let ans=nfact/(nrfact*rfact);
    return ans;
}

function nCrOfArray(arr){
    const n=arr.length;
    const r=4;
    let result=[];
    for(let number of arr){
        const ncr=nCr(number,r);
        result.push(ncr);
    }
    return result;
}
const array=[4,6,2,10];
console.log(nCrOfArray(array));




