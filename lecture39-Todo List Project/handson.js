const addButton = document.querySelector(".add-btn");
const todoSection = document.querySelector("#todo-items");


addButton.addEventListener("click" , (e)=>{
    e.preventDefault();

    const todoElement = document.querySelector("#todo");
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    todoItem.innerHTML = `<p>${todoElement.value}</p>
                        <div class="todo-buttons">
                        <button id="edit-btn">Edit</button>
                        <button id="delete-btn">Delete</button>
                        </div>`;
    
    todoSection.appendChild(todoItem);

    // foe removing the added products
    const deleteBtn = todoItem.querySelector("#delete-btn");
    deleteBtn.onclick = () =>todoItem.remove();

    const editBtn = todoItem.querySelector("#edit-btn");
    editBtn.addEventListener("click" , ()=>{
        const paraTag = todoItem.querySelector("p");
        if(editBtn.textContent==="Save"){
            editBtn.textContent = "Edit";
            paraTag.style.display = "block";

            const inputElement = todoItem.querySelector("input");

            if(inputElement.value){
                paraTag.textContent =  inputElement.value;
            }
            inputElement.remove();
        }else{
            const todoButtons = todoItem.querySelector(".todo-buttons")
            editBtn.textContent = "Save";
            paraTag.style.display = "none";
            const inputElement = document.createElement("input");
            inputElement.value = paraTag.textContent.trim();

            todoItem.insertBefore(inputElement , todoButtons);
        }
    });
    todoElement.value="";
})