let isAuth=localStorage.getItem("isAuth") || "Not-Authenticated";
if(isAuth!=="Authenticated"){
    window.location.href="./login.html"
}

function delfromcard(obj){
   console.log(obj)
}


let productsDiv=document.getElementById("products");
let maindata=JSON.parse(localStorage.getItem("cartDetails")) || [];
displayproducts(maindata);
function displayproducts(data){
    data.forEach((obj)=>{
     
     let div=document.createElement("div");
     div.className="containers"; 
     let card=document.createElement("div");
     card.className="card";
     let img=document.createElement("img");
     img.src=obj.img;
     img.className="image_product";
 
    
     let company_name=document.createElement("p")
     company_name.innerText=obj.company_name;
     company_name.className="light";
     let name=document.createElement("p");
     name.className="product_name";
     name.innerText=obj.vegetable_name;
    ;
 
 
     let new_price=document.createElement("h3");
     new_price.innerText=obj.new_price;
     let old_price=document.createElement("p");
     old_price.className="light";
     old_price.innerText=obj.old_price;
     
     let addbtn=document.createElement("button");
     addbtn.className="add";
     addbtn.innerText="Add";
     addbtn.onclick=function(){
         addtocard(obj);
     }
     let delbtn=document.createElement("button");
     delbtn.className="del";
     delbtn.innerText="del";
     delbtn.onclick=function(){
  
        delfromcard(obj);
    }
     
     card.append(img,company_name,name,new_price, old_price,addbtn,delbtn)
     div.append(card);
     productsDiv.appendChild(div);
    
    });
 }

