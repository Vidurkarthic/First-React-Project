import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuApBar from "./Navbar2";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import Footer2 from "./Footer2";

export default function Paintings() {
  return (
    <div>
    <div
      style={{
        backgroundImage: `url(${"https://st.depositphotos.com/1298561/4807/v/950/depositphotos_48071139-stock-illustration-doodle-baby-pattern-background.jpg"})`,
        height:"220vh",
      }}
    >
      <MenuApBar></MenuApBar>
      <Paper elevation={24} style={{marginLeft:"50px",marginRight:"50px",marginTop:"50px",backgroundColor:"transparent"}}>
      <br></br>
      <br></br>
      <Stack
        direction="row"
        spacing={4}
        sx={{marginLeft:"80px"}}
        >
        <Card elevation={12} sx={{ maxWidth: 380, maxHeight: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Stack>
      <br></br>
      <br></br>
      <Stack
        direction="row"
        spacing={4}
        sx={{marginLeft:"80px"}}
        >
        <Card elevation={12} sx={{ maxWidth: 380, maxHeight: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Stack>
      <br></br>
      <br></br>
      <Stack
        direction="row"
        spacing={4}
        sx={{marginLeft:"80px"}}
        >
        <Card elevation={12} sx={{ maxWidth: 380, maxHeight: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Stack>
      <br></br>
      <br></br>
      <Stack
        direction="row"
        spacing={4}
        sx={{marginLeft:"80px"}}
        >
        <Card elevation={12} sx={{ maxWidth: 380, maxHeight: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Painting is made Of famous artist
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartSharpIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Stack>
      <br></br>
      <br></br>
              </Paper>
    </div>
    <Footer2></Footer2>
    </div>
  );
}
