export const CartReducerFun = (state,{type,payload})=>{
    
    switch(type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[...state.cart,payload.product]
            }
        case 'ADD_TO_FAV_LIST':
            return{
                ...state,
                favList:[...state.favList,payload.product]
            }
        case 'ADD_TO_CART_FROM_FAV_LIST':
            return{
                ...state,
                cart:[...state.cart,payload.favItem]
            }
        case 'REMOVE_FROM_FAV_LIST':
            return{
                ...state,
                favList:state.favList?.length>0 && state.favList.filter(p=>p.id!==payload.id)
            }
        case 'REMOVE_FROM_CART_LIST':
            return{
                ...state,
                cart:state.cart?.length>0 && state.cart.filter(p=>p.id!==payload.id)
            }
        default:
            return state;
    }
}