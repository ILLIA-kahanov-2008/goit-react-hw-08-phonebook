import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_CONTACTS_URL = `https://connections-api.herokuapp.com/contacts`;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue, getState }) => {
    const {
      userAuth: { token },
    } = getState();
    if (!token) return;
    try {
      const response = await fetch(BASE_CONTACTS_URL, {
        // method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
      rejectWithValue(error.message);
    }
  },
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (addingContact, { getState, rejectWithValue }) => {
    const {
      userAuth: { token },
    } = getState();
    console.log('addingContact', addingContact);
    if (!token) return;
    const {
      userContacts: { contacts },
    } = getState();
    const { name } = addingContact;
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    try {
      if (isExist) throw new Error(`${name} is already in contacts`);
      const response = await fetch(BASE_CONTACTS_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addingContact),
      });
      const newContact = await response.json();
      console.log('addNewContactThunk response :>> ', response);
      console.log('addNewContactThunk newContact :>> ', newContact);
      return newContact;
    } catch (error) {
      console.log(error.message);
      rejectWithValue(error.message);
    }
  },
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (ID, { rejectWithValue, getState }) => {
    const {
      userAuth: { token },
    } = getState();
    console.log('removeContactThunk token :>> ', token);
    if (!token) throw new Error({ message: 'token error' });
    const contactID = `/${ID}`;
    console.log('removeContactThunk contactID :>> ', contactID);
    try {
      const response = await fetch(BASE_CONTACTS_URL + contactID, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
          const removedContact = await response.json();
      console.log('removeContactThunk response :>> ', response);
      console.log('removeContactThunk removedContact :>> ', removedContact);
      if (response.ok) {
        return ID;
      } else {
        throw new Error({ message: 'error' });
      }
  
      // return ID
    } catch (error) {
      console.log(error.message);
      rejectWithValue(error.message);
    }
  },
);
