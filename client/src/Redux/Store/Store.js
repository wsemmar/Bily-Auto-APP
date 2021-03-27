import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../Reducers/cartReducer";
const Store = createStore(reducers, compose(applyMiddleware(thunk)));

export default Store;
