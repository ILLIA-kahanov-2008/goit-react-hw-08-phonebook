// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsAPI from '../../services/contacts-mocAPI'

// export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//       try {
//         const contacts = await contactsAPI.fetchAllContacts();
//         return contacts;
//   } catch (error) {
//         return rejectWithValue(error.message);
//   }
//   }
// )

// export const addNewContact = createAsyncThunk('contacts/addContact',
//   async (addingContact, {getState, rejectWithValue}) => {  
//     const { phoneBook: { contacts } } = getState();
//     const { name } = addingContact;
//   const isExist = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())
//     try {
//       if (isExist) throw new Error(`${name} is already in contacts`)
//       const contacts = await contactsAPI.addContact(addingContact);
//         return contacts;
  
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }  
// })

// export const removeContact = createAsyncThunk('contacts/removeContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsAPI.deleteContact(id);
//         return contacts;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }  
// }
// )


// export const loginThunk = createAsyncThunk(
//   "users/login",
//   async (user, { rejectWithValue }) => {
//     try {
//       const response = await fetch(BASE_USER_URL + userLogin, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });
//       const data = await response.json();
//       console.log("response", data); // { token: "", user: {name: "", email: ""}}
//       return data; // action.payload
//     } catch (err) {
//       rejectWithValue({ error: err.message });
//     }
//   }
// );

// export const logoutThunk = createAsyncThunk(
//   "users/logout",
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     const token = state.auth.token;
//     if (!token) return;
//     try {
//       const response = await fetch(BASE_USER_URL + userLogout, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       // const data = await response.json();
//       console.log("response", response); // { user: {name: "", email: ""}}
//       // return data; // action.payload
//     } catch (err) {
//       console.log(err.message);
//       rejectWithValue(err.message);
//     }
//   }
// );


// ---Repeta's

// import axios from 'axios';
// import {
//   addTodoRequest,
//   addTodoSuccess,
//   addTodoError,
//   deleteTodoRequest,
//   deleteTodoSuccess,
//   deleteTodoError,
//   toggleCompletedRequest,
//   toggleCompletedSuccess,
//   toggleCompletedError,
//   fetchTodosRequest,
//   fetchTodosSuccess,
//   fetchTodosError,
// } from './todos-actions';

// // GET @ /tasks
// const fetchTodos = () => async dispatch => {
//   dispatch(fetchTodosRequest());

//   try {
//     const { data } = await axios.get('/tasks');

//     dispatch(fetchTodosSuccess(data));
//   } catch (error) {
//     dispatch(fetchTodosError(error.message));
//   }
// };

// // POST @ /tasks
// const addTodo = description => dispatch => {
//   const todo = {
//     description,
//     completed: false,
//   };

//   dispatch(addTodoRequest());

//   axios
//     .post('/tasks', todo)
//     .then(({ data }) => dispatch(addTodoSuccess(data)))
//     .catch(error => dispatch(addTodoError(error.message)));
// };

// // DELETE @ /tasks/:id
// const deleteTodo = todoId => dispatch => {
//   dispatch(deleteTodoRequest());

//   axios
//     .delete(`/tasks/${todoId}`)
//     .then(() => dispatch(deleteTodoSuccess(todoId)))
//     .catch(error => dispatch(deleteTodoError(error.message)));
// };

// // PATCH @ /tasks/:id
// const toggleCompleted = ({ id, completed }) => dispatch => {
//   const update = { completed };

//   dispatch(toggleCompletedRequest());

//   axios
//     .patch(`/tasks/${id}`, update)
//     .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
//     .catch(error => dispatch(toggleCompletedError(error.message)));
// };

// const todosOperations = {
//   fetchTodos,
//   addTodo,
//   deleteTodo,
//   toggleCompleted,
// };
// export default todosOperations;