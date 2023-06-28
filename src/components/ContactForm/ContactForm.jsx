import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ handleSubmit }) => {
  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'contactName') {
      setContactName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    handleSubmit({ name: contactName, number });
    setContactName('');
    setNumber('');
  };

  const loginNameId = nanoid();
  const loginNumberId = nanoid();

  return (
    <div>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.label} htmlFor={loginNameId}>
          Name
        </label>
        <input
          onChange={handleChange}
          value={contactName}
          type="text"
          name="contactName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={loginNameId}
          required
        />

        <label className={css.label} htmlFor={loginNumberId}>
          Number
        </label>
        <input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={loginNumberId}
          required
        />
        <button className={css.formButton}>Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
