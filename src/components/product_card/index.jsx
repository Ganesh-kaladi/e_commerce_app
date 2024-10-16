import { useCart } from "../../context/cartContext";
import { findCartProduct } from "../../utiles/findCartProduct";
import { useNavigate } from "react-router-dom";

export const ProductCardComponent = ({ product }) => {
    const {dispatch,cartProduct} = useCart();
    const {cart}=cartProduct;
    const navigate = useNavigate();
    const { title, price, images } = product;

    const addToCartList = (product)=>{
        !isFindCartProduct ? dispatch({
            type:'ADD_TO_CART',
            payload:{product}
        }):navigate('cart');
    }
    const addToFavList = ()=>{
        dispatch({
            type:'ADD_TO_FAV_LIST',
            payload:{product}
        })
    }
    var isFindCartProduct = findCartProduct(cart, product) ;
    
    return (
        <section className=" flex flex-col gap-6 m-2 bg-slate-50 my-4 min-w-[250px] max-w-[250px] rounded-xl px-2">
            <div className="basis-1/4">
                <div className="m-2">
                    <h4 className="text-xl font-semibold text-wrap border-b-2 border-neutral-200">{title}</h4>
                </div>
            </div>
            <div className="px-0 basis-1/2">
                <img src={images[2]} alt='' className="w-[250px] h-[250px] rounded-lg  " />
            </div>
            <div className="flex basis-1/5">
                <p>price :</p>
                <span className="font-semibold">Rs. {price}/-</span>
            </div>
            <div className="flex basis-1/5">
                <p>rating :</p>
                <span className="font-semibold">4.5</span>
            </div>
            <div className="basis-1/5">
                <button onClick={()=>addToCartList(product)}>
                    <span>
                        {
                            !isFindCartProduct ? 'add to ' : 'go to '
                        }
                    </span>
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                </button>
                <button onClick={()=>addToFavList(product)}>
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                </button>
            </div>
        </section>
    )
}