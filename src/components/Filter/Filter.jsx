import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filteringValue } from '../../redux/phoneBook/contacts-slice';
import { getFilter } from '../../redux/phoneBook/contacts-selectors';

import styles from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterInputOnChange = e =>
    dispatch(filteringValue(e.currentTarget.value));
  return (
    <label className={styles.filter}>
      <p className="label">Find contacts by name</p>
      <input
        className="input"
        type="text"
        name="filter"
        value={filter}
        onChange={filterInputOnChange}
        placeholder="Enter contact name"
      />
    </label>
  );
}

export default Filter;

// ----Repeta's

// import { useDispatch, useSelector } from 'react-redux';
// import { todosSelectors, changeFilter } from '../../redux/todos';
// import styles from './TodoFilter.module.css';

// export default function TodoFilter() {
//   const dispatch = useDispatch();
//   const value = useSelector(todosSelectors.getFilter);

//   return (
//     <div className={styles.filter}>
//       <p className={styles.label}>Фильтр по содержимому</p>
//       <input
//         type="text"
//         className={styles.input}
//         value={value}
//         onChange={e => dispatch(changeFilter(e.target.value))}
//       />
//     </div>
//   );
// }
