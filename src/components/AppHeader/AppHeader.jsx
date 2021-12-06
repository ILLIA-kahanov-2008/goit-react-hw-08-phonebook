// import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthMenu/AuthMenu';
import {getIsUserAuth} from '../../redux/authorizations/auth-selectors'
import { useSelector } from 'react-redux';

import styles from './AppHeader.module.css';

export default function AppHeader() {
  const isAuth = useSelector(getIsUserAuth);
console.log('AppHeader isAuth :>> ', isAuth);
  return (
    <header className={styles.header}>      
      <Navigation />
      {isAuth ?  <UserMenu /> : <AuthNav/>      }
    </header>
  );
}


/* <header className="App-header">
//         <nav>
//      //  <ul>
// //             <li>
// //               <Link to="/">Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/login">Login</Link>
// //             </li>
// //             <li>
// //               <Link to="/register">Register</Link>
// //             </li>
// //             <li>
// //               <button type="button" onClick={handleLogout}>
// //                 Log Out
// //               </button>
// //             </li>
// //           </ul>
//         </nav>
//       </header> */


// ----Repeta's

// import { useSelector } from 'react-redux';
// import Navigation from './Navigation';
// import UserMenu from './UserMenu';
// import AuthNav from './AuthNav';
// import { authSelectors } from '../redux/auth';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

// export default function AppBar() {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <header style={styles.header}>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// }

