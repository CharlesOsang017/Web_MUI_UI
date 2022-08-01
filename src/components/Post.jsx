import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';


const Post = () => {
  return (
    <Card sx={{margin: 6}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Charles Osango"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post