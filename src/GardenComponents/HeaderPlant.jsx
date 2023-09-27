import React from "react";
import {
  Typography,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const HeaderPlant = ({ title, subtitle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" bgcolor="white" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1, color: "black" }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* TITLE */}
      <Box mb="30px">
        <Typography
          variant="h2"
          color="text.primary"
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" color="green">
          {subtitle}
        </Typography>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton sx={{ color: "black" }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: "black" }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleMenuOpen} sx={{ color: "black" }}>
          <PersonOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
          {/* Add more menu items as needed */}
        </Menu>
      </Box>
    </Box>
  );
};

export default HeaderPlant;
