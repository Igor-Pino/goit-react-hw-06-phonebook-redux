// import { useState, useEffect } from 'react';
import ContactInput from './components/ContactInput';
import ContactsList from './components/ContactsList/ContactsList';

import Filter from './components/ContactFilter';

import s from './styles/base.module.scss';

// function findStorageContacts() {
//   return JSON.parse(window.localStorage.getItem('contacts')) ?? '';
// }

function App() {
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handlerContact = ({ name, number }) => {
  //   const newContact = {
  //     id: ShortId.generate(),
  //     name: name,
  //     number: number,
  //   };

  //   if (
  //     contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()) ||
  //     contacts.find(contact => contact.number === newContact.number)
  //   ) {
  //     alert(`${newContact.name} is already in contacts!`);
  //     return;
  //   }

  //   setContacts(prevContacts => [...prevContacts, newContact]);
  //   console.log('контакт після сет стейту нового контакту', contacts);
  // };

  return (
    <div className={s.main_container}>
      <h1 className={s.title}>Phonebook</h1>

      <ContactInput />
      <h2 className={s.title}>Contacts</h2>

      <Filter />
      {/* {contacts.length > 1 && <Filter onChange={changeFilter} value={filter} />} */}

      <ContactsList />
    </div>
  );
}

export default App;
