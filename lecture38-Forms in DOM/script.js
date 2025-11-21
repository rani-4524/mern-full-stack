const outerdivElement=document.querySelector(".outer-div");
const innerdivElement=document.querySelector(".inner-div");
const h1Element=document.querySelector("h1");

outerdivElement.addEventListener("click" , (event)=>{
    outerdivElement.style.backgroundColor="blue";
    console.log("you click the div element " ,event);

})

innerdivElement.addEventListener("click" , (event)=>{
    // event.stopPropagation();
    innerdivElement.style.backgroundColor="pink";
    console.log("you click the inner div element " ,event);
})

h1Element.addEventListener("click" , (event)=>{
    h1Element.style.backgroundColor="yellow";
    console.log("you click the h1 element " ,event);
})


// Phases in javascript
/* 
 1. Capturing phase:- event propogate from parent to child (we cant stop propagation in this phase)
                    for capturing we have to pass true in function otherwise by default it is false

 2. Target phase :- target phase target the element 

 3. Bubbling phase :- bubbling phase is by default i.e from child to parent
                    (we can stop it from propagation)
 */