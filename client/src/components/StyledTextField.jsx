import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "##544f4e",

    },
    "&:hover fieldset": {
      borderColor: "#544f4e",

    },
    "&.Mui-focused fieldset": {
      borderColor: "#544f4e",
     

    },
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#544f4e",
    color: "#fff",

  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#544f4e",
    color: "#fff",

  },

  "& .MuiOutlinedInput-input": {
    color: "#fff",
  },

  "& .MuiInputLabel-outlined": {
    color: "#fff",
  },
});
