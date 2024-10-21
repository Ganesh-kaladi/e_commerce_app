import { Fragment } from "react";
import { Navcomponent } from "../../components/nav_component";
import { useEffect, useState } from "react";
import { getProductsFromApi } from "../../api/products";
import { getCategoriesFromApi } from "../../api/getAllcategories";
import { ProductCardComponent } from "../../components/product_card";
import { useCart } from "../../context/cartContext";


export const Homepage = () => {
    const { cartProduct } = useCart();
    console.log(cartProduct);
    const [product, setProduct] = useState();
    const [category, setCategory] = useState();
    const [categoryProduct, setCategoryProduct] = useState(product);
    useEffect(() => {
        (async () => {
            const productData = await getProductsFromApi();
            setProduct(productData);
        })();
        (async () => {
            const categoriesData = await getCategoriesFromApi();
            const updatedCategory = [...categoriesData,{id:1,name:'All'}]
            setCategory(updatedCategory);
        })()
    }, []);
    const onClickCategory = (categoryName)=>{
        const categoryN = categoryName.toLowerCase();
        const isCheck = product.map(({category})=>category.name.toLowerCase());
        const isChecked = isCheck.some(p=>p===categoryN);
        console.log(isChecked);
       
        const categoryFilterProduct = isChecked ? product.filter(p=>p.category.name===categoryName) : product ;
        setCategoryProduct(categoryFilterProduct);
        console.log(categoryFilterProduct);
    }
    return (
        <Fragment>
            <Navcomponent />
            <main>
                <div className="flex gap-5 justify-center pt-6 cursor-pointer">
                    {
                        category?.length > 0 && category.map(p=>{
                            return(
                                <div onClick={()=>onClickCategory(p.name)} className="bg-blue-400 py-2 px-4 text-slate-50 font-semibold rounded-lg" >{p.name}</div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-wrap justify-center mt-20">
                    {
                        categoryProduct?.length > 0 ? categoryProduct.map(p => {
                            return (
                                <ProductCardComponent key={p.id} product={p} />
                            )
                        }): product?.length>0 && product.map(p => {
                            return (
                                <ProductCardComponent key={p.id} product={p} />
                            )
                        })
                    }
                </div>
            </main>
        </Fragment>
    )
}