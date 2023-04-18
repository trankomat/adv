import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import PetIcon from "@mui/icons-material/Pets";

const Furniture = ({ id, name }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1">{id}</Typography>
        </Box>
        <Typography variant="subtitle1">{name}</Typography>
        <Button
          variant="contained"
          sx={{
            maxHeight: "30px",
            maxWidth: "100px",
            backgroundColor: "#097B4B",
            "&:hover": {
              backgroundColor: "#0e9e6e",
            },
          }}
        >
          <Link
            to={`/animal/${id}`}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Details
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default Furniture;
