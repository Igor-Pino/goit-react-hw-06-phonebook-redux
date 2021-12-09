import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actions/contacts-actions';
import ContactItem from '../ContactItem';
import s from './ContactsList.module.scss';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contact_list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
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

ContactsList.defaultProps = {
  contacts: [],
};

const contactFilter = (allcontacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = allcontacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return filteredContacts;
};

const mapStateToProps = state => {
  const { filter, contacts } = state.contactBook;

  const filteredNumbers = contactFilter(contacts, filter);

  return {
    contacts: filteredNumbers,
  };
};
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
