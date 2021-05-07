import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import ImageListPage from "../pages/ImageListPage/ImageListPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddImagePage from "../pages/AddImagePage/AddImagePage";

const Router = ({ setRightButtonTest}) => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <LoginPage setRightButtonTest={setRightButtonTest}/>
      </Route>
      <Route exact path={"/signup"}>
        <SignupPage setRightButtonTest={setRightButtonTest} />
      </Route>
      <Route exact path={"/"}>
        <ImageListPage />
      </Route>
      <Route exact path={"/create-image"}>
        <AddImagePage />
      </Route>
      <Route exact path={"/detail/:id"}>
        <DetailsPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
