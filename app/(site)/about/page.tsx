import React from "react";
import Image from "next/image";
import { getAbout } from "../../../sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default async function About() {
  const about = await getAbout();
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
}
