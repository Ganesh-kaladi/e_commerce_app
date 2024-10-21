import { useCart } from "../../context/cartContext";

export const CartCard = ({cart})=>{
    const {dispatch} = useCart();
    const {images,title,price,id} = cart;
    const removeFromCart = (id)=>{
        dispatch({
            type:'REMOVE_FROM_CART_LIST',
            payload:{id}
        })
    }
    return(
        <section className="flex mb-8 bg-slate-50 min-w-[600px] max-w-[600px] rounded-r-md rounded-l-md min-h-[200px] max-h-[200px]">
            <div>
                <img src={images[2]} alt="" className="min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px] rounded-l-md" />
            </div>
            <div className="flex flex-col justify-evenly pl-4">
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <div>
                    <span>Quantity :</span>
                    <button>-</button>
                    <span>count</span>
                    <button>+</button>
                </div>
                <div>
                    <p>Rs. <span className="font-semibold">{price} </span>/-</p>
                </div>
                <div className="flex gap-4">
                    <button onClick={()=>removeFromCart(id)} className=" bg-blue-300 px-2 py-1 rounded-md font-medium">remove from cart</button>
                    <button className="bg-blue-300 px-2 py-1 rounded-md font-medium">add to wishlist</button>
                </div>
            </div>
        </section>
    )
}