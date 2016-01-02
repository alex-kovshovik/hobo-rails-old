export const SET_USER = 'SET_USER';

export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}

export function loadUser(url) {
  return dispatch => {
    $.get(url, (result) => {
      dispatch(setUser(result));
    });
  }
}
