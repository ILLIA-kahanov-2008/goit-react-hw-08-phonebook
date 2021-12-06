import { Navigate } from "react-router-dom";
export function PublicRoute({ isAuth, component: Component, restricted = false }) {
  
  const shouldRedirect = isAuth && restricted;
  return (
    <>
      <h1>PUBLIC</h1>
     

  {shouldRedirect ? <Navigate to="/contacts" /> : <Component />}
      {/* {!isAuth && <Component />} */}
    </>
  );
}


// import { Navigate } from "react-router-dom";

// export default function PublicRoute({
//   isLoggedIn,
//   component: Component,
//   restricted = false,
//   redirectTo,
// }) {
  // const shouldRedirect = isLoggedIn && restricted;

  // return <>{shouldRedirect ? <Navigate to={"/contacts"} /> : <Component />}</>;
// }
