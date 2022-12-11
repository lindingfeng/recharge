/* eslint-disable */
const project = import.meta.env.VUE_APP_PROJECT || 'base'

export const getToken = () => {
  return window.localStorage.getItem(`${project}_tc`) || '';
};

export const setToken = token => {
  window.localStorage.setItem(`${project}_tc`, token);
};

export const clearToken = () => {
  window.localStorage.removeItem(`${project}_tc`);
};

export const getUserInfo = (key) => {
  const data = window.localStorage.getItem(`${project}_ui`) || '{}'
  try {
    if (key) {
      return JSON.parse(data)[key] || '';
    }
    return JSON.parse(data)
  } catch (error) {
    if (key) {
      return '';
    }
    return {}
  }
};

export const setUserInfo = (userInfo = {}) => {
  userInfo && window.localStorage.setItem(`${project}_ui`, JSON.stringify(userInfo));
};

export const clearUserInfo = () => {
  clearToken();
  window.localStorage.removeItem(`${project}_ui`);
};
