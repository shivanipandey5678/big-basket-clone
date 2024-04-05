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
    let saved_data=JSON.parse(localStorage.getItem("userdata"))
    if(userdata.email===saved_data.email&&userdata.pass===saved_data.pass){
        alert("auth login")
    }
})
