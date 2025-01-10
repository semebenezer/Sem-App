import image1 from "./img/pexels-photo-6758398.jpeg"
import image2 from "./img/pexels-photo-2177482.jpeg"
import image3 from "./img/pexels-photo-4857775.jpeg"

import React from 'react';
import { Grid, Paper, Typography,Container,Card,CardActionArea,CardMedia,CardContent ,Button,CardActions} from '@mui/material';

const ResponsiveGrid = () => {
  return (
    <Container>
    <Grid container spacing={2}>
      {/* Item 1 */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{   }}>
        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </Paper>
      </Grid>

      {/* Item 2 */}
      <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} style={{  }}>
        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </Paper>
      </Grid>

      {/* Item 3 */}
      <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} style={{   }}>
        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </Paper>
      </Grid>

      {/* Item 4 */}
      <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} style={{  }}>
        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </Paper>
      </Grid>

      {/* Item 5 */}
      <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} style={{  }}>
        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </Paper>
      </Grid>

      {/* Item 6 */}
      <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} style={{   }}>
        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </Paper>
      </Grid>
    </Grid>
    </Container>
  );
};

export default ResponsiveGrid;