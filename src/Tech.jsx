import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import {Button,Grid,IconButton} from "@mui/material"
import ApiIcon from '@mui/icons-material/Api';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

export default function Tech(){
    return(
        <div className="Tech pt-5">
     <div className="container">
    <Typography variant="h4">
    Tech Stack
    </Typography>
    <hr className="my-4 border-secondary p-2 border-1"></hr>
    <Grid container spacing={2}>
      {/* Item 1 */}
      <Grid item xs={12} sm={6} md={4}>
         <IconButton color="primary"><ApiIcon fontSize="large"/></IconButton>
          <Typography variant="h5" >
              <h5 className="text-muted ">Design</h5>
          </Typography>
          <Typography variant="subtitle1">
              <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi iste veritatis a totam laborum temporibus assumenda dicta ratione repudiandae.</p>
          </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <IconButton color="primary"><GitHubIcon fontSize="large"/></IconButton>
          <Typography variant="h5" >
              <h5 className="text-muted ">Github</h5>
          </Typography>
          <Typography variant="subtitle1">
              <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum voluptates beatae a nulla velit expedita qui aut, repellat ad!</p>
          </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <IconButton color="primary"><CodeIcon fontSize="large"/></IconButton>
          <Typography variant="h5" >
              <h5 className="text-muted ">Coding</h5>
          </Typography>
          <Typography variant="subtitle1">
              <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam accusantium suscipit quos beatae doloremque quidem adipisci repellendus, neque temporibus laboriosam?</p>
          </Typography>
      </Grid>

    </Grid>
    </div>
    </div>
    )
}

