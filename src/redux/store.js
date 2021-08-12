import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import usersReducer from "./usersReducer";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
    users: usersReducer,
    form: formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;