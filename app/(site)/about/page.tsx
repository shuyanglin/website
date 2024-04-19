import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { getAbout } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

const About = async () => {
  const about = await getAbout();
  console.log("about:");
  console.log({ about });
  return (
    <>
      <Typography variant="h3">About</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box>
            <Image
              src={about.image}
              width={300}
              height={300}
              alt="Shu's cartoon avatar"
            ></Image>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <div style={{ marginTop: "1rem" }}>
              <div className="prose">
                <PortableText value={about.content}></PortableText>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
