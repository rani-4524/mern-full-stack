// creating an elelment

const h3Element=document.createElement("h3");
h3Element.textContent="Hi, I'm a H3 element";

const div1=document.querySelector("div");
div1.appendChild(h3Element);

// when we append the elements its always add in last 
// if we append dom elements repeat it becomes last child of child elements

// Events in DOM
const para1=document.querySelector("p");
para1.addEventListener("click" , (event) => { 
   para1Cliked(event);
});

function para1Cliked(event){
    h3Element.remove(); 
    console.log("you've clicked para",event.type);
}

//Mouse Over
para1.addEventListener("mouseover" , (event) =>{
    para1MouseOver(event);
});

function para1MouseOver(event){
    h3Element.style.backgroundColor="yellow";
    h3Element.style.fontSize="2rem";
    console.log("You've hover the para",event.type);
}

// Mouse up
para1.addEventListener("mouseup" , (event) => { 
     h3Element.style.backgroundColor="green";
    h3Element.style.border="2px solid red";
    h3Element.style.color="black";
});


// Mouse Down
para1.addEventListener("mousedown" , (event) => { 
    h3Element.style.backgroundColor="aqua";
});


// Key Down
document.addEventListener("keydown" , (event) => { 
    h3Element.style.backgroundColor="pink";
    console.log("event type:" + event.key);
});


