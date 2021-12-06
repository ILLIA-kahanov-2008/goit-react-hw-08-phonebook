import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/phoneBook/contacts-thunks';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number};
    dispatch(addNewContact(newContact));
    resetFormInputs();
  };

  const resetFormInputs = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            placeholder="Enter new contact name"
          />
        </label>
        <label>
          <p>Number</p>
          <input
            className="input"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            placeholder="Enter new contact number"
          />
        </label>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
export default ContactForm;


// ----Repeta's

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import todosOperations from '../../redux/todos/todos-operations';
// import styles from './TodoEditor.module.css';

// class TodoEditor extends Component {
//   state = {
//     message: '',
//   };

//   handleChange = e => {
//     this.setState({ message: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.message !== '') {
//       this.props.onSubmit(this.state.message);
//       this.props.onSave();
//       this.setState({ message: '' });
//       return;
//     }

//     alert('Заполни текст заметки.');
//   };

//   render() {
//     return (
//       <form className={styles.editor} onSubmit={this.handleSubmit}>
//         <textarea
//           className={styles.textarea}
//           value={this.state.message}
//           onChange={this.handleChange}
//         ></textarea>
//         <button type="submit" className={styles.button}>
//           Сохранить
//         </button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onSubmit: text => dispatch(todosOperations.addTodo(text)),
// });

// export default connect(null, mapDispatchToProps)(TodoEditor);