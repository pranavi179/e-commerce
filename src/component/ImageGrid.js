import React from 'react';
import { Grid } from '@material-ui/core';

export default function ImageGrid( { images }) {
    return (
        <Grid container>
        { images.map(image => (
            <img src = { image } height = {200}  style = {{ border:" solid #eee gray ", cursor:"pointer "}}  />
        ))}
        </Grid>
        
    );
}
