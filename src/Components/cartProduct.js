import React,{useState,useEffect} from 'react'
import {Card,Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Context from '../Context'
import { useNavigate,useLocation } from 'react-router-dom';
import AppHeader from './header';

export default function CartProduct(props) {
  // const {handleDeleteCart} = props
   const {cartData, setCartData} = React.useContext(Context);
    const navigate = useNavigate()
    // const { state:cartData } = useLocation();

    const handleSetCountIncrement=(index)=>{
      const tmp = [...cartData]
      const getIndex = tmp[index]
      getIndex.count = tmp[index].count+1
      setCartData(tmp)
      
    }

  const handleSetCountDecrement=(index)=>{
    const tmp = [...cartData]
    const getIndex = tmp[index]
    getIndex.count = tmp[index].count > 0 ? tmp[index].count -1 : 0
    setCartData(tmp)
    
  }

  const handleDeleteCart = (id) => {
    console.log("id",id)
    const deleteData = cartData.filter((f) => f.id !== id);
    console.log("id",deleteData)
    setCartData(deleteData)
    if(deleteData.length > 0){
      navigate(`/cartProduct`)
    }else{
      navigate(`/`)

    }

  }

  console.log('cartData!!!',cartData)
  return (
    <div>
      <AppHeader />
    
    <Grid container >
      {cartData?.map((f,i) => (

      <Grid item lg={12} style={{padding: '20px'}}>
        <Card sx={{ minHeight: 100, minWidth: 100 }} style={{backgroundColor:'#f5f5f5'}}>
          <Grid container spacing={3} justifyContent={'center'}>
            <Grid item lg={4} style={{padding:'50px'}}>
                <img src={f?.image} alt={f?.image} width="200" height="200" />
            </Grid>
            <Grid item lg={4} style={{paddingTop:'100px'}}>
              <Grid container spacing={3}>
                  <Grid item lg={12}>
                  <Typography variant="h4" component="div" style={{color: 'black'}}>
                      {f?.title}
                  </Typography>
                  </Grid>
                  
                  <Grid item lg={6}>
                  <Typography variant="h5" color="text.secondary" style={{color: 'red', fontWeight:"bold"}}>
                  {`₹ ${f?.price}`}
                  </Typography>
                  </Grid>

                  <Grid item lg={6}>
                  <Typography variant="h5" color="text.secondary" >
                  Quantity
                  </Typography><br/>
                  <Card sx={{ minHeight: 10, minWidth: 10 }}>
                  
                    <Grid container spacing={3}>
                      <Grid item lg={5} ><Button onClick={() => handleSetCountIncrement(i)} style={{color: 'black', fontWeight:"bold"}}><AddIcon/></Button></Grid>
                      <Grid item lg={2} >{f.count}</Grid>
                      <Grid item lg={5} ><Button onClick={() => handleSetCountDecrement(i)} style={{color: 'black', fontWeight:"bold"}}><RemoveIcon/></Button></Grid>
                    </Grid>
                    </Card>
                  </Grid>
                  
                </Grid>
              </Grid>
              <Grid item lg={4} style={{ textAlign:'right', padding:'50px'}}>
                {/* <Button variant="text" style={{color:'grey'}} onClick={() => handleDeleteCart(f.id)}>
                    <DeleteIcon />
                </Button> */}
                <Tooltip title="Delete">
                <IconButton>
                  <DeleteIcon onClick={() => handleDeleteCart(f.id)}/>
                </IconButton>
              </Tooltip>
              </Grid>
          </Grid>
          
          
          {/* <CardActionArea >
            <CardMedia
              component="img"
              style={{height: 100, width: 100, justifyContent: 'center'}}
              image={f.image}
              alt={f.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" style={{
                width:'500px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'
              }}>
                {f.title}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" style={{color: 'black'}}>
                {`₹ ${f.price}`}
              </Typography>
            </CardContent>
          </CardActionArea> */}
        </Card>
      </Grid>
      ))}
    </Grid>
    </div>
  )
}

 