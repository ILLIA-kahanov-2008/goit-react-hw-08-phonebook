import React from 'react';
import SignUp from "../components/SignInUp/SignUp";
import SignIn from "../components/SignInUp/SignIn";
import { useNavigate } from 'react-router';
// import { NavLink, Routes, Route } from "react-router-dom";

function AuthPage(props) {
  console.log('props :>> ', props);
  const navigate = useNavigate();

  console.log('navigate :>> ', navigate);

  return (
    <div>
      <SignUp />
      <SignIn />    
    </div>
  );
}

export default AuthPage;

{/* <section className={s.movieAddInfo}>
        <h2 className={s.movieAddInfoTitle}>
          Additional information about <p>'{original_title}'</p>
        </h2>
        <ul className={s.addInfoList}>
          <li className={s.addInfoItem}>
            <NavLink
              className="navLink"
              activeClassName="activeNavLink"
              to={{
                pathname: match.url + `/cast`,
                state: {
                  from: location.state?.from || '/movies',
                },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLink"
              activeClassName="activeNavLink"
              to={{
                pathname: match.url + `/reviews`,
                state: {
                  from: location.state?.from || '/movies',
                },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route exact path={match.path + '/cast'} component={Cast} />
        <Route path={match.path + '/reviews'} component={Reviews} />
      </section> */}