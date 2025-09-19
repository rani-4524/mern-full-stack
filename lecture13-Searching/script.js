//question: find the square root of a number in O(logN) T.C


let N=36;
function squareRoot(N){
    let low=0;
    let high=N;

    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);

        if(mid*mid==N){
            return mid;
        }
        else if(mid*mid>N){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return -1;
}

console.log("Square Root of " + N + " is " + squareRoot(N));


// Question: find a target element in a sorted array and print its index
//A=[1,2,3,6,7,9,11,15]
//target=11


function findTargetElement(arr,target){
    let low=0;
    let high=arr.length-1;

    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);

        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]>target){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return -1;
}

let arr=[1,2,3,6,7,9,11,15];
let target = 11;

console.log("Target Element" ,findTargetElement(arr,target));



//find first occurence of target element
//A=[1,2,6,6,11,11,11,15] & target=6

function firstOccuranceTarget(arr,target){
    let low=0;
    let high=arr.length-1;

    let ans=-1;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);

        if(arr[mid]==target){
           ans=mid;
           high=mid-1;
        }
        else if(arr[mid]>target){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
       
    }
    return ans;
   
}

let arr1=[1,2,6,6,11,11,11,15];
let target1=6;

console.log(firstOccuranceTarget(arr1,target1));


// find the lower bound

function lowerBound(arr,target){
    let low=0;
    let high = arr.length-1;
    let index=arr.length;

    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);

        if(arr[mid]>=target){
            index=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return index;
}

let arr2=[1,2,3,4,5];
let targe2=2;

console.log("Lower Bound is:", lowerBound(arr2,targe2));

// find the upper bound
function upperBound(arr,target){
    let low=0;
    let high = arr.length-1;
    let index=arr.length;

    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);

        if(arr[mid]>target){
            index=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return index;
}

let arr3=[1,2,3,4,5];
let targe3=2;

console.log("Upper Bound is :" ,upperBound(arr3,targe3));


// SET in JS

let set = new Set([1,2,4,4,5,6]);
set.add(21);
set.add(3);
console.log(set);

//methods to check if a number is in set or not 

console.log("checking if 30 is in set?" , set.has(23));
console.log("checking if 30 is in set?" , set.has(2));

console.log("Size of set" ,set.size);

console.log(set);

//to remove the element from the set
console.log(set.delete(4),set);


//remove duplicates from the array

let array=[2,3,4,1,0,1,2,3,4,5,10];

let set1=new Set([...array]); //spread operator (...)
let arr4=[...set1];
let arr5=Array.from(set1);

let set2=new Set([...array]);
let arr6=[...set2];
// set=new Set(arr3);
console.log({array,arr4,arr5,arr6});

//MAP in JS

let map=new Map([
    ["name1", "Sultan"],
    ["name2", "Rani"]
]);

map.set("name1", "Sultan");
map.set("name2","Rani");
//checking if a key is present or not

console.log("checking `name1` is present or not?", map.has("name1"));

//getting the value of a specific key

console.log("value of `name2` key :", map.get("name2"));

//deleting a key in map

console.log("Deleting  `name4` :",map.delete("name44"));

// using for of loop
for(let i of map){
    console.log("key:" +i[0],",value:"+i[1]);
}

const mapArr=[...map];
console.log({mapArr});

// question : find intersection & union

let arrr=[1,2,4,5,6] , arrr1=[2,5,6,3,1,3];
const unionArr=new Set([...arrr, ...arrr1]);
let arrr2=[...unionArr];
console.log({unionArr});

//intersection
let intersection=[];
let arrrSet=new Set(arrr);

for(let i=0;i<arrr1.length;i++){
    if(arrrSet.has(arrr1[i]))
        intersection.push(arrr1[i]);
}

intersection=[...new Set(intersection)];

/* Another way to execute above line 
let intersectionSet=new Set(intersection);
intersection=[...intersectionSet];
*/

console.log({intersection});