import { Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <>
      <Typography variant="h3">Projects</Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <ProjectCard
              title={project.name}
              type={project.type}
              oneliner={project.oneliner}
              imgUrl={project.image}
              slug={project.slug}
            ></ProjectCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
