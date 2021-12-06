
export const getIsUserAuth = state => state.userAuth.isUserAuth;
export const getUserName = state => state.userAuth.user.name;
export const getIsUserToken = state => !!state.userAuth.token;
export const getUserEmail =  state => state.userAuth.user.email;
export const getIsFetchCurrentUser = state => state.userAuth.isFetchCurrentUser