import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { deepOrange } from '@mui/material/colors';


export default function RecipeReviewCard({comment}: any) {
     console.log(comment)

  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{comment.email[0]}</Avatar>
        }
        title={comment.email}
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
}