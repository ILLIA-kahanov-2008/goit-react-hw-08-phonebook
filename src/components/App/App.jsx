import { Link, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { PrivateRoute } from '../../routes/PrivateRoute';
import { PublicRoute } from '../../routes/PublicRoute';
import AppHeader from '../AppHeader/AppHeader';
import HomePage from '../../pages/HomePage';
import SignUp from '../SignInUp/SignUp';
import SignIn from '../SignInUp/SignIn';
import ContactsPage from '../../pages/ContactsPage';

import {
  getIsUserAuth,
  getIsUserToken,
  getIsFetchCurrentUser,
} from '../../redux/authorizations/auth-selectors';
import { setCurrentUserThunk } from '../../redux/authorizations/auth-thunks';

// import { useToggle } from '../../hooks/useToggle';
// import { resetError } from '../../redux/phoneBook/phoneBook-actions';
import LoaderComponent from '../Loader/Loader';
// import Modal from '../Modal/Modal';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './App.css';

function App() {
  // const [showModal, setShowModal] = useToggle(false);

  const isAuth = useSelector(getIsUserAuth);
  const isToken = useSelector(getIsUserToken);
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser)
  console.log('APP isToken :>> ', isToken);
  console.log('APP isAuth :>> ', isAuth);
  const dispatch = useDispatch();
  // const error = useSelector(getError);

  useEffect(() => {
    isToken && dispatch(setCurrentUserThunk());
  }, [dispatch]);

  // useEffect(() => {
  //   error !== null && setShowModal();
  // }, [error]);

  // useEffect(() => {
  //   !showModal && dispatch(resetError());
  // }, [showModal]);

  return (
    <div className="App">
      {!isFetchCurrentUser ?
        <>
      <AppHeader />

      <Routes>
        <Route
          path="/"
          element={<PublicRoute isAuth={isAuth} component={HomePage} />}
        />

        <Route
          path="/contacts"
          element={<PrivateRoute isAuth={isAuth} component={ContactsPage} />}
        />
        <Route
          path="/signUp"
          element={<PublicRoute isAuth={isAuth} component={SignUp} restricted/>}
        />

        <Route
          path="/signIn"
          element={<PublicRoute isAuth={isAuth} component={SignIn} restricted/>}
        />
      </Routes>
        </>
        :
         <LoaderComponent />
}
      
      
       {/* <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute isLoggedIn={isLoggedIn} 
                  component={HomeView} />
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute
                    isLoggedIn={isLoggedIn}
                    component={RegisterView}
                    restricted
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute
                    isLoggedIn={isLoggedIn}
                    component={LoginView}
                    redirectTo="/contacts"
                    restricted
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    component={ContactsView}
                  />
                }
              />
            </Routes> */}
      
      {/*
     
     
      {loading && (
        <Modal closeModal={setShowModal}>
          <LoaderComponent />
        </Modal>
      )}
      {showModal && (
        <Modal closeModal={setShowModal}>
          <ErrorMessage errorText={error} onClose={setShowModal} />
        </Modal>
      )} */}
    </div>
  );
}
export default App;

// {/* <Route path="/" element={<HomePage />} /> */}
//         {/* <Route path="/contacts" element={<ContactsPage />} /> */}
//         {/* <Route path="/signIn" element={<SignIn />} /> */}
//         {/* <Route path="/signUp" element={<SignUp />} /> */}
//         {/* <Route path="/auth/:authType" element={<AuthPage />} props /> */}

//  <div className="App">
//
//       <main>
//         {/* Switch => Routes
//         exact => -
//         component => element */}
//         <Routes>

// <Route
//   path="/login"
//   element={<PublicRoute isAuth={isAuth} component={Login} />}
// />
//           <Route
//             path="/register"
//             element={<PublicRoute isAuth={isAuth} component={Register} />}
//           />
//         </Routes>
//       </main>
//     </div>

// <PublicRoute exact path="/">
//                 <HomeView />
//               </PublicRoute>
//               <PublicRoute exact path="/register" restricted>
//                 <RegisterView />
//               </PublicRoute>
//               <PublicRoute exact path="/login" redirectTo="/todos" restricted>
//                 <LoginView />
//               </PublicRoute>
//               <PrivateRoute path="/todos" redirectTo="/login">
//                 <TodosView />
//               </PrivateRoute>
//               <PrivateRoute path="/upload" redirectTo="/login">
//                 <UploadView />
//               </PrivateRoute>
