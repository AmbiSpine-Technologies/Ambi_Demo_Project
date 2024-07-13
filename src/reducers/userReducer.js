// reducers/userReducer.js
import { createReducer } from "@reduxjs/toolkit";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  CLEAR_ERRORS,
} from "../constant/userConstant";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOGIN_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(LOGIN_SUCCESS, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(LOGIN_FAIL, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    })
    .addCase(REGISTER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(REGISTER_SUCCESS, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(REGISTER_FAIL, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    })
    .addCase(LOGOUT_SUCCESS, (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    })
    .addCase(LOGOUT_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    });
});
