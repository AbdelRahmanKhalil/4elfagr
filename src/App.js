import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroSection from "./components/HeroSection";
import Container from "@mui/material/Container";
const theme = createTheme({
  palette: {
    type: 'light',
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
          <HeroSection title="Changing the arabic music scene forever." video="/video-3.mp4"/>
          <HeroSection video="/video-4.mp4"/>
          
          <iframe src="https://widget.anghami.com/artist/6083539/?theme=fulllight&layout=list&lang=en" scrolling="no" frameborder="0" width="100%" height={300} ></iframe>
          {/* <iframe src="https://widget.anghami.com/artist/6083539/?theme=fulllight&layout=list&lang=en" scrolling="no" frameborder="0" width={600} height={450} ></iframe> */}
          <iframe src="https://open.spotify.com/embed/artist/5OohOwlYO1awBrbL71R4fv" width="100%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          {/* <iframe frameborder="0" height="450" width="100%"  src="https://embed.music.apple.com/us/artist/4-el-fagr/1502946546"></iframe> */}
        <Switch>
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

