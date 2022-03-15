import axios from "axios";
import { ADD_PROPERTY_FAIL, ADD_PROPERTY_REQUEST, ADD_PROPERTY_SUCCESS, GET_PROPERTIES_FAIL, GET_PROPERTIES_REQUEST, GET_PROPERTIES_SUCCESS } from "../constants/constants";
const API_URL = "http://localhost:4000";

export const addProperty = (details) => async (dispatch, getState) => {
	try {
		// const userInfo = getState().educatorAuthReducer.educatorInfo;
		// console.log(educatorInfo);
		const config = {
			headers: {
				"Content-Type": "application/json",
				// Authorization: educatorInfo.token,
			},
		};
		dispatch({ type: ADD_PROPERTY_REQUEST });
		const { data } = axios.post(`${API_URL}/api/property/add`, details, config);
		console.log(data);
		dispatch({ type: ADD_PROPERTY_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: ADD_PROPERTY_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};

export const fetchProperty = () => async (dispatch, getState) => {
	console.log("Caled");
	try {

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		dispatch({ type: GET_PROPERTIES_REQUEST });
		const { data } = await axios.get(`${API_URL}/api/courses/get`, config);
		// console.log(data);
		dispatch({ type: GET_PROPERTIES_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: GET_PROPERTIES_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};
