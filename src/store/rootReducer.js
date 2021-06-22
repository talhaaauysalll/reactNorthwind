import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

// Tüm stateleri toplanan yer 
const rootReducer= combineReducers({
    cart:cartReducer
    
})

export default rootReducer;