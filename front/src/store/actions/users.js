import axios from "axios";
import { GET_USER, LOG_USER, SET_HISTORIAL } from "../constants/index";
import { getCart, emptyCart, syncCart } from "./cart";

const getUser = user => ({
  type: GET_USER,
  user
});

const logUser = logUser => ({
  type: LOG_USER,
  logUser
});
export const setHistorial = historial => ({
  type: SET_HISTORIAL,
  historial
});

export const signUpUser = user => dispatch => {
  if (!user.password.length) throw Error("No password");
  return axios
    .post("/api/users", user)
    .then(user => true)
    .catch(err => {
      throw err;
    });
};

export const fetchUser = () => dispatch =>
  axios.get("/api/sessions").then(user => {
    dispatch(getUser(user.data));
    user.data.id && dispatch(getCart(user.data.id));
  });

export const loginUser = (username, password) => dispatch => {
  if (!password.length) throw Error("No password");
  return axios
    .post("/api/sessions", { username, password })
    .then(res => dispatch(logUser(res.data)))
    .then(() => dispatch(syncCart()))
    .then(() => dispatch(userHistorial()))
    .catch(err => {
      console.log(err);
      throw err;
    });
};

export const userHistorial = () => dispatch => {
  axios.get("/api/checkout/historial").then(res => {
    dispatch(setHistorial(res.data));
  });
};

export const userLogOut = () => dispatch => {
  axios
    .delete("/api/sessions")
    .then(() => {
      dispatch(getUser({}));
    })
    .then(() => dispatch(emptyCart(true)))
    .catch(error => console.error(error));
};
