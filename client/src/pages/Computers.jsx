import React from 'react'
import Advertisement from '../components/AnimalRows'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ComputerRows from '../components/ComputerRows'
const data = [
  {
    id: 1,
    name: "lenovo",
  },
  {
    id: 2,
    name: "asus",
  },
  {
    id: 3,
    name: "asus ",
  },
];

const Computers = () => {
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
        <Typography variant="h3" component="h1" sx={{ color: "#F8A726" }}>
          Computers
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F2B739",
            color: "#fff",
            maxHeight: "30px",
            maxWidth: "100px",
            "&:hover": {
              backgroundColor: "#F8A726",
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
        {data.map((computer) => (
          <ComputerRows key={computer.id} {...computer} />
        ))}
      </Box>
    </Container>
  )
}

export default Computers