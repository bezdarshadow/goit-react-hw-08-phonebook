import { createReducer, combineReducers } from '@reduxjs/toolkit'
import * as operations from './contacts-operations'
const items = createReducer([], {
    [operations.fetchContacts.fulfilled]: (_, {payload}) => [...payload],
    [operations.addContact.fulfilled]: (state, {payload}) => [...state, payload],
    [operations.removeContact.fulfilled]: (state, {payload}) => state.filter(item => item.id !== payload)
});

const loading = createReducer(false, {
    [operations.fetchContacts.pending]: () => true,
    [operations.fetchContacts.fulfilled]: () => false,
    [operations.fetchContacts.rejected]: () => false,
    [operations.addContact.pending]: () => true,
    [operations.addContact.fulfilled]: () => false,
    [operations.addContact.rejected]: () => false,
    [operations.removeContact.pending]: () => true,
    [operations.removeContact.fulfilled]: () => false,
    [operations.removeContact.rejected]: () => false,
});

const error = createReducer(null, {
    [operations.fetchContacts.pending]: () => null,
    [operations.addContact.pending]: () => null,
    [operations.removeContact.pending]: () => null,
    [operations.fetchContacts.rejected]: (_, {payload}) => payload,
    [operations.addContact.rejected]: (_, {payload}) => payload,
    [operations.removeContact.rejected]: (_, {payload}) => payload,
});

const contactsReducer = combineReducers({
    items,
    loading,
    error
})
export default contactsReducer;