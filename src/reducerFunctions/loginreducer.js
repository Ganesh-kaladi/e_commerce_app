export const ReducerFunction = (state,{type,payload})=>{
    
    switch(type){
        case 'EMAIL_TEXT':
            return{
                ...state,
                email:payload.value
            }
            case 'PASSWORD_TEXT':
                return{
                    ...state,
                    email:payload.value
                }
            case 'TOKEN':
                return{
                    ...state,
                    token:payload.value
                }
        default:
            return ;
    }
}