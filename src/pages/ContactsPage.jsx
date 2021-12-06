import React from 'react';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/phoneBook/contacts-thunks';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
// import {
//   getContacts,
//   getLoading,
//   getError,
// } from '../../redux/phoneBook/selectors';

export default function ContactsPage() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      <div className="Contacts">
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

// !!!add icon
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>

// -----Repeta's

// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Container from '../components/Container';
// import TodoList from '../components/TodoList';
// import TodoEditor from '../components/TodoEditor';
// import Filter from '../components/TodoFilter';
// import Stats from '../components/Stats';
// import Modal from '../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { todosOperations, todosSelectors } from '../redux/todos';

// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };

// export default function TodosView(params) {
//   const dispatch = useDispatch();
//   const isLoadingTodos = useSelector(todosSelectors.getLoading);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = () => setIsModalOpen(state => !state);

//   useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);

//   return (
//     <Container>
//       <div style={barStyles}>
//         <Filter />
//         <Stats />
//         <IconButton onClick={toggleModal} aria-label="Добавить todo">
//           <AddIcon width="40" height="40" fill="#fff" />
//         </IconButton>

//         {isLoadingTodos && <h1>Загружаем...</h1>}
//       </div>

//       <TodoList />

//       {isModalOpen && (
//         <Modal onClose={toggleModal}>
//           <TodoEditor onSave={toggleModal} />
//         </Modal>
//       )}
//     </Container>
//   );
// }
