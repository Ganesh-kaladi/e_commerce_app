import {Fragment} from 'react';
import {Navcomponent} from '../../components/nav_component/index';
import { Favoritecomponent } from '../../components/favorite_card';
import { useCart } from '../../context/cartContext';
export const Favoritepage = ()=>{
    const {cartProduct} = useCart();
    const {favList} = cartProduct;
    return(
        <Fragment>
            <Navcomponent />
            <main>
                {
                    favList?.length>0 && favList.map(p=>{
                        return(
                            <Favoritecomponent key={p.id} favItem={p} />
                        )
                    })
                }
            </main>
        </Fragment>
    )
}