import { createSlice } from "@reduxjs/toolkit";
import {signUpThunk, signInThunk, SignOutThunk, setCurrentUserThunk} from "./auth-thunks"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: "", email: "" },
    token: "",
    error: null,
    isLoading: false,
    isUserAuth: false,
    isFetchCurrentUser: false,
  },
  extraReducers: {
    [signUpThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isUserAuth:false,
      };
    },
    [signUpThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isUserAuth: true,
      };
    },
    [signUpThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isUserAuth:false,
      };
    },
    [signInThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isUserAuth:false,
      };
    },
    [signInThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isUserAuth: true,
      };
    },
    [signInThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isUserAuth:false,
      };
    },
    [setCurrentUserThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isFetchCurrentUser: true,
        isUserAuth:false,
      };
    },
    [setCurrentUserThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isUserAuth: true,
        isFetchCurrentUser: false,
      };
    },
    [setCurrentUserThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isUserAuth: false,
      };
    },
    [SignOutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [SignOutThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: { name: "", email: "" },
        token: "",
        isUserAuth: false,
      };
    },
    [SignOutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
  })

// export const { renameProp } = authSlice.actions;
export default authSlice.reducer;
// // =========== PRODUCTS ==============
// // const BASE_PRODUCT_URL = `https://619d2ffb131c600017088dd7.mockapi.io/api/v1/`;
// // const products = `/products`;


// -----Repeta's

// import { createSlice } from '@reduxjs/toolkit';
// import authOperations from './auth-operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isFetchingCurrentUser: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [authOperations.register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [authOperations.fetchCurrentUser.pending](state) {
//       state.isFetchingCurrentUser = true;
//     },
//     [authOperations.fetchCurrentUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isFetchingCurrentUser = false;
//     },
//     [authOperations.fetchCurrentUser.rejected](state) {
//       state.isFetchingCurrentUser = false;
//     },
//   },
// });

// export default authSlice.reducer;