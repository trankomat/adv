import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from "./pages/LandingPage";

import Animals from "./pages/Animals";
import AnimalDetails from "./pages/AnimalDetails";
import NewAnimal from "./pages/NewAnimal";

import Cars from "./pages/Cars";

import Computers from "./pages/Computers";

import Furniture from "./pages/Furniture";

const theme = createTheme({
  typography: {
    fontFamily: ["Chilanka", "cursive"].join(","),
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/category/animals",
    element: <Animals />,
  },
  {
    path: "/category/cars",
    element: <Cars />,
  },
  {
    path: "/category/computers",
    element: <Computers />,
  },
  {
    path: "/category/furniture",
    element: <Furniture />,
  },
  {
    path: "/animal/:id",
    element: <AnimalDetails />,
  },
  {
    path: "/category/animals/new",
    element: <NewAnimal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
