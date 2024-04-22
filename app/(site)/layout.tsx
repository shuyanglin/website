import type { Metadata } from "next";

import "../globals.css";
import theme from "@/theme";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import Navigation from "../components/Navigation";
// import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Shu Yang Lin || Personal Website",
  description: "NextJS + MUI + Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <Container>
              <Navigation></Navigation>
              <Box sx={{ m: 3, p: 2 }}>{children} </Box>
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
