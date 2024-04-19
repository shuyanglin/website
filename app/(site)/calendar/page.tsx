import { getCalendars } from "@/sanity/sanity-utils";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
const Calendar = async () => {
  const calendars = await getCalendars();
  return (
    <>
      <Typography variant="h3">Calendar</Typography>
      <Grid
        container
        sx={{
          fontWeight: 700,
          mt: 2,
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          p={1}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Box>Topic</Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          p={1}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Box>Dates</Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          p={1}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Box>Type</Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          p={1}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Box>Organisation</Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={1}
          p={1}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Box>Location</Box>
        </Grid>
      </Grid>
      {calendars.map((calendar) => (
        <Grid container key={calendar.id} sx={{ borderTop: 1 }}>
          <Grid item xs={12} md={4} p={1}>
            <Box>{calendar.topic}</Box>
          </Grid>
          <Grid item xs={12} md={2} p={1}>
            <Box>
              {calendar.startDate.replace(/-/g, "/")}{" "}
              {calendar.endDate
                ? `- ${calendar.endDate.slice(5).replace(/-/g, "/")}`
                : null}
            </Box>
          </Grid>
          <Grid item xs={12} md={2} p={1}>
            <Box>{calendar.type}</Box>
          </Grid>
          <Grid item xs={12} md={2} p={1}>
            <Box>
              {calendar.organisations?.map((org, index, { length }) => {
                if (length === index + 1) {
                  return (
                    <span key={org.id}>
                      <Link href={org.url ? org.url : ""}>{org.name}</Link>
                    </span>
                  );
                } else {
                  return (
                    <span key={org.id}>
                      <Link href={org.url ? org.url : ""}>{org.name}</Link> /{" "}
                    </span>
                  );
                }
              })}
            </Box>
          </Grid>
          <Grid item xs={12} md={2} p={1}>
            <Box>{calendar.location}</Box>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Calendar;
