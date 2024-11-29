import { number } from 'prop-types';
import css from './Contact.module.css';
import { ImPhone, ImUser } from 'react-icons/im';

const Contact = ({ contact: { id, name, number }, deleteContacts }) => {
  return (
    <>
      <div className={css.textWrap}>
        <div className={css.dataWrap}>
          <ImUser className={css.icon} size="24" />
          <p className={css.contactName}>{name}</p>
        </div>
        <div className={css.dataWrap}>
          <ImPhone className={css.icon} size="20" />
          <p className={css.contactPhone}>{number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.deleteContactBtn}
        onClick={() => deleteContacts(id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
