const users = [];

const submitBtn=document.querySelector("button");

submitBtn.addEventListener("click" , (event)=>{
    event.preventDefault();
    const user={};
    user.name=document.querySelector("input[type=text]").value;
    console.log(user.name)
    user.mobile = document.querySelector("input[type=number]").value;
    console.log(user.name);
    user.gender=document.querySelector("input[name=gender]:checked")?.value;
    console.log(user.gender);
    user.consent=document.querySelector("input[type=checkbox]:checked")?.value;
    console.log(user.consent)

    user.city=document.querySelector("#city")?.value;
    console.log(user.city);

    if (
        !user.name ||
        !user.mobile ||
        !user.gender ||
        !user.consent ||
        !user.city 
    )
  alert("please fill out all the fields");

    users.push(user);
    users.reset();
    console.log(users);

});

// homework== explore disabled button property
