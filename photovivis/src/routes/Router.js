import React from 'react'
import { BrowserRouter,  Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import ImageListPage from '../pages/ImageListPage/ImageListPage'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import AddImagePage from '../pages/AddImagePage/AddImagePage'
import Header from '../components/Header/Header'

const Router = (props) => {
    return(
        <BrowserRouter>
            < Header/>
            <Switch>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>
                <Route exact path={"/signup"}>
                    <SignupPage />
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
                <Route >
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router