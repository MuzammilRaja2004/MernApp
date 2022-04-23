export const addtocart = (amout) => {
    return (dispatch)=>{
        dispatch({
            type:'addtocart',
            payload:amout,
        })
    }
 }