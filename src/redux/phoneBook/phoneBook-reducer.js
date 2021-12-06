// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import { filteringValue, resetError } from './phoneBook-actions';
// import {
//   fetchContacts,
//   addNewContact,
//   removeContact,
// } from './phoneBook-operations';

// // const contacts = createReducer([], {
// //   [fetchContacts.fulfilled]: (_, { payload }) => payload,
// //   [addNewContact.fulfilled]: (state, { payload }) => [...state, payload],
// //   [removeContact.fulfilled]: (state, { payload }) =>
// //     state.filter(({ id }) => id !== payload.id),
// // });

// const isLoading = createReducer(false, {
//   // [fetchContacts.pending]: () => true,
//   // [fetchContacts.fulfilled]: () => false,
//   // [fetchContacts.rejected]: () => false,
//   // [addNewContact.pending]: () => true,
//   // [addNewContact.fulfilled]: () => false,
//   // [addNewContact.rejected]: () => false,
//   // [removeContact.pending]: () => true,
//   // [removeContact.fulfilled]: () => false,
//   // [removeContact.rejected]: () => false,
//   [filteringValue]: () => false,
// });

// const filter = createReducer('', {
//   [filteringValue]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {
//   // [fetchContacts.rejected]: (_, { payload }) => payload,
//   // [fetchContacts.pending]: () => null,
//   // [fetchContacts.fulfilled]: () => null,
//   // [addNewContact.rejected]: (_, { payload }) => payload,
//   // [addNewContact.pending]: () => null,
//   // [addNewContact.fulfilled]: () => null,
//   // [removeContact.rejected]: (_, { payload }) => payload,
//   // [removeContact.pending]: () => null,
//   // [removeContact.fulfilled]: () => null,
//   [filteringValue]: () => null,
//   [resetError]: () => null,
// });

// export default combineReducers({
//   // contacts,
//   filter,
//   error,
//   isLoading,
// });



// ---Repeta's

// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import {
//   addTodoRequest,
//   addTodoSuccess,
//   addTodoError,
//   deleteTodoRequest,
//   deleteTodoSuccess,
//   deleteTodoError,
//   changeFilter,
//   toggleCompletedRequest,
//   toggleCompletedSuccess,
//   toggleCompletedError,
//   fetchTodosRequest,
//   fetchTodosSuccess,
//   fetchTodosError,
// } from './todos-actions';

// const items = createReducer([], {
//   [fetchTodosSuccess]: (_, { payload }) => payload,
//   [addTodoSuccess]: (state, { payload }) => [...state, payload],
//   [deleteTodoSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
//   [toggleCompletedSuccess]: (state, { payload }) =>
//     state.map(todo => (todo.id === payload.id ? payload : todo)),
// });

// const loading = createReducer(false, {
//   [fetchTodosRequest]: () => true,
//   [fetchTodosSuccess]: () => false,
//   [fetchTodosError]: () => false,
//   [addTodoRequest]: () => true,
//   [addTodoSuccess]: () => false,
//   [addTodoError]: () => false,
//   [deleteTodoRequest]: () => true,
//   [deleteTodoSuccess]: () => false,
//   [deleteTodoError]: () => false,
//   [toggleCompletedRequest]: () => true,
//   [toggleCompletedSuccess]: () => false,
//   [toggleCompletedError]: () => false,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {});

// export default combineReducers({
//   items,
//   filter,
//   loading,
//   error,
// });