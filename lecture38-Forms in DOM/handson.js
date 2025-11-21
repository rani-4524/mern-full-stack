const  users=[];

const submitBtn = document.querySelector("button");

submitBtn.addEventListener('click' , (event)=>{
    event.preventDefault();
    const user ={};
    user.name = document.querySelector("input[type=text]").value;
    user.mobile = document.querySelector("input[type=number]").value;
    user.gender = document.querySelector("input[name=gender]:checked")?.value;
    user.consent = document.querySelector("input[type=checkbox]:checked")?.value;
    user.city = document.querySelector("#city")?.value;

    console.log(user);

    if(
        !user.name ||
        !user.mobile ||
        !user.gender ||
        !user.consent ||
        !user.city
    ){
    alert("please fill out all the fields");
    return;
}
    users.push(user);
    console.log(users);
});