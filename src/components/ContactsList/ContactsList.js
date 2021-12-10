import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions/contacts-actions';
import { contactFilter } from '../../redux/PhoneBook-selectors';
import ContactItem from '../ContactItem';
import s from './ContactsList.module.scss';

const ContactsList = () => {
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  const contacts = useSelector(contactFilter);

  console.log(contacts);

  return (
    <ul className={s.contact_list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
