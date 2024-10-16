import { useCart } from "../context/cartContext";

export const CalculateTotalPrice = ()=>{
    const {cartProduct}= useCart();
    const {cart}=cartProduct;
    var cartItems = cart.length;
    var deliveryCharge = 19;
    var itemPrice = 0;
    for(var i = 0; i<cartItems;i++){
        itemPrice = itemPrice + cart[i].price;
    }
    var gst = (itemPrice)*8/100;
    gst = Number(gst.toFixed(2));
    var totalPrice = itemPrice + gst + deliveryCharge;

    return {cartItems,deliveryCharge,totalPrice,itemPrice,gst};
}