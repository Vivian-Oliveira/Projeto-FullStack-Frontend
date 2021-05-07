import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from "./styled"
import { goToImageList, goToLogin } from '../../routes/coordinator';
import { useHistory } from "react-router-dom"
import useProtectedPage from '../../hooks/useProtectedPage'


 const Header = ({rightButtonTest, setRightButtonTest}) => {
    useProtectedPage()
    const token = localStorage.getItem("token")
    const history = useHistory()

    const logout = () => {
      localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
      if(token){
        logout()
        setRightButtonTest("Login")
        goToLogin(history)
      } else {
        goToLogin(history)
      }
    }
  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToImageList(history)} color="inherit">Photo-Grid</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonTest}</Button>
        </StyledToolbar>
      </AppBar>
  );
}
export default Header