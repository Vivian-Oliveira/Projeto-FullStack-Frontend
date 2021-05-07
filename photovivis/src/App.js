import React, { useState } from "react"
import Router  from "./routes/Router"
import theme from "./constants/theme"
import { ThemeProvider } from "@material-ui/styles"
import Header from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonTest, setRightButtonTest] = useState(!token? "Logout" : "Login")


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
         <Header rightButtonTest={rightButtonTest} setRightButtonTest={setRightButtonTest}/>
         <Router setRightButtonTest={setRightButtonTest}/>
      </BrowserRouter>
     
    </ThemeProvider> 
  )
}

export default App;
