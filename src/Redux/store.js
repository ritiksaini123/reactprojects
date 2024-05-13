// import { legacy_createStore as createStore,compose} from "redux";
import { inputReducer } from "./inputReducer";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store=createStore(inputReducer,composeEnhancers());
// console.log(store)
import { legacy_createStore as createStore} from 'redux'
import { persistStore,persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
   key:'main-root',
   storage
}
const persistedReducer=persistReducer(persistConfig,inputReducer)
export const Store=createStore(persistedReducer)
export const Persistor=persistStore(Store)