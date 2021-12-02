import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contacts-mocAPI'

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
      try {
        const contacts = await contactsAPI.fetchAllContacts();
        return contacts;
  } catch (error) {
        return rejectWithValue(error.message);
  }
  }
)

export const addNewContact = createAsyncThunk('contacts/addContact',
  async (addingContact, {getState, rejectWithValue}) => {  
    const { phoneBook: { contacts } } = getState();
    const { name } = addingContact;
  const isExist = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())
    try {
      if (isExist) throw new Error(`${name} is already in contacts`)
      const contacts = await contactsAPI.addContact(addingContact);
        return contacts;
  
  } catch (error) {
    return rejectWithValue(error.message);
  }  
})

export const removeContact = createAsyncThunk('contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.deleteContact(id);
        return contacts;
  } catch (error) {
    return rejectWithValue(error.message);
  }  
}
)