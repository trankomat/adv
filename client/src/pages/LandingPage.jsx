import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import EastIcon from "@mui/icons-material/East";

import Categories from "../constants/Categories";

const iconStyle = {
  position: "absolute",
  top: "20px",
  right: "50px",
  transform: "rotate(-30deg)",
  fontSize: "10rem",
  opacity: 0.4,
};

const LandingPage = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
      maxWidth="lg"
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" mt={3}>
          Vítej na bazaru
        </Typography>
        <Typography variant="h6" mt={3}>
          Vyber si kategorii
        </Typography>
      </Box>

      <Grid container justifyContent="center" spacing={2} alignItems="center">
        {Categories.map((category) => (
          <Grid item xs={12} sm={12} md={6} key={category.id}>
            <Link to={category.path} style={{ textDecoration: "none" }}>
              <Paper
                sx={{
                  transition: "transform 250ms",
                  boxShadow:
                    "inset 0 30px 35px -20px  rgba(0, 0, 0, 0.35) , inset 0 -30px 35px -20px  rgba(0, 0, 0, 0.35)",
                  height: "250px",
                  backgroundColor: category.bgColor,
                  background: `linear-gradient(45deg, ${category.bgColor} 30%, rgba(255,255,255, 0.01) 500%)`,
                  color: category.color,
                  borderRadius: "10px",
                  wordWrap: "break-word",
                  p: 1,
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    height: "100%",

                    pl: 2,
                    pr: 2,
                    position: "relative",
                  }}
                >
                  <Typography variant="h4" mt={3}>
                    {category.name}
                  </Typography>
                  {React.cloneElement(category.icon, { sx: iconStyle })}
                  <Box sx={{ alignSelf: "flex-end" }}>
                    <EastIcon sx={{ fontSize: 50 }} />
                  </Box>
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingPage;
