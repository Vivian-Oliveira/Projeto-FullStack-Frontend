import React from "react";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";
import LoginForm from "./LoginForm";

const LoginPage = ({setRightButtonTest}) => {
  useUnProtectedPage()
  return (
    <div>
      <LoginForm setRightButtonTest={setRightButtonTest} />
    </div>
  );
};
export default LoginPage;
