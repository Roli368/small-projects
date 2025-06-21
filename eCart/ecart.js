document.addEventListener("DOMContentLoaded",()=>{
    const products= [
        {id:1,name:"Crispy Veg Burger", price: 59 ,image:"https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503063106939100_482x264jpg"},

        {id:2,name:"Korean Spicy Paneer Burger" , price: 209,image:"https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503145526913374_482x264jpg"},

        {id:3,name:"Cruncy Veg Taco" ,price: 94, image:"https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503064541737708_482x264jpg"},

         {id:4,name:"Fixed Thali" ,price: 200, image:"https://b.zmtcdn.com/data/dish_photos/75c/2f1904530f73da984bc3bfbe54a8075c.png?fit=around|130:130&crop=130:130;*,*"},

          {id:5,name:"Italian Pizza" ,price: 204, image:"https://b.zmtcdn.com/data/dish_photos/8f6/28064eb1b3656db16a4f6a989aeff8f6.jpeg?fit=around|130:130&crop=130:130;*,*"},

         {id:6,name:"Masala Bistro" ,price: 305, image:"https://b.zmtcdn.com/data/pictures/9/20171939/c00a992b780f6db5dd98bea53e4f956f_o2_featured_v2.jpg"}
    ];
const cart=[ ];

const productList=document.getElementById("product-list");

const cartitems=document.getElementById("cart-items");
const emptyCartMsg=document.getElementById("empty-cart");
const cartTotalMsg=document.getElementById("card-total");
const totalPriceDisplay=document.getElementById("total-price");
const checkOutBtn=document.getElementById("checkout-btn");

products.forEach(product => { 
    const productDiv= document.createElement('div') 
    productDiv.classList.add('product')
    productDiv.innerHTML=`
       
         <h4>${product.name}
        <img src="${product.image}" width="152" height="198">
        <p>Price: ₹${product.price}</p>
    
    <button data-id="${product.id}"> Add to Cart</button>`;
    productList.appendChild(productDiv); 
     
})
productList.addEventListener("click",(e)=>{
    if(e.target.tagName==='BUTTON'){
        console.log("clicked")
    const productId =parseInt( e.target.getAttribute('data-id'));
    const product= products.find(p=> p.id ===productId)
    addToCart(product)
    }
});
function addToCart(product){
    const existingItem= cart.find(item=>item.id===product.id);
    if(existingItem){
        existingItem.quantity+=1;
    }else{
        cart.push({...product,quantity:1})
    }
    
   renderCart();
}
function renderCart(){
   cartitems.innerText="";
   let totalPrice=0;
   if(cart.length>0){
emptyCartMsg.classList.add('hidden')
cartTotalMsg.classList.remove('hidden');

cart.forEach((item,index)=>{
    const itemTotal= item.price*item.quantity;
    totalPrice+=itemTotal
const cartItem=  document.createElement('div');

cartItem.innerHTML=`${item.name}-₹${item.price.toFixed(2)}*${item.quantity}=₹${itemTotal.toFixed(2)}


  <button class="delete-btn">Delete</button>`;
  cartItem.querySelector(".delete-btn").addEventListener("click", () => {
    cart.splice(index,1);
    renderCart()
  });
   
cartitems.appendChild(cartItem);

totalPriceDisplay.textContent=`₹${totalPrice.toFixed(2)}`
});
   }else{

    emptyCartMsg.classList.remove("hidden");
    totalPriceDisplay.textContent=`₹0.00`; 
   }
}
checkOutBtn.addEventListener('click',()=>{
    cart.length=0
    alert("Enjoy! Your Order is on the Way")
    renderCart()
})
});