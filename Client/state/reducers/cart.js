const reducer = (state=0,action) =>{
    if(action.type==='addtocart'){
        return state + action.payload
    }
    return state
}
export default reducer