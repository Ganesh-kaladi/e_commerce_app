import { useCart } from "../../context/cartContext";
import { findCartProductInFavPage } from "../../utiles/findCartProductInFavPage";
import { useNavigate } from "react-router-dom";

export const Favoritecomponent = ({favItem})=>{
    const {dispatch,cartProduct} = useCart();
    const {cart} = cartProduct;
    const navigate = useNavigate();
    
    const addToCartFromFavList = (favItem)=>{
        !isFindCartProductInFavPage ? dispatch({
            type:'ADD_TO_CART_FROM_FAV_LIST',
            payload:{favItem}
        }) : navigate('/cart')
    }
    const removeFromFavList = (id)=>{
        dispatch({
            type:'REMOVE_FROM_FAV_LIST',
            payload:{id}
        })
    }
    const isFindCartProductInFavPage = findCartProductInFavPage(cart,favItem);
    console.log(isFindCartProductInFavPage);
    return(
        <section className="flex mb-8 bg-slate-50 min-w-[600px] max-w-[600px] rounded-r-md rounded-l-md">
            <div>
                <img src={favItem.images[2]} alt="" className="min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px] rounded-l-md" />
            </div>
            <div className="flex flex-col justify-evenly pl-4">
                <div>
                    <h3 className="text-xl font-semibold">{favItem.title}</h3>
                </div>
                <div>
                    <p>Rs. <span className="font-semibold">{favItem.price} </span>/-</p>
                </div>
                <div className="flex gap-4">
                    <button onClick={()=>addToCartFromFavList(favItem)} className="bg-blue-300 px-2 py-1 rounded-md font-medium">
                        {
                            !isFindCartProductInFavPage ? 'add to cart': 'go to cart'
                        }
                    </button>
                    <button onClick={()=>removeFromFavList(favItem.id)} className="bg-blue-300 px-2 py-1 rounded-md font-medium">remove from favorite</button>
                </div>
            </div>
        </section>
    )
}