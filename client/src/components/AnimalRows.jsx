import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import PetIcon from "@mui/icons-material/Pets";

const AnimalRows = ({ id, species, name }) => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 0.5fr",
          alignItems: "center",
          gap: "16px",
          mb: 2,
        }}
      >
        <Typography variant="subtitle1" sx={{ gridColumn: "1/2" }}>
          {species}
        </Typography>
        <Typography variant="subtitle1" sx={{ gridColumn: "2/3" }}>
          {name}
        </Typography>
        <Button
          variant="contained"
          sx={{
            maxHeight: "50px",
            backgroundColor: "#55123B",
            gridColumn: "3/4",
            "&:hover": {
              backgroundColor: "#7f1958",
            },
          }}
        >
          <Link
            to={`/animal/${id}`}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Show details
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default AnimalRows;
