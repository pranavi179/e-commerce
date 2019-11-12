import React from 'react';
// import { ImageSlideshow } from 'material-ui/svg-icons'
import { Grid } from "@material-ui/core";

export default function MainImage({src}) {
    return (
        <div>
            <img src = { src} width = "100%"/>
        </div>
    );
}
