let arr = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80"
];

let count = 0;
let image = document.querySelector(".slides > img");

function showNextImage() {
    count++;
    if (count >= arr.length) {
        count = 0; 
    }
    image.setAttribute("src", arr[count]);
}


image.setAttribute("src", arr[count]);
let intervalId = setInterval(showNextImage, 3000); 

image.addEventListener("mouseenter", function() {
    clearInterval(intervalId);
});


image.addEventListener("mouseleave", function() {
    intervalId = setInterval(showNextImage, 3000);
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
let overflow_vegecard=document.getElementById("overflow_vegecard");
let default_section=document.getElementById(" default_vegecard");


    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");
    const cardsContainer = document.querySelector(".cards_flex");
    leftButton.style.color="red";
    leftButton.addEventListener("click", function() {
       
        const cardWidth = cardsContainer.querySelector(".first_card").offsetWidth;
        const scrollAmount = cardWidth * 4;
        
       
        cardsContainer.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    rightButton.addEventListener("click", function() {
        
        const cardWidth = cardsContainer.querySelector(".first_card").offsetWidth;
        const scrollAmount = cardWidth * 4;

       
        cardsContainer.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: "smooth"
        });
    });



    