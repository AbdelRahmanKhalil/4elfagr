import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroSection from "../components/HeroSection";
import Zoom from '@mui/material/Zoom';
function home() {
    const [checked, setChecked] = React.useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleEnter = () => {
    setChecked(true);
  };
    const handleExit = () => {
      setChecked(false);
    }
  
    useEffect(() => {
      console.log(`scrollPosition=${scrollPosition}`)
      if(scrollPosition>1300)
      handleEnter()
      else if(scrollPosition<1300)
      handleExit()
    }, [scrollPosition])  
  return (
    <div>
        <HeroSection title="Changing the arabic music scene forever." video="/video-3.mp4"/>
          <HeroSection video="/video-4.mp4"/>
          {/* <Box ml={2} mt={5}> */}
          {/* <Typography align='left' variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Listen
          </Typography> */}
          {/* </Box> */}
          
          {/* <iframe src="https://widget.anghami.com/artist/6083539/?theme=fulllight&layout=list&lang=en" scrolling="no" frameBorder="0" width="100%" height={300} ></iframe> */}
          <Zoom in={checked}>
          <iframe src="https://widget.anghami.com/artist/6083539/?theme=fulllight&layout=list&lang=en" scrolling="no" frameBorder="0" width="100%" height="200" ></iframe>
          </Zoom>
          <Zoom in={checked} style={{ transitionDelay: checked ? '250ms' : '0ms' }}>
          <iframe src="https://open.spotify.com/embed/artist/5OohOwlYO1awBrbL71R4fv" width="100%" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </Zoom>
    </div>
  )
}

export default home