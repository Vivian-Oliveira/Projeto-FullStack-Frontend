import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from "./styled"
import { goToImageList, goToLogin } from '../../routes/coordinator';
import { useHistory } from "react-router-dom"
import useProtectedPage from '../../hooks/useProtectedPage'


 const Header = () => {
    useProtectedPage()
    const history = useHistory()
  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToImageList(history)} color="inherit">Photo-Grid</Button>
          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}
export default Header