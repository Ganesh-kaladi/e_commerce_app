import { Fragment } from "react"
import { Navcomponent } from "../../components/nav_component"
import { CartCard } from "../../components/cart_card_component"
import { useCart } from "../../context/cartContext"
import { PriceCard } from "../../components/price_component"

export const Cartpage = () => {
    const { cartProduct } = useCart();
    const { cart } = cartProduct;
    return (
        <Fragment>
            <Navcomponent />
            <main className="pt-20  flex justify-center">
                {
                    cart?.length === 0 ?
                        <div>
                            <div className="px-4 py-2 bg-slate-500 text-slate-50 font-medium w-auto rounded-lg">Cart is Empty</div>
                        </div> :
                        <>
                            <div className="grid  justify-center ">
                                {
                                    cart?.length > 0 && cart.map(p => {
                                        return (
                                            <CartCard key={cart.id} cart={p} />
                                        )
                                    })
                                }
                            </div>
                            <div className="ml-16">
                                <PriceCard />
                            </div>
                       </>
                }
            </main>
        </Fragment>
    )
}