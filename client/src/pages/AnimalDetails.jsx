import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import PetIcon from "@mui/icons-material/Pets";
import Paper from "@mui/material/Paper";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const AnimalDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const useEffectRef = useRef(false);

  useEffect(() => {
    if (!useEffectRef.current) {
      useEffectRef.current = true;
      axios.get(`http://localhost:8080/step/${id}`).then((res) => {
        setData(res.data.data);
      });
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
          mt: 4,
          backgroundColor: "#212121",
        }}
      >
        <PetIcon sx={{ fontSize: 50, color: "white" }} />
        <Typography mt={3} variant="h5" sx={{ color: "white" }}>
          Animal details
        </Typography>
      </Paper>
      <Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            borderBottom: "1px solid #000",
            mb: 2,
            mt: 4,
            wordWrap: "break-word",
            p: 2,
            backgroundColor: "#212121",
          }}
        >
          {Object.entries(data).map(([key, value]) => (
  <Typography variant="h6" sx={{ color: "white" }} key={key}>
    <span style={{ color: "grey" }}>{key}: </span>
    {value}
  </Typography>
))}

          


        


        </Box>
      </Paper>
    </Container>
  );
};

export default AnimalDetails;
