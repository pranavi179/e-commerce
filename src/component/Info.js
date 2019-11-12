import React from 'react';
import { Grid , Box , Typography, Button , Divider } from '@material-ui/core';
// import {   } from 'material-ui';

export default function Info( {title,description , price , category }) {
    return (
    <Grid container direction = "column" style = {{ height :'100%'}} >
        <Typography variant = "subtitle1">
            {category}
        </Typography>
        <Divider />
        <Box mt={2}>
        <Typography variant = "h4">
            {title}
        </Typography>
        <Typography variant = "subtitle1">
            {description}
        </Typography>
        <Typography variant = "h5">
            {price}$
        </Typography>

        </Box>
        <Button variant = "contained" color = "primary " style = {{ marginTop : "auto" }}>
            Purchase 
        </Button>

    </Grid>
    );
}

