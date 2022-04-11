import { createAsyncThunk } from "@reduxjs/toolkit";

import * as contactsApi from '../../shared/services/contacts';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, {rejectWithValue}) => {
        try{
            const result = await contactsApi.fetchContacts()
            return result
        } catch(err){
            return rejectWithValue(err)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, {rejectWithValue}) => {
        try{
            const result = await contactsApi.addContact(data)
            return result
        } catch(err){
            return rejectWithValue(err)
        }
    },
    {
        condition: (data, {getState}) => {
            const {contacts} = getState();
            const {name} = data;
            const nameCompare = name.toLowerCase();
            const result = contacts.items.find(({name}) => {
                return (name.toLowerCase() === nameCompare);
            });
            if(result){
                alert(`${name} has already been added`);
                return false;
            }            
        }
    }
)

export const removeContact = createAsyncThunk(
    "contacts/removeContact",
    async (id, {rejectWithValue}) => {
        try{
            const result = await contactsApi.removeContact(id)
            return result.id
        } catch(err){
            return rejectWithValue(err)
        }
    }
)