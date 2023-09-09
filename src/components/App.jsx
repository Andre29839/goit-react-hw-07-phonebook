import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selector';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.conteiner}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      {contacts.length === 0 ? (
        <p>You didn't have any contacts yet</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};
