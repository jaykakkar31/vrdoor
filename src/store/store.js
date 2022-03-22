import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	fetchPropertyReducer,
	addPropertyReducer,
	fetchUserPropertyReducer,
    deletePropertyReducer,
} from "./reducers/propertiesReducer";
import {
	loginUser,
	logoutUser,
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
	fetchUserPropertyReducer: fetchUserPropertyReducer,
	logoutUser: logoutUser,
	deletePropertyReducer: deletePropertyReducer,
});

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store