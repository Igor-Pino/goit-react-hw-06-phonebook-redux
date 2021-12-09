import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ShortId from 'shortid';
import { addContact } from '../../redux/actions/contacts-actions';

function ContactInput({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = ShortId.generate();
  const numberInputId = ShortId.generate();

  const inputContact = { name, number };

  const stateContacts = useSelector(state => state.contactBook.contacts);

  // const dispatch = useSelector();

  // const onSubmit = () => dispatch(addContact(number));

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handelChange = e => {
    const inputName = e.target.name;
    switch (inputName) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const compareContacts = newContact => {
    if (
      stateContacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
    ) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    onSubmit(newContact);
  };

  const handelSubmit = e => {
    e.preventDefault();
    console.log(stateContacts);
    compareContacts(inputContact);

    reset();
  };

  return (
    <form onSubmit={handelSubmit}>
      <label id={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          id={nameInputId}
          onChange={handelChange}
        />
      </label>
      <label id={numberInputId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          id={numberInputId}
          onChange={handelChange}
        />
      </label>
      <button type="submit">add contact</button>
    </form>
  );
}

ContactInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
// stateContacts: state.contactBook.contacts,

// })

const mapDispatchToProps = dispatch => ({
  onSubmit: number => dispatch(addContact(number)),
});

export default connect(null, mapDispatchToProps)(ContactInput);
