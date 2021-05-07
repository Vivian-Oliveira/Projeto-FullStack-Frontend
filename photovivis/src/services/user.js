import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToImageList } from "../routes/coordinator";

export const login = (body, clear, history, setRightButtonTest) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear()
      goToImageList(history)
      setRightButtonTest("Logout")
    })
    .catch((err) => console.log(err.message));
};

export const signUp = (body, clear, history, setRightButtonTest)  => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToImageList(history)
        setRightButtonTest("Logout")
      })
      .catch((err) => console.log(err.message))
}