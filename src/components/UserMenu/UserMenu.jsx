import { useDispatch, useSelector } from 'react-redux';
import { getUserName, getUserEmail } from '../../redux/authorizations/auth-selectors';
// import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';
import { SignOutThunk } from '../../redux/authorizations/auth-thunks';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {

  const userEmail = useSelector(getUserEmail)
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;

   const handleLogout = () => {
    console.log(`click`);
    dispatch(SignOutThunk());
  };

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>{userEmail}</span>
      <button type="button" className="button" onClick={handleLogout}>
        SignOut
      </button>
    </div>
  );
}