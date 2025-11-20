// Print all children of body except text nodes
console.log(document.body.children);
// childNodes gives text nodes also
console.log(document.body.childNodes);
// Select all <li> inside a <ul> with class .menu using 3 different selectors.

const ulEle = document.querySelector(".menu");
// const ulEle = document.getElementsByClassName("menu");
// const ulEle = document.getElementsByTagName("ul");
console.log(ulEle.children);


// Select the third <p> and change its background to lightgreen using two different methods:
// querySelectorAll
// getElementsByTagName

const thirdPara = document.querySelector(".third-para");
thirdPara.style.backgroundColor = "lightgreen";


// Explain why the values differ.
const div = document.querySelector(".box");
console.log(div.childNodes.length); // because consider white spaces also
console.log(div.children.length); //it consider only children


//  /* From an element with class .box, print:

// .parentElement
console.log(div.parentElement);

// .firstElementChild
console.log(div.firstElementChild);

// .lastElementChild
console.log(div.lastElementChild);

// .nextElementSibling
console.log(div.nextElementSibling);

// .previousElementSibling
console.log(div.previousElementSibling);

// Change the src of every <img> on the page to "dummy.png".

const img = document.querySelector("img");
img.setAttribute("src" , "dummy.png");
console.log(img);


// Add a data-index attribute to every <div> like:
const divEle = document.querySelectorAll("div");
divEle.forEach((div, index)=>{
   div.setAttribute("data-index" ,index+1);
});
console.log(divEle);

// Remove all style attributes from every element on the page.
const style = document.querySelectorAll("[style]");
style.forEach((elem)=>{
    elem.removeAttribute("style");
});
console.log(style.length);

// Toggle a class "hidden" on a paragraph when a button is clicked.

const para = document.querySelector(".first-para");
const btn = document.querySelector("#btn");
btn.addEventListener('click' ,(e)=>{
    para.classList.toggle("hidden");
});


const createDivEle = document.querySelector(".mybox");
const textContentBtn = document.querySelector(".btn1");
const innerHTMLBtn = document.querySelector(".btn2");

textContentBtn.addEventListener('click',(e)=>{
    createDivEle.textContent='<strong>Hello</strong>';
})

innerHTMLBtn.addEventListener('click',(e)=>{
 createDivEle.innerHTML ='<strong>Hello</strong>';
 })


