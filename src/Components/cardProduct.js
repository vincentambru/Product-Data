import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { styled } from "@mui/material/styles";
import { Card, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { CardActionArea } from "@mui/material";
import ProductDetail from "./productDetail";
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles';
import { margin } from "@mui/system";
import AppHeader from './header';
import { useNavigate,useLocation } from 'react-router-dom';
import Context from '../Context'


export default function CardProduct(props) {
  // const { value, handleProductDetail } = props;
  const {value, setValue} = React.useContext(Context);

  const navigate = useNavigate()
 

const handleProductDetail = (data) => {
    navigate(`/productDetail/${data.id}`,{state:data})
};

  console.log("value", value);

  return (
    <div>
    <AppHeader />
    <Grid container spacing={2} style={{ padding: '10px',backgroundColor:'#f5f5f5'}}>
      {value.map((f) => (
        <Grid item lg={3} md={4} sm={4}>
          <Card
            onClick={() => handleProductDetail(f)}
            sx={{ minHeight: 100, minWidth: 100 }}
            style={{  }}
          >
            <Grid container spacing={3} textAlign={"center"}>
              <Grid item lg={12}>
                <img src={f?.image} alt={f?.image} width="100" height="100" style={{paddingTop:'10px'}}/>
              </Grid>
              <Grid item lg={12}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "350px",
                  }}
                >
                  {f.title}
                </Typography>
              </Grid>
              <Grid item lg={12} >
                <Box sx={{ width: 200, display: "flex", alignItems: "center" ,paddingLeft:'100px' }}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={f.rating.rate}
                    readOnly
                  />
                  <Box >{`(${f.rating.count})`}</Box>
                </Box>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  style={{ color: "red" }}
                >
                  {`₹ ${f.price}`}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
}
