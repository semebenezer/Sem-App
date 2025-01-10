import image from "./img/hero-01dff752.svg"
import React from 'react';
import { Grid, Typography,Container,Button} from '@mui/material';

const ResponsiveGrid = () => {
  return (
    <div className="hero">
    <Container>
    <Grid container spacing={2}>
      {/* Item 1 */}
      <Grid item xs={12} sm={6} md={6} className="f">
       
      
        
       
          <Typography gutterBottom variant="h1" component="div" className="sem pt-5" sx={{
        fontSize: {
          xs: '2.5rem', // 600px and down
          sm: '2rem',   // 600px to 900px
          md: '2.5rem', // 900px to 1200px
          lg: '4rem',   // 1200px to 1536px
          xl: '6rem', // 1536px and up
        },fontWeight:"bold"
      }}>
           I'm Sem
          </Typography>
          <Typography variant="h5" sx={{ letterSpacing: "0.3rem" }}>
              <h5 className="text-muted lh-lg ">Fullstack Developer</h5>
          </Typography>
          <Typography variant="subtitle1">
              <p className="text-muted">Turning Ideas Into Interative Reality</p>
          </Typography>
    
     
        <Button size="large" variant="contained" color="primary">
       Read more..
        </Button>
  
   
       
      </Grid>

      {/* Item 2 */}
      <Grid item xs={12} sm={6} md={6} sx={{paddingTop: "6rem"}}>
      
      
        <img src={image} alt="" />


     
      </Grid>

    </Grid>
    </Container>
    </div>
  );
};

export default ResponsiveGrid;