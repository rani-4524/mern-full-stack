console.log("Handson file");

//QUESTION - find the square root of a number in O(logN) TC
let n=36;
function squareRoot(N){
    let low=0;
    let high=N;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(mid*mid==N){
            return mid;
        }else if(mid*mid>N){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return -1;
}
console.log("Square root of " + n +" is " +squareRoot(n));

// QUESTION - Find a target element in a sorted array and print  it
//arr=[1,2,3,6,7,9,12,16]
//target = 6
function findTarget(arr,targetElement){
    let low=0;
    let high=arr.length-1;

    while(low<=high){
        let mid= Math.floor(low+(high-low)/2);
        if(arr[mid]==targetElement){
            return mid;
        }else if(arr[mid]<targetElement){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
}
let num1=[1,2,3,6,7,9,12,16];
let targetElement=6;
console.log("Target Element " +targetElement + " is at index " + findTarget(num1,targetElement));


//QUESTUION - find first occurence of target element 
//A=[1,2,3,6,11,11,12,15] & target = 11

function firstOccTarget(arr,target){
    let low=0;
    let high=arr.length-1;
    let ans=-1;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]==target){
          ans=mid;
          high=mid-1;
        }else if(arr[mid]<target){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return ans;
}
let num2=[1,2,3,6,11,11,12,15];
let target2=11;
console.log("First Occurence of " + target2 + " is " , firstOccTarget(num2,target2));


//SET IN JS
let sett=new Set([1,2,4,4,5,6]);
sett.add(21);
sett.add(3);
console.log(sett);


//Methods to check if a number is in set or not

console.log("checking if 30 is in set?" , sett.has(23));
console.log("check if 2 is in set", sett.has(2));

console.log("Size of set" , sett.size);
console.log(sett);

//to remove duplicates from the array

let num=[2,3,4,1,0,1,2,3,4,5,10];
let sett1=new Set([...num]);
console.log(sett1);
//let arrrr1=Array.from(sett1);
let sett2=new Set([...num]);
console.log({num,sett1,sett2});

//MAP IN JS
let mapp=new Map([
    ["name1","Rani"],
    ["name2","Teju"]
]);
map.set("name1","Rani");
map.set("name2","Teju");

console.log("checking `name1` is present or not?", map.has("name1"));
