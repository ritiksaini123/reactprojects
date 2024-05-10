import { legacy_createStore as createStore,compose} from "redux";
import { inputReducer } from "./inputReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(inputReducer,composeEnhancers());
// console.log(store)