import { Fragment } from "react";
import { Navcomponent } from "../../components/nav_component";
import { useEffect,useState } from "react";
import { getProductsFromApi } from "../../api/products";
import { ProductCardComponent } from "../../components/product_card";
import { useCart } from "../../context/cartContext";


export const Homepage = ()=>{
    const{cartProduct} = useCart();
    console.log(cartProduct);
    const [product, setProduct] = useState();
    useEffect(()=>{
        (async ()=>{
            const productData = await getProductsFromApi();
            setProduct(productData);
        })();
    },[]);
    return(
        <Fragment>
            <Navcomponent />
            <main className="flex flex-wrap justify-center mt-20">
                {
                    product?.length > 0 && product.map(p=>{
                        return(
                            <ProductCardComponent key={p.id} product={p} />
                        )
                    })
                }
            </main>
        </Fragment>
    )
}