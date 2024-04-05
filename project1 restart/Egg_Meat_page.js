let arr = [
    "https://www.bigbasket.com/media/uploads/banner_images/l1-certificate-top-300621.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/ZXPL8246-l1-fom-c-Fresho-Organic-ghee-1200x300-25-mar-24.jpg?tr=w-1920,q=80",
   
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




