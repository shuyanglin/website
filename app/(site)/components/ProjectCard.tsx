import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  title,
  type,
  oneliner,
  imgUrl,
  slug,
}: {
  title: string;
  type: string;
  oneliner: string;
  imgUrl: string;
  slug: string;
}) => {
  return (
    <Card sx={{ mt: 3 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {type}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {oneliner}
        </Typography>
        <Image
          src={imgUrl}
          width={1500}
          height={200}
          alt={`cover image for ${title}`}
        />
      </CardContent>
      <CardActions>
        <Link href={`/projects/${slug}`}>
          <Button size="small" variant="outlined">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
