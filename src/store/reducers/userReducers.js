import {
    USER_DATA_FAIL,
    USER_DATA_REQUEST,
	USER_DATA_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from "../constants/constants";

export const registerUser = (state = {}, actions) => {
	switch (actions.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true, error: null };
		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: actions.payload };
		case USER_REGISTER_FAIL:
			return { loading: false, error: actions.payload };

		default:
			return state;
	}
};
export const loginUser = (state = {}, actions) => {
	switch (actions.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true, error: null };
		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: actions.payload };
		case USER_LOGIN_FAIL:
			return { loading: false, error: actions.payload };
		case USER_LOGOUT:
			return {};

		default:
			return state;
	}
};

export const userDataReducer = (state = {}, actions) => {
	switch (actions.type) {
		case USER_DATA_REQUEST:
			return { loading: true, error: null };
		case USER_DATA_SUCCESS:
			return { loading: false, userData: actions.payload };
		case USER_DATA_FAIL:
			return { loading: false, error: actions.payload };
	

		default:
			return state;
	}
};
