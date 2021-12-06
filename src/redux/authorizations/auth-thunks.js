import { createAsyncThunk } from "@reduxjs/toolkit";
import * as usersAPI from '../../services/usersAPI'

// ----Repeta's
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };
// ----Repeta's

export const signUpThunk = createAsyncThunk("users/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await usersAPI.signUp(userData);
      console.log('data in signUpThunk:>> ', data);
      if (data === "400") throw new Error('Check inputs please!');
      if (data === "500") throw new Error('work on server equipment. try later');
        return data;
  } catch (error) {
      console.log('error in signUpThunk:>> ', error.message);
      return rejectWithValue(error.message);
      
  }
  }
)

// ----Repeta's
// /*
//  * POST @ /users/signup
//  * body: { name, email, password }
//  * После успешной регистрации добавляем токен в HTTP-заголовок
//  */
// const register = createAsyncThunk('auth/register', async credentials => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });
// ----Repeta's

export const signInThunk = createAsyncThunk("users/signIn",
  async (userData, { rejectWithValue }) => {
    try {
      console.log('signInThunk userData :>> ', userData);
      const data = await usersAPI.signIn(userData);
      console.log('data in signInThunk:>> ', data);
      if (data === "400") throw new Error('email or password is wrong. try again.');
        return data;
  } catch (error) {
      console.log('error in signInThunk:>> ', error.message);
      return rejectWithValue(error.message);
      
  }
  }
)

// ----Repeta's
// /*
//  * POST @ /users/login
//  * body: { email, password }
//  * После успешного логина добавляем токен в HTTP-заголовок
//  */
// const logIn = createAsyncThunk('auth/login', async credentials => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });

// /*
// ----Repeta's


export const SignOutThunk = createAsyncThunk(
  "users/signOut",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.userAuth.token;
    if (!token) return;
    try {
      const data = await usersAPI.signOut(token);
        if (data === "401" || data === "404") throw new Error('Logout impossible');
      if (data === "500") throw new Error('work on server equipment. try later');
      return data;  
      }      
    catch (err) {
      console.log(err.message);
      rejectWithValue(err.message);
    }
  }
);


// ----Repeta's
//  * POST @ /users/logout
//  * headers: Authorization: Bearer token
//  * После успешного логаута, удаляем токен из HTTP-заголовка
//  */
// const logOut = createAsyncThunk('auth/logout', async () => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });
// ----Repeta's


export const setCurrentUserThunk = createAsyncThunk(
  "users/current",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.userAuth.token;
    console.log('setCurrentUserThunk persistedToken :>> ', persistedToken);
    if (!persistedToken) return;
    try {
      const data = await usersAPI.setCurrentUser(persistedToken);
      if (data === "401" || data === "404") throw new Error('no authorization yet');
      console.log("setCurrentUserThunk data", data); // { user: {name: "", email: ""}}
      return data; // action.payload
    } catch (err) {
      console.log(err.message);
      rejectWithValue(err.message);
    }
  }
);

// ----Repeta's
// /*
//  * GET @ /users/current
//  * headers:
//  *    Authorization: Bearer token
//  *
//  * 1. Забираем токен из стейта через getState()
//  * 2. Если токена нет, выходим не выполняя никаких операций
//  * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
//  */
// const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       console.log('Токена нет, уходим из fetchCurrentUser');
//       return thunkAPI.rejectWithValue();
//     }

//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       // TODO: Добавить обработку ошибки error.message
//     }
//   },
// );
// ----Repeta's


// ----Repeta's
// const operations = {
//   register,
//   logOut,
//   logIn,
//   fetchCurrentUser,
// };
// export default operations;
// ----Repeta's







