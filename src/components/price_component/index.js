import { CalculateTotalPrice } from "../../utiles/calculateTotalPrice";

export const PriceCard = () => {
    const getAllItemsPrice = CalculateTotalPrice();
    const {cartItems ,itemPrice,totalPrice,gst,deliveryCharge} = getAllItemsPrice;
    const price_style = 'flex justify-between px-2 pb-2 my-2';
    return (
        <section className="bg-slate-50 min-w-[250px] max-w-[250px] h-[250px] flex flex-col rounded-md">
            <div className="px-4">
                <h3 className="px-4 pt-2 pb-2 text-xl font-semibold text-center border-b">Price Details</h3>
            </div>
            <div>
                <div className='flex justify-between px-2 pb-2 my-2 pt-4'>
                    <span>cart ({cartItems}) items</span>
                    <span className="font-semibold">{itemPrice}/-</span>
                </div>
                <div className={price_style}>
                    <span>delivery Charge:</span>
                    <span className="font-semibold">{deliveryCharge}/-</span>
                </div>
                <div className={price_style}>
                    <span>gst</span>
                    <span className="font-semibold">{gst}/-</span>
                </div>
                <div className=' px-2 pb-2 my-2 pt-4'>
                    <div className="flex justify-between border-t  pt-1">
                        <span>total Price</span>
                        <span className="font-semibold">{totalPrice}/-</span>
                    </div>
                </div>
            </div>
        </section>
    )
}