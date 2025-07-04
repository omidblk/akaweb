import { Box, TextField } from "@mui/material";

const Inputs = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-center">Inputs</h1>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </div>
  );
};

export default Inputs;
