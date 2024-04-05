let arr = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80"
];

let count = 0;
let forward_btn = document.getElementById("forward");
let backward_btn = document.getElementById("backward");
let image = document.querySelector(".slides > img");

// Set the initial image source
image.setAttribute("src", arr[count]);

forward_btn.addEventListener("click", function() {
    count++;
    if (count >= arr.length) {
        count = 0; // Reset count if it exceeds the array length
    }
    image.setAttribute("src", arr[count]);
});

backward_btn.addEventListener("click", function() {
    count--;
    if (count < 0) {
        count = arr.length - 1; // Set count to the last index if it goes below zero
    }
    image.setAttribute("src", arr[count]);
});




// opening neupass
const neupassDiv = document.getElementById("neupass");
neupassDiv.addEventListener("click", function() {
const href = neupassDiv.querySelector("a").href;
window.open(href, "_blank");
});





document.getElementById("AYURVEDA").addEventListener("click", function() {
    window.location.href = "./AYURVEDA.html"; 
});



document.getElementById("nonvg_buying").addEventListener("click", function() {
    window.location.href = "./Egg_Meat_page.html"; 
});


document.getElementById("Buy_more_save_more_page").addEventListener("click", function() {
    window.location.href = "./Buy_more_save_more_page.html"; 
});


document.getElementById("Deal_of_the_week_page").addEventListener("click", function() {
    window.location.href = "./Deal_of_the_week_page.html"; 
});


document.getElementById("Combo_store_page").addEventListener("click", function() {
    window.location.href = "./Combo_store_page.html"; 
});


document.getElementById("Exotic_fruit_and_vege_page").addEventListener("click", function() {
    window.location.href = "./Exotic_fruit_and_vege_page.html"; 
});


document.getElementById("Tea_page").addEventListener("click", function() {
    window.location.href = "./Tea_page.html"; 
});


document.getElementById("Ghee_page").addEventListener("click", function() {
    window.location.href = "./Ghee_page.html"; 
});


document.getElementById("Nandini_page").addEventListener("click", function() {
    window.location.href = "./Nandini_page.html"; 
});

document.getElementById("Fresh_Vegetable").addEventListener("click", function() {
    window.location.href = "./Fresh_Vegetable.html"; 
});



