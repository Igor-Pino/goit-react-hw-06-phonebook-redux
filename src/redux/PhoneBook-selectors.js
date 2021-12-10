const getContacts = state => state.contactBook.contacts;
const getFilter = state => state.contactBook.filter;

const contactFilter = state => {
  const normalizedFilter = getFilter(state).toLowerCase();
  const filteredContacts = getContacts(state).filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return filteredContacts;
};

export { getContacts, getFilter, contactFilter };
