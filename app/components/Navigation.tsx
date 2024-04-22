"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import { grey } from "@mui/material/colors";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  function openMenu() {
    setIsOpen(true);
  }
  function closeMenu() {
    setIsOpen(false);
  }

  React.useEffect(() => {
    const closeOnEscapePressed = (e: KeyboardEvent) => {
      // console.log(e.key);
      if (e.key === "Escape") {
        closeMenu();
      }
    };
    document.addEventListener("keydown", closeOnEscapePressed);
    return () => document.removeEventListener("keydown", closeOnEscapePressed);
  }, []);
  const navItems = [
    { key: 1, tab: "About", slug: "about" },
    { key: 2, tab: "Projects", slug: "projects" },
    { key: 3, tab: "Calendar", slug: "calendar" },
  ];
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", color: "black", my: 5, p: 2 }}
      elevation={0}
    >
      <Toolbar>
        <Typography
          variant="h2"
          component="div"
          sx={{ flexGrow: 1, bgColor: "red" }}
        >
          <Link href="/">Shu Yang Lin</Link>
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Link key={item.key} href={`/${item.slug}`}>
              <Button
                disableRipple
                size="large"
                sx={{ color: "#000", "&:hover": { bgcolor: grey[100] } }}
              >
                {item.tab}
              </Button>
            </Link>
          ))}
        </Box>
        <IconButton
          disableRipple
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: "flex", sm: "none" },
          }}
          onClick={openMenu}
        >
          <MenuIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <Dialog open={isOpen} fullScreen>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ textAlign: "center" }} onClick={closeMenu}>
              <CloseIcon sx={{ fontSize: 35, mt: 10 }} />
            </Box>
            {navItems.map((item) => (
              <Link key={item.key} href={`/${item.slug}`}>
                <Button
                  onClick={closeMenu}
                  disableRipple
                  key={item.key}
                  sx={{
                    p: 3,
                    mt: 2,
                    width: "100vw",
                    color: "#000",
                    "&:hover": { bgcolor: grey[100] },
                  }}
                >
                  {item.tab}
                </Button>
              </Link>
            ))}
          </Box>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
}
