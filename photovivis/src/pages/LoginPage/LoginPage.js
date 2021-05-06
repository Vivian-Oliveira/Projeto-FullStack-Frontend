import React from "react";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";
import LoginForm from "./LoginForm";

const LoginPage = (props) => {
  useUnProtectedPage()
  return (
    <div>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
