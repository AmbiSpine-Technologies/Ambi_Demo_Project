import {
    CLEAR_ERRORS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
} from "../constant/userConstant";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`http://localhost:8000/api/user/login/`, { email, password}, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        });
    }
}


export const register = (formData) => async (dispatch) => {
    
    try {
        dispatch({ type: REGISTER_REQUEST });
        console.log("Sending registration request with data:", formData);
        const config = {
            headers: { "Content-Type": "application/json" } 
        };

        const { data } = await axios.post(`http://localhost:8000/api/user/register`, formData, config); 

        dispatch({ type: REGISTER_SUCCESS, payload: data });
       
    } catch (error) {
       
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.message
        });
    }
};



export const logout=()=>async (dispatch)=>{
    try{
        await axios.get(`http://localhost:8000/api/user/logout`);
        dispatch({type:LOGOUT_SUCCESS})
    }catch(error){
        dispatch({type:LOGOUT_FAIL,payload:error.response.data.message})
    }
}

export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
