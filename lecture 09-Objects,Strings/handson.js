console.log("Handson file");

const obj1={
    property1:"Property One",
    property2:"Property Two",
    1:"One"
}

console.log([obj1["Property3"]]); //undefined
console.log(obj1[obj1.Property3]);  //undefined
console.log(obj1[1]);  //One

//creating a new property
obj1.property3="property Three";
console.log({obj1});

//object keys can have array as values also

obj1.arrayProperty=[1,2,3,4,5];
for(let i of obj1.arrayProperty)
    console.log(i);

//another way of creating an object
const newObj1=new Object();
newObj1.a="a";
newObj1.b="b";
newObj1.c="c";
newObj1.d="d";

console.log({newObj1});

/* ======================STRINGS====================== */

let strr='a';
console.log(typeof str); //string

//strings using single quotes --> ''
strr='abc';
console.log(typeof strr); //string

//strings using double quotes --> " "
strr="abc";
console.log(typeof strr);


strr=['a','b','c'];
console.log(typeof strr); //object
console.log(typeof strr[0]); //string

//strings using backticks

strr=`abc`;
console.log(typeof strr); //string

//case when we must use double quotes
strr="Hi I'm Rani";
console.log(strr); //Hi I'm Rani

//case when we must use single quotes
strr='Hi you must take "javascript" classes';
console.log(strr); //Hi you must take "javascript" classes

//case when we must use back ticks
strr=`Hi I'm Rani and you must take "Javascript" classes`;
console.log(strr); //Hi I'm Rani and you must take "Javascript" classes

//some more features of back ticks- we can insert any variable inside backticks
let studentName="Teju";
strr=`Hi I'm ${studentName} and you must take "Javascript" classes`;
console.log(strr);

/*=================SOME METHODS IN STRING======================== */
// strr="  We're going, to see some methods, of strings W  ";

//includes function--> returns if the given string is present in string or not
//includes function giving output either true or false
console.log(strr.includes('going')); //true
console.log(strr.includes('school')); //false

//replace function-->replaces only the first occurence of 'W' with 'X'
console.log(strr.replace('W' ,'X')); // replace the first occurence of W with X
console.log(strr); //replace() doesn't changes the original string

//replaceAll function --> replaces all 'W' with 'X'
console.log(strr.replaceAll("W","X")); //replaces all W with X
console.log({strr}); //replaceAll() also dorsn't changes the original string

//trim() --> removes all leading and trailing spaces
console.log(strr);
console.log(strr.trim());
console.log({strr});

//substring()--> gives substring ->doesn't changes the original string
console.log(strr.substring(3,9)); //e're g
console.log(strr.substring(5)); //re going, to see some methods, of strings W
console.log(strr.substring("5")); //e're going, to see some methods, of strings W
console.log(strr.substring(-3,-100));  //gives empty string
console.log(strr.substring(-3,10000)); //  We're going, to see some methods, of strings W

//slice() --> almost same as substring ,but changes (-)ve differently
// strr="  We're going, to see some methods, of strings W  ";
console.log(strr.slice(3)); //gives substring from index 3 to till end
console.log(strr.slice(3,5)); //gives substring from index 3 to index 4
console.log(strr.slice(-3)); //gives last three elements
console.log(strr.slice());  //
console.log(strr.slice(-100)); //gives all elements in case the number is greater than the length of the string
console.log(strr.slice(-3,0)); //gives an empty string as end is smaller than start

//split()--> splits the string based on given character
strr="  We're going, to see some methods, of strings W  ";
console.log(strr.split(","));
const strr1="Hello welcome to MERN stack course";
console.log(strr1.split(" "));

//toUpperCase()
console.log(strr1.toUpperCase());

/*=========WRAPPER OBJECTS=========== */
 const string1="Rani";
 const number1=70;
 const bool = false;
 const object1={
    name:"Rani"
 };
 console.log(string1.__proto__);
 console.log(number1.__proto__);
 console.log(bool.__proto__);
 console.log(object1.__proto__);
 console.log(Number("123"));
 console.log(object1.name);

 /*============Spread & Rest Operator============== */

 //Rest Operator ->... ->combines all the arguments and transforms them into an array
 function addStudent1(students,...studentName){
    console.log(studentName);
    for(let student of studentName)
        students.push(student);

    console.log({students});
 }
 const student=["Rani","Teju","Prem"];
 addStudent1(student,"Abhi","Aman");
 

 //destructuring
 const [hi, ...bye]=["Hi","Bye","Byee","Byeee"];
 console.log({hi, ...bye});

 //spread Operator
 const arrr=[1,2,3,4,6];
 console.log({arrr});
 console.log("Spreaded Array: ",[1, ...arrr ,5,678,68]); 

 //HW : Use spread operators with OBJECTS

 const employess={
    EmpName:"Rani",
    EmpAge:22,
    EmpCity:"Pune"
 };

 console.log({...employess});
 console.log("Spreaded Object: ", {EmpId:1, ...employess , EmpDept:"IT"});