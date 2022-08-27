import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroSection from "./components/HeroSection";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import Home from "./pages/home";
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#030304',
    },
    secondary: {
      main: '#ff0046',
    },
  },
});
function App() {
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Navbar>
          
          
        <Switch>
          <Route path='/' exact component= {Home} />
          {/* <Route path='/UI-Design-Trial/' exact component= {Home} />
          <Route path='/UI-Design-Trial/ProgressPage' exact component= {ProgressPage} /> */}
        </Switch>
        </Navbar>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

