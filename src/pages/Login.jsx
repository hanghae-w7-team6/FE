import React from "react";
import Header from "../Common/Header/Header";
import Layouts from "../Common/Layout";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <>
      <Header />
      <Layouts>
        <LoginForm />
      </Layouts>
    </>
  );
};

export default Login;
