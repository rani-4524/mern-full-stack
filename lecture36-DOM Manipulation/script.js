
console.log(window.document.body);
console.log(document.body);

console.log(document.body.childNodes);
console.log(document.body.children);


console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

// selectors in DOM - most commonly used selector

console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll(".first-div-child"));
console.log(document.querySelectorAll("#second-div"));
console.log(document.querySelectorAll("div.first-div"));
console.log(document.querySelectorAll("div#second-div"));

//Other specific selectors
//selects an element based on class name
console.log(document.getElementsByClassName("first-div-child"));

//selects an element based on Id
console.log(document.getElementById("second-div-child"));

//selects an element based on tag name
console.log(document.getElementsByTagName("div"));

const para=document.querySelector("p");
console.log(para);
para.style.color="blue";
para.style.backgroundColor="yellow";
para.style.border="2px solid blue";
para.style.borderRadius="5px";

//setting ,editing and deleting an attribute value 
const imageElement=document.querySelector("img");

//updating the value of existing attribute
imageElement.setAttribute("src" , "image 2.png");
imageElement.style.height="250px";
imageElement.style.width="250px";
imageElement.style.border="2px solid red";
imageElement.style.borderRadius ="20px";



//creating a new data-attribute
const divElement=document.querySelector("div");
divElement.setAttribute("data-first", 2);

//deleting an attribute ,by setting its value to null
divElement.setAttribute("data-first", null);

console.log(para.innerHTML);
console.log(para.textContent);
para.innerHTML="<strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, id.</strong>";

console.log(para.innerHTML);
console.log(para.textContent);


const secondPara=document.querySelector(".second-para");

console.log(secondPara.textContent);
secondPara.textContent="This is a new content";


// write the difference between innerHTML & textContent


// className property

// const divlement=document.querySelector(".class-1");
//deleting class
// const classes=divlement.className.split(" ");
// classes.splice(2,1);
// divlement.className=classes.join(" ");

const divelmentCopy=document.querySelector(".class-1");
console.log(divelmentCopy.classList);


//add class into existing class
divelmentCopy.classList.add("class-5");

//remove class from existing class
divelmentCopy.classList.remove("class-1");

//toggle a class
divelmentCopy.classList.toggle("active");

// check class is present or not
console.log(divelmentCopy.classList.contains("class-2"));

// replace class with another class
divelmentCopy.classList.replace("class-2" , "class2");
console.log(divelmentCopy.classList);


//H.W difference  classList vs className

//creating an element 