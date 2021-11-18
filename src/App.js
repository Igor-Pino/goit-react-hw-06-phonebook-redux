import { useState, useEffect } from 'react';
import ContactInput from './components/ContactInput';
import ContactsList from './components/ContactsList/ContactsList';
import ShortId from 'shortid';
import Filter from './components/ContactFilter';
import s from './styles/base.module.scss';

function findStorageContacts() {
  return JSON.parse(window.localStorage.getItem('contacts')) ?? '';
}

function App() {
  const [contacts, setContacts] = useState(() => findStorageContacts());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handlerContact = ({ name, number }) => {
    console.log(name);
    console.log(number);
    const newContact = {
      id: ShortId.generate(),
      name: name,
      number: number,
    };

    if (
      contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()) ||
      contacts.find(contact => contact.number === newContact.number)
    ) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    console.log(newContact);
    setContacts(prevContacts => [...prevContacts, newContact]);
    console.log('контакт після сет стейту нового контакту', contacts);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const contactFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContacts;
  };

  const filteredNumbers = contactFilter();

  return (
    <div className={s.main_container}>
      <h1 className={s.title}>Phonebook</h1>

      <ContactInput onSubmit={handlerContact} />

      <h2 className={s.title}>Contacts</h2>

      {contacts.length > 1 && <Filter onChange={changeFilter} value={filter} />}

      <ContactsList contacts={filteredNumbers} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
