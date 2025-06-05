import { Avatar, Button, CardActions, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@mui/material/Collapse";
import CardMedia from "@mui/material/CardMedia";

const ExpandMore = styled(props => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)"
      }
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)"
      }
    }
  ]
}))

const Cards = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-center">Cards</h1>
      <div className="w-1/2">
        <Card>
          <CardContent>
            <h3 className="font-bold">Word of the Day</h3>
            <p>
              loremVelit consequat labore labore eiusmod irure quis sunt
              cupidatat et officia occaecat ea dolore exercitation. Consectetur
              enim duis incididunt consequat irure ipsum dolore proident officia
              mollit et duis ipsum sint. Cupidatat veniam veniam proident anim
              aliquip ipsum irure adipisicing voluptate velit sunt est labore.
              Et ut elit deserunt dolore occaecat nostrud pariatur voluptate
              nulla aliquip in aute labore non. Cillum eu nostrud nisi irure
              deserunt laboris minim officia aliquip aute dolore.
            </p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://mui.com/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <p>
              Qui cupidatat nulla tempor anim est aliquip ea exercitation culpa
              fugiat ullamco minim exercitation.
            </p>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <p>
                Commodo aute minim ullamco fugiat.Commodo aute minim ullamco
                fugiat.Commodo aute minim ullamco fugiat.Commodo aute minim
                ullamco fugiat.
              </p>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
