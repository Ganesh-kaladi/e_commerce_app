import { Fragment } from 'react';
import { Navcomponent } from '../../components/nav_component/index';
import { Favoritecomponent } from '../../components/favorite_card';
import { useCart } from '../../context/cartContext';
export const Favoritepage = () => {
    const { cartProduct } = useCart();
    const { favList } = cartProduct;
    return (
        <Fragment>
            <Navcomponent />
            <main className='grid justify-items-center flex-col m-10'>
                {
                    favList?.length === 0 ?
                        <div className='flex justify-center px-4 py-2 bg-slate-500 text-slate-50 font-medium w-auto rounded-lg'>Favorite List is Empty</div> :

                        favList?.length > 0 && favList.map(p => {
                            return (
                                <Favoritecomponent key={p.id} favItem={p} />
                            )
                        })

                }
            </main>
        </Fragment>
    )
}