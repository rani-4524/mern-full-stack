// Arrays

const Team=new Array(10);
console.log(Team);

//use indexOf method to find the index of values 
const Teams=["KKR","SRH","MI","CSK","RR"];
console.log(Teams);
console.log(Teams.indexOf("SRH"));

//Replace the "KKR" with "LSG"
const indexOfKkr=Teams.indexOf("KKR");
if("KKR"!=-1){
    Teams[indexOfKkr]="LSG";
}
console.log(Teams);

//Replace the "MI" with "DC"
const miIndex=Teams.indexOf("MI");
if("MI"!=-1){
    Teams[miIndex]="DC";
}
console.log(Teams);

//includes() method in arrays --> it returns only boolean values i.e.  true/false

console.log(Teams.includes("MI"));
console.log(Teams.includes("DC"));

//using includes() method replace "LSG" with "KKR"
const oldTeam="LSG";
const newTeam="KKR";

if(Teams.includes(oldTeam)){
    let indexOfLsg=Teams.indexOf("LSG");
    Teams[indexOfLsg]=newTeam;
}

console.log(Teams);

// concat function in arrays
const Team1=["LSG","PBKS"];
console.log(Team1.concat(Teams));

//Q1: find the average of the numnber

function average(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i];
    }
    let average=sum/num.length;
    console.log(average);
}

const arrr=[1 , 2 ,3 , 4];
average(arrr);

//Q2: find the factorial using function

function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    return fact;
}
console.log("The Factorial of Number is:", factorial(5));


//given an array -->[4,10,20,14] and r=4 
//find nCr of r=each element of this array  (nCR=n!/[(n-r)! * r!])

function findnCr(n,r){
    if (n-r<0){
        return -1;
    }
     let nfactorial=factorial(n);
     let rfactorial=factorial(r);
     let nrfactorial=factorial(n-r);
     
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
const arrr1=[4,6,2,10];
console.log(nCrOfArray(arrr1));

