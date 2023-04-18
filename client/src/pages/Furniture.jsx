import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import PetIcon from '@mui/icons-material/Pets'
import FurnitureRow from '../components/FurnitureRows'
const data = [
  {
    id: 1,
    name: "sedacka",
  },
  {
    id: 2,
    name: "sedacka",
  },
  {
    id: 3,
    name: "sedacka",
  },
];
const Furniture = () => {
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
        <Typography variant="h3" component="h1" sx={{ color: "#0A7D4C" }}>
          Furniture
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#249E54",
            color: "#fff",
            maxHeight: "30px",
            maxWidth: "100px",
            "&:hover": {
              backgroundColor: "#0A7D4C",
            },
          }}
        >
          Add new
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          borderBottom: "1px solid #ccc",
        }}
      >
        {data.map((furniture) => (
          <FurnitureRow key={furniture.id} {...furniture} />
        ))}
      </Box>
    </Container>
  )
}

export default Furniture