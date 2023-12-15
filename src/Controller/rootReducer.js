// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './reducer';

const rootReducer = combineReducers({
    // other reducers,
    cart: cartReducer,
});

export default rootReducer;
