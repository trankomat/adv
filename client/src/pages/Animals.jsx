import React from "react";
import AnimalRows from "../components/AnimalRows";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Animals = () => {
  const useEffectRef = useRef(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    if (!useEffectRef.current) {
      useEffectRef.current = true;
      axios.get("http://localhost:8080/step").then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ccc",
          pb: 2,
          mb: 2,
        }}
      >
        <Typography variant="h3" component="h1" sx={{ color: "#7f1958" }}>
          Animals
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#9E216A",
            color: "#fff",
            maxHeight: "30px",
            maxWidth: "100px",
            "&:hover": {
              backgroundColor: "#7f1958",
            },
          }}
        >
          <Link to="new" style={{ color: "white" }}>
          Add new
          </Link>
        </Button>
      </Box>
     
       {isLoading ? (
  <Typography
    variant="h3"
    component="h1"
    sx={{ color: "#7f1958", alignSelf: "center" }}
  >
    Loading...
  </Typography>
) : (
  <>
   <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 0.5fr",
      alignItems: "center",
      borderBottom: "1px solid #ccc",
      pb: 2,
      mb: 2,
    }}
  >
    <Typography variant="h6" component="h1" sx={{ color: "#7f1958" }}>
      Species
    </Typography>
    <Typography variant="h6" component="h1" sx={{ color: "#7f1958" }}>
      Name
    </Typography>
    <Typography variant="h6" component="h1" sx={{ color: "#7f1958" }}>
      Actions
    </Typography>
  </Box>
  {data.data.map((item) => (
    <AnimalRows
      key={item._id}
      id={item._id}
      name={item.name}
      species={item.species}
    />
  ))}
  </>
)}

    </Container>
  );
};

export default Animals;
