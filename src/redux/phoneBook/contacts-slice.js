import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addNewContact, removeContact} from "./contacts-thunks"

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    filter: '',
    // status:null,
    error:null,
  },
  reducers: {
    filteringValue (state, { payload }) {            
      state.filter = payload;
      state.isLoading = false;
      state.error = null;
    },
    resetError(state) {
      state.error = null;
    }
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      // return {
      //   ...state,
      //   contacts: payload,
      //   isLoading: false,
      //   error: null,    
      // },
      state.contacts = payload;
      state.isLoading = false;
      state.error = null;
      
  },
    [fetchContacts.rejected](state, {payload}) {
      state.isLoading = false;
      state.error = payload;
    },
  [addNewContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addNewContact.fulfilled](state, {payload}) {
      state.contacts = [...state.contacts, payload];
      state.isLoading = false;
      state.error = null;  
  },
  [addNewContact.rejected](state, {payload}) {
      state.isLoading = false;
      state.error = payload;
    },
  [removeContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
  [removeContact.fulfilled](state, {payload}) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
      state.isLoading = false;
      state.error = null;  
  },
  [removeContact.rejected](state, {payload}) {
      state.isLoading = false;
      state.error = payload;
    },
  }
})

export const { filteringValue, resetError } = contactsSlice.actions;
export default contactsSlice.reducer;


