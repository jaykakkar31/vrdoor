import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchPropertyReducer,addPropertyReducer } from "./reducers/propertiesReducer";
import {
	loginUser,
	registerUser,
	userDataReducer,
} from "./reducers/userReducers";

const userInfofromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;
const middleware = [thunk];

const initialState = {
	loginUser: {
		userInfo: userInfofromStorage,
	},
};
const reducers = combineReducers({
	fetchPropertyReducer: fetchPropertyReducer,
	addPropertyReducer: addPropertyReducer,
	registerUser: registerUser,
	loginUser: loginUser,
	userDataReducer: userDataReducer,
});

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store