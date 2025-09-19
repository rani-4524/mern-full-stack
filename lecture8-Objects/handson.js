console.log("Hnadson file");

//create variables to store name,age,class,address of student
 const studentName="Rani";
 const studentAge=22;
 const studentClass=12;
 const studentAddress="Pune";

 //creation of object

 const studentInfoObj={
    studentName:"Teja",
    studentAge: 21,
    studentClass:10,
    studentAddress:"Beed"
 };

 //create variables to store name ,age,address of parent

 const parentName1="Rutuja";
 const parentAge1=34;
 const parentAddress1="Wagholi";

 //create object for the same above statement
 const parentObj1={
    name:"Riya",
    age:35,
    address:"Baner"
 };

 //Access properties in object
 console.log("Student's name: ",studentInfoObj.studentName);
 console.log("Student's name: ", studentInfoObj["studentName"]);
 const studentNameProperty1="firstName";
 console.log("Student's name: ",studentInfoObj[studentNameProperty1]);

 //updating the value of an object
 studentInfoObj.studentName="Rani";
 console.log("Student's name: " ,studentInfoObj.studentName );

 //add any property to an object
 parentObj1.gender="female";
 parentObj1.standard=12;

 console.log(parentObj1);

 //delete any property from object
 delete parentObj1.standard;
 console.log("Parent Obj: ", parentObj1);

 //create a person object with name , age and city properties.
 //Updating the city,add hobby property and print the age of the person

 const personInfoObj={
    name:"Raj",
    age:22,
    city:"Satara"
 };

 personInfoObj.city="Solapur";
 personInfoObj.hobby="Playing";
 console.log("Age of ",personInfoObj.name, " is" ,personInfoObj.age);
 console.log("Details of Person: ",personInfoObj);

 //all properties on left of dot(.) must not be undefined
 if(personInfoObj && personInfoObj.address)
    console.log(personInfoObj.address.firstline);

 //nested object
 const employeeInfoObj={
    name:"John",
    company:"Amazon",
    salary:"50LPA",
    address:{
        addressLine1:"Radha Chowk",
        addressLine2:"Baner",
        houseNumber:75,
        city:"Pune"
    }
 }
 console.log("Details of Employe: " ,employeeInfoObj);
 console.log("Address of ",employeeInfoObj.name," is ",employeeInfoObj.address);
 console.log("City where ", employeeInfoObj.name," is living " ,employeeInfoObj.address.city);

 //Arrays of Objects

 const studentObjArray=[
    studentObj,{
        name:"Pulkit",
        age:25,
        address:"Nashik",
        standard:9
    }
 ];
 console.log(studentObjArray);


 let str="rani";

 function reverseString(str){
    for(let i=0;i<str.length;i++){
        
    }
    return str;
 }
 console.log(reverseString(str));