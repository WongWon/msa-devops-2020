import React from 'react';
import 'fontsource-roboto';
import Number from './Components/Number/Number'
import './App.css';
import { Typography} from '@material-ui/core';


function App() {

  return (
    <div className = 'App'> 
          <Typography className="header" 
            variant  = "h1">
               Number Facts
          </Typography>
      <Number />
    </div>
  );
}

export default App;
