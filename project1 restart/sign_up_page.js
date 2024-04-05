let form =document.getElementById("form");
let email=document.getElementById("email");
let pass=document.getElementById("pass");


form.addEventListener("submit",function(e){
    e.preventDefault();
    let userdata={
        email:email.value,
        pass:pass.value
    };
    localStorage.setItem("userdata",JSON.stringify(userdata));
    
})