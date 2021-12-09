import ContactInput from './components/ContactInput';
import ContactsList from './components/ContactsList/ContactsList';

import Filter from './components/ContactFilter';

import s from './styles/base.module.scss';

function App() {
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
