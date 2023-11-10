import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
// import { reducer as AuthReducer } from "./AuthReducer/reducer";
// import  {reducer as RecipeReducer} from './RecipeReducer/reducer'; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as dataReducer } from "./Data/reducer";
// Define the persist config
const persistConfig = {
  key: 'root', // key is required
  storage, // storage is imported from redux-persist/lib/storage

};

const rootReducer = combineReducers({
  dataReducer

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

