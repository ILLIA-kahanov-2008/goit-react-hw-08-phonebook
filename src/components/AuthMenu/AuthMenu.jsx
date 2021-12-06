import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/signUp" className="navLink">
        SignUp
      </NavLink>
      <NavLink to="/signIn" className="navLink">
        SignIn
      </NavLink>
    </div>
  );
}
