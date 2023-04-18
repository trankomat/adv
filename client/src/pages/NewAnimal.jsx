import React from "react";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { StyledTextField } from "../components/StyledTextField";
import Fields from "../constants/AnimalFields";
import { useNavigate } from "react-router-dom";

const NewAnimal = () => {
  const navigate = useNavigate();
  useEffect(() => {});

  const [animal, setAnimal] = useState({
    name: "",
    species: "",
    color: "",
    legs: "",
    description: "",
  });

  const handleChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:8080/step", animal)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          navigate("/category/animals");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{ color: "#7f1958", textAlign: "center" }}
      >
        New animal advertisement
      </Typography>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          backgroundColor: "#212121",
        }}
      >
        {Fields.map((field) => (
          <StyledTextField
            key={field.id}
            id={field.id}
            label={field.label}
            variant="outlined"
            sx={{ width: "300px", mb: 2 }}
            name={field.name}
            value={field.value}
            multiline={field.multiline}
            rows={field.rows}
            onChange={handleChange}
          />
        ))}
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
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Container>
  );
};
export default NewAnimal;
