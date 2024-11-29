import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li className={css.contactListItem} key={contact.id}>
            <Contact contact={contact} deleteContacts={deleteContacts} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
