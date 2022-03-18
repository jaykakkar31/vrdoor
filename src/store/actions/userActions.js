import { USER_DATA_FAIL, USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/constants";
import axios from 'axios'
const API_URL="https://vrdoor-server.herokuapp.com"
export const userRgister = (details) => async(dispatch) => {
	console.log(details);
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${API_URL}/api/users/register`,
			details,
			config
		);
		
		console.log(data);
		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const userLogin = (details) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${API_URL}/api/users/login`,
			details,
			config
		);
		console.log(data);
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});
		
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};


export const fetchUserData = (id) => async (dispatch) => {
	try {
		dispatch({
			type: USER_DATA_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(
			`${API_URL}/api/users/get/${id}`,
			
			config
		);
		console.log(data);
		dispatch({
			type: USER_DATA_SUCCESS,
			payload: data,
		});

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_DATA_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
