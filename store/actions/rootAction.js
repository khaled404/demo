export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const GET_NAME = 'GET_NAME';
export const ADD_NAME = 'ADD_NAME';
export const ADD_NAME_NO = 'ADD_NAME_NO';
export const ADD_OFFINLE = 'ADD_OFFINLE';
export const ADD_OFFINLE_2 = 'ADD_OFFINLE_A7A';
var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Content-Type', 'application/json');
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const plus = () => {
  return {
    type: PLUS,
  };
};
export const minus = () => {
  return {
    type: MINUS,
  };
};
export const getName = () => {
  return async dispatch => {
    fetch('https://5e5ce32297d2ea0014796e28.mockapi.io/name', requestOptions)
      .then(response => response.json())
      .then(result => dispatch({type: GET_NAME, nameList: result}))
      .catch(error => console.log(error));
  };
};
export const addName = name => ({
  type: ADD_NAME_NO,
  name: name,
  meta: {
    offline: {
      // the network action to execute:
      effect: {
        url: 'https://5e5ce32297d2ea0014796e28.mockapi.io/name',
        method: 'POST',
        json: {name},
      },
      // action to dispatch when effect succeeds:
      commit: {type: ADD_OFFINLE, name: name},
    },
  },
});
