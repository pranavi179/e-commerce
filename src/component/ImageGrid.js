import React from 'react';
import { Grid } from '@material-ui/core';

export default function ImageGrid( { images , onSelect , selectedImage}) {
    return (
        <Grid container direction="column">
        { images.map((image ,index) => (
            <img src = { image } height = {200} onClick={() => onSelect(index)} style = {{ border:index === selectedImage, }}  />
        ) ) }
        </Grid>   
        
    );
}
  