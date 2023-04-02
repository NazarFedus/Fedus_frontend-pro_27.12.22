import * as React from 'react';
import { IPost } from '../scripts/interfaces';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({post}: {post: IPost}) {

     console.log(post)
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {post.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          UserId:{post.userId}
        </Typography>
        <Typography variant="body2">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
}