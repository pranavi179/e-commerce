import React, { Component , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
// import { CardMedia } from 'material-ui';
import Typography from '@material-ui/core/Typography';
import ImageGrid from './ImageGrid';
import MainImage from './MainImage';
import Info from './Info';
// import {useState, setSelectedImage, selectedImage } from 'react';

// import Image from './images';

const images = [
    " https://thenypost.files.wordpress.com/2019/09/somethings-killing-galaxys2.jpg?quality=90&strip=all&w=618&h=410&crop=1",
    "https://media3.s-nbcnews.com/j/newscms/2018_21/2443266/180524-milky-way-mn-1418_d5ad12146e1dcb198ab0bea429dcd58b.fit-760w.jpg"
 ];



 
export default class Product extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            product:{
                ptitle:'',
                pprice:'',
                pimage:'',
                pdescription:'',
                pfeautres:''
            }
            

         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
 
    }
    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value,
            value:e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('the product form was submitted with data below' + this.state.value);
        console.log(this.state);
    }
    // const [selectedImage,setSelectedImage] = useState(0);
            
    render() {
        return (
            
            <div className = "App">
                
                <Grid container>
                    <Grid item sm = {1} >
                        <ImageGrid  images = { images } />

                    </Grid>
                    <Grid item sm = {5} >
                        <MainImage src = {images[selectedImage]} />
                    </Grid>
                    <Grid item sm = {6} >
                        <Info />
                    </Grid>
                    
                </Grid>
                {/* <Image src = { this.state.image} /> */}
                
            
                    <div className = "FormCenter">
                          <form onSubmit= {this.handleSubmit} className = "FormField" >
       
              {/* <div className = "FormField"> */}
                                <div>
                                    <label className = "FormField__Label" htmlFor="name">Product title</label>
                                    <input type= "text" 
                                    id = "name"
                                    className="FormField__Input"
                                    placeholder = "Product title"
                                    name = "name" 
                                    value={this.state.ptitle} 
                                    onChange= {this.handleChange }/>
                                </div>
                                </form>
       
                <Card>
                <CardContent>
                    <h1>pranavi </h1></CardContent>
                    {/* <CardMedia>
                          image="./images/elon.jpg",
                                                
                    </CardMedia> */}
                    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
                </Card>
         </div>
     </div>
            
               
        );
    }
}

