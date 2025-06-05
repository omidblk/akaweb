import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Badges = () => {
  const [count, setCount] = useState(1);
  const [invisible, setInvisible] = useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center">Badges</h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-center">Basic badge</h3>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center">Color</h3>
        <div className="flex justify-center gap-4">
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <MailIcon color="action" />
          </Badge>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center">Customization</h3>
        <div>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center">Badge visibility</h3>
        <Box
          sx={{
            color: "action.active",
            display: "flex",
            flexDirection: "column",
            "& > *": {
              marginBottom: 2,
            },
            "& .MuiBadge-root": {
              marginRight: 4,
            },
          }}
        >
          <div>
            <Badge color="primary" badgeContent={count}>
              <MailIcon />
            </Badge>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Badge color="secondary" variant="dot" invisible={invisible}>
              <MailIcon />
            </Badge>
            <FormControlLabel
              sx={{ color: "text.primary" }}
              control={
                <Switch checked={!invisible} onChange={handleBadgeVisibility} />
              }
              label="Show Badge"
            />
          </div>
        </Box>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center">Maximum value</h3>
        <div className="flex justify-between gap-9">
          <Badge color="success" badgeContent={99}>
            <MailIcon />
          </Badge>
          <Badge color="success" badgeContent={100}>
            <MailIcon />
          </Badge>
          <Badge color="success" badgeContent={1000} max={999}>
            <MailIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Badges;
