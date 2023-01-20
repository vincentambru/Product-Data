import * as React from 'react';
import {Card,Grid} from '@mui/material';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Context from '../Context'
import { useNavigate,useLocation } from 'react-router-dom';
import AppHeader from './header';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function ProductDetail(props) {
    // const { productData  } = props
    const [open, setOpen] = React.useState(false);
    const {cartData, setCartData} = React.useContext(Context);
    const navigate = useNavigate()
    const { state:productData } = useLocation();
    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      const handleBack=()=>{
        navigate('/')
      }

      const handleCart=(data)=>{
        const temp = {...data,count:0}
       const filterTemp = [...cartData,temp]
        const filterData =  filterTemp.filter((f,i) => filterTemp.findIndex((f1)=> f1.id === f.id) === i) 
        setCartData([...filterData])

    }
    console.log('productData',productData)
  return (
    <div>
         <AppHeader />
        <Grid container spacing={3} justifyContent={'center'} style={{paddingTop:'20px'}}>
        
        <Grid item lg={5} style={{paddingLeft:'50px'}}>
            <img src={productData?.image} alt={productData?.image} width="500" height="550" />
        </Grid>
        <Grid item lg={5} style={{paddingTop:'100px'}}>
            <Grid container spacing={3}>
                <Grid item lg={12}>
                <Typography variant="h4" component="div" style={{color: 'black'}}>
                    {productData?.title}
                </Typography>
                </Grid>
                <Grid item lg={12}>
                <Box sx={{ width: 200, display: "flex", alignItems: "center"  }}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={productData?.rating.rate}
                    readOnly
                  />
                  <Box >{`(${productData?.rating.count})`}</Box>
                </Box>                </Grid>
                <Grid item lg={12}>
                <Typography variant="h5" color="text.secondary" style={{color: 'red', fontWeight:"bold"}}>
                {`₹ ${productData?.price}`}
                </Typography>
                </Grid>
                <Grid item lg={12}>
                <Typography variant="h6" color="text.secondary" style={{ maxWidth:'700px'}}>
                {productData?.description}
                </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Button variant="contained" style={{ backgroundColor:'orange',color:'white'}} onClick={() =>{ handleCart(productData); handleClick()}}>
                        ADD TO CART
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={2}>
        <Button variant="text" style={{ color:'red',textAlign:'right'}} onClick={() => handleBack()}>
                <KeyboardBackspaceIcon />   Back
        </Button>
        </Grid>
        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        severity="success"
      >
      <Alert severity="success" sx={{ width: '100%' }}>
    Item is added to cart !!
  </Alert>
  </Snackbar>

    </Grid>
    </div>
    
  )
}

 