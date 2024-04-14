let form = document.querySelector("form");
let username = document.getElementById("username");
let pass = document.getElementById("pass");
let btn=document.querySelector("button");



btn.addEventListener("click",function(e){
    handleFormSubmit(e);
})

let data;

function loadData() {
    let savedData = JSON.parse(localStorage.getItem("data"));
    if (savedData) {
        data = savedData;
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    let name = username.value; 
    let password = pass.value;

    let user = data.filter(function(ele) {
        return ele.user === name && ele.pass === password;
    });

    if (user) {
        alert("Logged in successfully");
        window.location.href = "cart.html";
    } else {
        alert("Wrong credentials!!");
    }
}

form.addEventListener("submit", function(e) {
    handleFormSubmit(e);
});

loadData();
