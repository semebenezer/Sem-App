import code from "./img/about-03f57d6e.svg"
import {Container,Typography,Button,Grid} from "@mui/material"
export default function Tech(){
    return(
      <div className="code">
      <div className="container">
      <Grid container spacing={2} >
        {/* Item 1 */}         
        <Grid itemsm={12} md={6} >    
        <img src={code} alt="" width={300} height={300}/>
        </Grid>
        {/* Item 2 */}
        <Grid item  sm={12} md={6} > 
        <Typography  variant="h3"
        >
             Coding and Coffee
            </Typography>
            <hr className="my-4 border-secondary p-2 border-1"></hr>
            <Typography variant="subtitle1">
                <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis corporis porro neque rem ex dolor, voluptas excepturi distinctio reprehenderit est fuga animi modi, ullam architecto labore eligendi a. Tempore, perspiciatis?</p>
            </Typography>
          <Button size="large" variant="contained" color="primary">
         Read more..
          </Button>  
        </Grid> 
      </Grid>
      </div>
      </div>
    )
}