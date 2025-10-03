/* 4. reduce()-->HOFs */
console.log("Handson file");

//Given an array of numbers ,find the sum of array
let arrr=[2,5,3,10,34];
let sum1=arrr.reduce((acc,val,index,array)=>{
    acc+=val;
    return acc;
},0);
console.log("Sum of all array is :",sum1);

//Given an array of numbers ,find the maximum element using reduce
let max=arrr.reduce((acc,val,index,array)=>{
    if(val>acc){
        return val;
    }
    else{
        return acc;
    } 
},arrr[0]);
console.log("Maximum number in array is:",max);

//Given an array of numbers, find the product of all elements using reduce
let prod=arrr.reduce((acc,val,index,array)=>{
    acc*=array[index];
    return acc;
},1);
console.log("Product of all elements is:",prod);

//Given an array of strins ,find the longest string using reduce()
let str=["Rani","Radha","Shourya","Vilas"];
let longestStr=str.reduce((acc,val,index,array)=>{
    if(val.length>acc.length){
        return val;
    }else{
        return acc;
    }
},"");
console.log("Longest String is:", longestStr);

//find the count of even numbers
const countt=arrr.reduce ((acc,val,index,array)=>{
    acc+=(val%2==0);
    return acc;
},0);
console.log("The count of even numbers is:",countt);

//find the frequency of each element using normal function
let fruitss=["apple","guava","Kiwi","guava","kiwi","Apple","Guava"];
function frequency(arr){
    let freq={};
    for(let i in arr){
        freq[arr[i].toLowerCase()]=(freq[arr[i].toLowerCase()]||0)+1;
    }
    return freq;
}

console.log("Frequency of each fruit :",frequency(fruitss));

//find the frequency of each element using reduce() function
let anss1=fruitss.reduce((acc,val,index,array)=>{
    acc[val.toLowerCase()]=(acc[val.toLowerCase()]||0)+1;
    return acc;
},{});
console.log("Frequency of each fruit :",anss1);

//given a string , find the frequency of each character using reduce
let strr="Programming";
let freq=strr.split("").reduce((acc,val,index,array)=>{
    acc[val]=(acc[val]||0)+1;
    return acc;
},{});
console.log("Frequency of each character is :", freq);

/* 5. find()
   -returns a value 
   -returns the first element that matches the condition
 */

   let findApple=fruitss.find((val,index,array)=>val.toLowerCase()=="Apple");
   console.log(findApple);

   /* Given an array of objets, containing details of users ,console the name of first user aged above 30 */

const userss=[
    {name:"John",age:30},
    {name:"aaryan",age:25},
    {name:"shourya",age:5},
    {name:"Rani",age:22}
];
let resultt =userss.find((val,index,array)=>val.age>30);
if(resultt){
    console.log("Name of User whose age is above 30:",resultt.name);
}

//Given an array of strings , find the first user whose name starts with "R"
let nameStartWithR=userss.find((val,index,array)=>val.name[0]=="R");
console.log("Name of user whose name starts with R is:",nameStartWithR);

//Given an array of strings , find the first string whose length>5
let length5=userss.find((val,index,array)=>val.name.length>5);
console.log("Length of users is:",length5);


 const user1=[
    {name:"Rani",age:25,isActive:true},
    {name:"Rutja",age:30,isActive:false},
    {name:"Teju",age:22,isActive:true},
    {name:"Radha",age:28,isActive:false},
    {name:"Ethan",age:35,isActive:true},
   ];
/* From an array of users (with name, age, isActive), get only the names of users older than 25.*/
   let names=user1.filter(val=>val.age<25).reduce((acc,val)=>{
    acc=val.name;
    return acc;
   },"");
   console.log("Name of User who is older than 25 is",names);

/* From the same array, get total age of all inactive users. */
   let inactiveUser=user1.filter(val=>!(val.isActive)).reduce((acc,val)=>
    {
        acc+=val.age;
        return acc;
   },0);

   console.log("Sum os total inactive users is:",inactiveUser);

//From the same array, get average age of all users using reduce(). */
    let averageAge=user1.reduce((acc,val)=>{
        acc+=val.age;
        return acc;
    },0);
    let total=averageAge/user1.length;
    console.log("Average age of all users is:", total);

    /* =======================Passing a function as an argument & returning a function================================== */

    function calculator(a,b,operation){
        return operation(a,b);
    }
    function addition(a,b){
        return a+b;
    }

    function subtraction(a,b){
        return a-b;
    }

    function multiplicaton(a,b){
        return a*b;
    }

    function division(a,b){
        return a/b;
    }

    let prod23=calculator(2,3,multiplicaton);
    console.log("Product of 2 & 3 is:", prod23);

    let div=calculator(15,5,division);
    console.log("Diviaion of 15 & 5 is:", div);

    let sum53=calculator(5,3,addition);
    console.log("Sum of 5 & 3 is:", sum53);

    let sub42=calculator(5,3,subtraction);
    console.log("subtraction of 5 & 3 is:", sub42);