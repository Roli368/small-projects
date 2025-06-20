document.addEventListener("DOMContentLoaded",()=>{
    const products= [
        {id:1, name:"product 1",price: 34},
        {id:2, name:"product 2",price: 14},
        {id:3, name:"product 3",price: 94}
    ];
const cart=[];

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
    <span>${product.name}-$${product.price.toFixed(2)}</span>
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
    cart.push(product);  
   renderCart()
}
function renderCart(){
   cartitems.innerText="";
   let totalPrice=0
   if(cart.length>0){
emptyCartMsg.classList.add('hidden')
cartTotalMsg.classList.remove('hidden')
cart.forEach((item,index)=>{
    totalPrice+=item.price
const cartItem=  document.createElement('div')
cartItem.innerHTML=`${item.name}-$${item.price.toFixed(2)}`
cartitems.appendChild(cartItem);
totalPriceDisplay.textContent=`${totalPrice.toFixed(2)}`
});
   }else{
    emptyCartMsg.classList.remove("hidden");
    totalPriceDisplay.textContent=`$0.00`
    
   }
}
checkOutBtn.addEventListener('click',()=>{
    cart.length=0
    alert("Checkout Successfully")
    renderCart()
})
})