/* 4. reduce() -->HOFs */

let arr=[2,5,3,10,34];
let sum=arr.reduce((accumalator,val,index,array)=>{
    accumalator+=val;
    return accumalator;

},0);
console.log({sum});

//find the count of even numbers

const count=arr.reduce((accumalator,val,index,array)=>{
    accumalator+=(val%2==0);
    return accumalator;
},0);
console.log({count});


//find the frequency of each element using normal function

let fruits=["apple","guava","Kiwi","guava","kiwi","Apple","Guava"];
function frequency(arr){
    let freq={};  
    for(let i in arr){
        freq[arr[i].toLowerCase()]=(freq[arr[i].toLowerCase()]||0)+1;
    }
    return freq;
}
console.log(frequency(fruits));


//find the frequency of each element Using reduce() function

let ans=fruits.reduce((accumalator,val,index,array)=>{
    accumalator[val.toLowerCase()]=(accumalator[val.toLowerCase()]||0)+1;
    return accumalator;
},{});

console.log(ans);

/* 5. find() 
   -returns a value
   -returns the first element that matches the condition
 */

   let findKiwi=fruits.find((val,index,array)=>val.toLowerCase()=="kiwi");
   console.log(findKiwi);

   /* Given an array of object ,containing details of users ,
      console the name of first user aged above 30 */

   const users=[
    {name:"Rani",age:40},
    {name:"Rutja",age:30},
    {name:"Teju",age:28},
    {name:"Radha",age:35},
   ];

   let result=users.find((val,index,array)=>val.age>30);
   if(result){
     console.log(result.name);
   }
  

   /* print the name and age of each user */
    users.forEach((value)=>{
        console.log(value.name+" " + value.age);
    });
   

    /* function to create an array of names from above users */
    const user=[
    {name:"Rani",age:25,isActive:true},
    {name:"Rutja",age:30,isActive:false},
    {name:"Teju",age:22,isActive:true},
    {name:"Radha",age:28,isActive:false},
    {name:"Ethan",age:35,isActive:true},
   ];

   let ans1=user.map((val)=>{
        return val.name;
    });
    console.log({ans1});

    /* function to display all the active users from  */
    const activeUser=user.filter((value)=>{
        return value.isActive;
    })
    console.log(activeUser);

    /* function to find the sum of age for all users below 30 */

    let summ=user.reduce((accumalator,val,index,array)=>{
    if(val.age<30)
    accumalator+=val.age;
    return accumalator;

    },0);
    console.log({summ});

    /* function to get the names of all active users */
    //using filter method
    let anss=user.filter((value)=>value.isActive).map((value)=>value.name);
    console.log(anss);
    
    //using reduce() method
    let ansss=user.reduce((accumalator,val)=>{
        if(val.isActive) accumalator.push(val.name);
        return accumalator;
    },[]);
    console.log(ansss)
    

    /* ======================Passing a function as an argument & returning a function================== */
    function calculator(a,b,operation){
        return operation(a,b);
    }

    function multiply(a,b){
        return a*b;
    }
    
    function add(a,b){
        return a+b;
    }

    function subtract(a,b){
        return a-b;
    }

    let sum23=calculator(2,3,add);
    console.log(sum23);


/* =====================================Error Handling=============================== */

/* 
   once--> restrict a function to be called more than once

   memoizaion-->if a function is called 
 */
    