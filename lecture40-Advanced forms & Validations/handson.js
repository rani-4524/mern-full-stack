/* 1️⃣ Extract All Input Values

Create a form with:

username (text)

password

email
When the user clicks Submit, print all values in console as an object: */



/* Make 5 checkboxes (Hobbies).
On button click, show:

You selected 3 hobbies. */

/* 4 radio buttons (colors).
On click, print:

You selected: Blue */

/* Multi-Select Drop-down to Array

Make a <select multiple size=5> of fruits.
On button click, store all selected fruits in an array:

["Apple", "Grapes", "Banana"] */

const form = document.querySelector(".myform");
const submitBtn = document.querySelector("#submit-btn");
submitBtn.disabled=true;

const allColors = document.querySelectorAll("[name=color]");
allColors.forEach((color)=>{
    color.addEventListener('change', ()=>{
        submitBtn.disabled = false;
    });
});

submitBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    const users ={};

    // only single input element has .value
    users.username = document.querySelector("[type=text]").value;
    users.password = document.querySelector("[type=password]").value;
    users.email = document.querySelector("[type=email]").value;

    // querySelectorAll() returns a nodelist (like array)  & nodelist doesnt have .value 
    const hobbies = document.querySelectorAll("[type=checkbox]:checked");

    // using map method 
    users.hobby = Array.from(hobbies).map((h) =>h.value);
    let count = hobbies.length;
    users.hobbyCount = count;

    // using forEach method
    // const hobbyValues = [];
    // hobbies.forEach((hobby)=>{
    //     hobbyValues.push(hobby.value);
    // });
    // users.hobby=hobbyValues;
    
   
    const selectedColor = document.querySelector("[name=color]:checked")?.value;
    users.color = selectedColor;

    const fruits = document.querySelector("[multiple]").options;
    users.selectedFruits = Array.from(fruits)
                .filter((fruit)=>fruit.selected)
                .map((fruit)=>fruit.value);

    console.log(users);


// FileReader is a JavaScript object that allows the browser 
// to read files selected by the user using <input type="file">.
// 
// Without FileReader, the browser does NOT get access to the 
// real file path inside your computer (for security reasons).
// 
// FileReader converts the file into a format the browser can use 
// like dataURL (for images) or text (for txt files) so we can 
// preview or process the file inside the browser.

    /*  1. Browser can only read files you select
        2. FileReader converts selected files into usable data
        3. dataURL lets browser preview files (images, videos, audio) */
});
