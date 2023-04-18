import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import PetIcon from '@mui/icons-material/Pets'
import CarRows from '../components/CarRows'
import axios from "axios";


const Cars = () => {
  const useRun = useRef(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    if (!useRun.current) {
      useRun.current = true;
      axios.get("http://localhost:8080/cars").then((res) => {
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
        <Typography variant="h3" component="h1" sx={{ color: "#004693" }}>
          Cars
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1872B3",
            color: "#fff",
            maxHeight: "30px",
            maxWidth: "100px",
            "&:hover": {
              backgroundColor: "#004693",
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
        {data.data.map((car) => (
          <CarRows key={car.id} {...car} />
        ))}
      </Box>
    </Container>
  )
}

export default Cars;