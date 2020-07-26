import React from 'react';
import 'fontsource-roboto';
import { Typography,Card,CardContent,makeStyles, Grid } from '@material-ui/core';
import './Condition.css';

const useStyles = makeStyles({
    numberCard: {
        background: '#673AB7',
        border: 0,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
        width: 500,
    },

  });

const Condition = (props: { responseObj: { found: boolean; text: React.ReactNode; }; }) => {
    const classes = useStyles();
    return (
       <div>
           {props.responseObj.found === true ?
           <Grid
                container spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
               <div className="content">
                <Card  className={classes.numberCard}>
                    <CardContent>
                        <Typography>
                            {props.responseObj.text}
                        </Typography>
                    </CardContent>
                </Card>
               </div>
           </Grid>
               
           : <div className="content">
               <Typography>Enter a number between 0-100 to learn a fun number fact!</Typography>
            </div>
           }
       </div>
   )
}
export default Condition;