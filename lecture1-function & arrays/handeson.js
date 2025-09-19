console.log("hello");


// function creation and definition

function greet(){
    console.log("Hello World");
}
// calling or involking the function
greet ();

//Parametarized function 

function greetUser(Name,place){
    console.log(Name, "is from ",place);
}

greetUser("Rani","Pune");

// function to calculate the sum 

function sum(a,b){
    let sum=a+b;
    console.log("Sum of to Numbers is:" , sum);
}

sum(5,6);

//Nested function
//create  the function  to show personalDetails and take another function to calculate the age 
function personalDetails(name,birthYear){
      console.log("The name of Person is:", name);
      console.log("The age of Person is :", calculateAge(birthYear));
}
//function for calculate the age
function calculateAge(birthYear){
    return 2025-birthYear
}

personalDetails("Rani",2003);

//create  the function to find the square of number

function findSquare(num){
    return num*num;
}

console.log("The square of given number is :" ,findSquare(5));

// Array in JS
//declaration of array
let arr=["Rani",5,"Teju"];
//print the array
console.log("value at second index in given array:", arr[2]);
console.log("Given Array:", arr);

//Array uing for loop

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let i=0;i<arr.length;i++){
    console.log(i+1,arr[i]); // i+1 for indexing from 1
}

//Arrays using for in loop
for(let i in arr){
    console.log(arr[i]);
}

for(let i in arr){
    console.log(Number(i)+1,arr[i]); // for indexing from 1
}