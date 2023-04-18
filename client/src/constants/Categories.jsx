import PetsIcon from "@mui/icons-material/Pets";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ChairIcon from "@mui/icons-material/Chair";
import LaptopIcon from "@mui/icons-material/Laptop";


const Categories = [
  {
    id: 1,
    name: "Animals",
    path: "/category/animals",
    bgColor: "#7f1958",
    color: "#dd2e8e",
    icon: <PetsIcon />,
  },
  {
    id: 2,
    name: "Cars",
    path: "/category/cars",
    bgColor: "#004896",
    color: "#39b7ed",
    icon: <DirectionsCarIcon />,
  },
  {
    id: 3,
    name: "Furniture",
    path: "/category/furniture",
    bgColor: "#09804e",
    color: "#4cd964",
    icon: <ChairIcon />,
  },
  {
    id: 4,
    name: "Computers",
    path: "/category/computers",
    bgColor: "#f9a825",
    color: "#ffdd57",
    icon: <LaptopIcon />,
  },
];

export default Categories;