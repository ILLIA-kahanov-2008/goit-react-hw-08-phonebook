const BASE_USER_URL = `https://connections-api.herokuapp.com`;
const userSignUp = "/users/signup";
const userSignIn = "/users/login";
const userCurrent = "/users/current";
const userSignOut = "/users/logout";

export const signUp = async (user) => {
  const response = await fetch(BASE_USER_URL + userSignUp, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  console.log('APIsignUp response :>> ', response);
  const data = await response.json();
  
  return data;
}

export const signIn = async (user) => {
  try{
  const response = await fetch(BASE_USER_URL + userSignIn, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
  })
    console.log('APIsignIn response :>> ', response.status);
    if ( response.status === 400) throw new Error(response.status);
    const data = await response.json();
    return data;
  }
  catch ({message}) {
    console.log('APIsignIn.catch error.message :>> ', message);
    return message;
  }  
}
export const signOut = async (token) => {
  try {
    const response = await fetch(BASE_USER_URL + userSignOut, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('APIsignOut response :>> ', response.status);
    if ( response.status !== 200) throw new Error(response.status);
    const data = await response.json();
    console.log('APIsignOut data :>> ', data);
      return data
    }
  catch ({message}) {
    console.log('APIsignOut.catch error.message :>> ', message);
    return message      
    }
}

export const setCurrentUser = async (token) => {
    try {
      const response = await fetch(BASE_USER_URL + userCurrent, {
        headers: {
          Authorization: `Bearer ${token}`,
           "Content-Type": "application/json",
        },
      });
        console.log('APIsetCurrent response :>> ', response.status);
      const data = await response.json();
      console.log("APIsetCurrent data", data); // { user: {name: "", email: ""}}
      return data; // action.payload
    } catch ({message}) {
    console.log('APIsetCurrent.catch error.message :>> ', message);
    return message      
    }
  }

