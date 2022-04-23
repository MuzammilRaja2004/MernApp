import { combineReducers } from "redux";
import cart from './cart';

const reducers = combineReducers({
    amount:cart
})
export default reducers