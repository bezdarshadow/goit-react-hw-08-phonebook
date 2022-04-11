import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as operations from '../../redux/contacts/contacts-operations'
import * as selectors from '../../redux/contacts/contacts-selectors';

import ContactFilter from './ContactFilter';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

import styles from './phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(selectors.getAllContacts, shallowEqual)
  const loading = useSelector(selectors.getContactsLoading, shallowEqual)
  const error = useSelector(selectors.getContactsError, shallowEqual)
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(()=> {
    const getContacts = () => dispatch(operations.fetchContacts());
    getContacts();
}, [dispatch]);

  const addContact = info => {
    dispatch(operations.addContact(info))
  }
  const removeContact = id => dispatch(operations.removeContact(id))
  const changeFilter = (event => {
    const { value } = event.target;
    setFilter(value)
  });
  const filterContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(item => item.name.toLowerCase().includes(normalizeFilter));
    return filteredContacts; 
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Phonebook</h2>
      <ContactForm onChange={addContact} />
      <h2 className={styles.title}>Contacts</h2>
      {error && <p>Error while fetching</p>}
      {!error && Boolean(contacts.length) &&
      <> 
      <ContactFilter value={filter} onChange={changeFilter} />
      {loading && <p>Loading...</p>}
      <ContactList contacts={filterContacts()} onDelete={removeContact} />
      </>}
    </div>
  );
};

export default Phonebook;
