import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  return (
    <div>
      {/* Basic Buttons */}
      <Box className="flex justify-center" sx={{ "& button": { m: 1 } }}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Box>
      {/* Text Buttons */}
      <Box className="flex justify-center" sx={{ "& button": { m: 1 } }}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Box>
      {/* Contained Buttons */}
      <Box className="flex justify-center" sx={{ "& button": { m: 1 } }}>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </Box>
      {/* Outlined button */}
      <Box className="flex justify-center" sx={{ "& > button": { m: 1 } }}>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </Box>
      {/* Color */}
      <Box className="flex justify-center" sx={{ "& > button": { m: 1 } }}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Box>
      {/* Size */}
      <Box className="flex-col items-center" sx={{ "& button": { m: 1 } }}>
        <div className="flex justify-center">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
        <div className="flex justify-center">
          <Button variant="outlined" size="small">
            Small
          </Button>
          <Button variant="outlined" size="medium">
            Medium
          </Button>
          <Button variant="outlined" size="large">
            Large
          </Button>
        </div>
        <div className="flex justify-center">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>
      </Box>
      {/* Buttons with icons and label */}
      <Box className="flex justify-center" sx={{ "& button": { m: 1 } }}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
      {/* Icon button */}
      <Box className="flex justify-center" sx={{ "& button": { m: 1 } }}>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Box>
      {/* Loading Buttons */}
      <div>
        <div className="flex justify-center">
          <FormControlLabel
            sx={{ display: "block" }}
            control={
              <Switch
                checked={loading}
                onChange={() => setLoading(!loading)}
                name="loading"
                color="primary"
              />
            }
            label="Loading"
          />
        </div>
        <Box className="flex justify-center" sx={{ "& > button": { m: 1 } }}>
          <Button
            size="small"
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            disabled
          >
            Disabled
          </Button>
          <Button
            size="small"
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
          >
            Fetch data
          </Button>
          <Button
            size="small"
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            Send
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={handleClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </Button>
        </Box>
        <Box className="flex justify-center" sx={{ "& > button": { m: 1 } }}>
          <Button
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            disabled
          >
            Disabled
          </Button>
          <Button
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
          >
            Fetch data
          </Button>
          <Button
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            Send
          </Button>
          <Button
            color="secondary"
            onClick={handleClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </div>
    </div>
  );
}
