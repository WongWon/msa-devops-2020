import React, { useState } from  'react';
import Condition from '../Condition/Condition'
import  './Number.css';

import { TextField, Button, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
      background: 'linear-gradient(60deg, #4527A0 30%, #BA68C8 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 50,
      padding: '0 30px',
    },

  });

const Number = () => {
    const classes = useStyles();
    let [number, setNumber] = useState('')
    let [responseObj, setResponseObj] = useState(Object);

    const uriEncodedNumber = encodeURIComponent(number)


    function getNumber(e: { preventDefault: () => void; }) {
        e.preventDefault();
           fetch(
                `http://numbersapi.com/${uriEncodedNumber}/trivia?json`)
            .then(responseObj =>
                responseObj.json())
            .then(responseObj => {
                setResponseObj(responseObj)
            })
        } 

    return (
        <div className = "responseContainer">

            <Condition responseObj = {responseObj}/>

            <Container>
            <form onSubmit={getNumber} id = "formContainer">
                    <TextField
     
                    id = "numberInput"
                    label = "Number"
                    type = "number"
                    InputProps={{
                        inputProps: { 
                            max: 100, min: 0 
                        }
                    }}
                    placeholder="Enter Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}/>


                    <Button
                    type = "submit"
                    variant = "contained"
                    size = "small"
                    color = "primary"
                    id = "submitButton"
                    className={classes.button}>
                        Get Number Fact
                    </Button>

            </form>

            </Container>
       </div>
    )
}

export default Number