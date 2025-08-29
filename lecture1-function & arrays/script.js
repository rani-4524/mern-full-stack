console.log("Hello World");
//function creation and defination
function greet(){
    console.log("Hello World");
    }
//calling OR involking
greet();
greet();
console.log("Bye World");
console.log("Bye World");
greet();
console.log("Bye World");
console.log("Bye World");
greet();
greet();

// parametraized functions

function greetUser(userName){
    console.log("Hello " + userName);
}

greetUser("Rani");


function greetUser1(userName,place){
    console.log("Hello " +userName ,"Welcome to our " +place);
    
}

greetUser1("Rahul","website");
greetUser1("Rani","App");


function sum(a,b){
    console.log(a+b);
}
sum(2,4);


//nested function

function personalDetails(name,birthYear){
    console.log("Name: "+name);
    console.log("Age:" +calculateAge(birthYear));

}

function calculateAge(birthYear){
    return 2025-birthYear;
}
personalDetails("Rani",2003);

function squared(number){
    return number*number;

}

console.log(squared(20));
console.log(squared(21));
console.log(squared(25));

/* Array */

const students=["Rani","Riya","Rutuja","Tejshree"];
console.log(students[1]);

// Arrays using for loop

for(let i=0;i<students.length;i++){

    console.log(students[i]);
}

for(let i=0;i<students.length;i++){
   console.log(i+1,students[i]);    
}

// Arrays using for in loop

// for(let i in students){
//     console.log(students[i]);
// }
// for(let i in students){
//     console.log(Number(i)+1,students[i]);
// }