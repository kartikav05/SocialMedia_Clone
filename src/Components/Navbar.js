import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { InputBase } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(Box)({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "20px",
  width: "40%",
});
const Icons = styled(Box)({
  alignItems: "center",
  display: "flex",
  gap: "20px",
});
const UserProfile = styled(Box)({
  alignItems: "center",
  display: "flex",
  gap: "20px",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          BaseBook
        </Typography>
        <PlayCircleIcon
          sx={{ display: { xs: "block", sm: "none" }, fontSize: 35 }}
        />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={1} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={1} color="error">
            <Notifications />
          </Badge>
          <Avatar alt="profile" 
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          onClick={(e) => setOpen(true)} />
        </Icons>
        <UserProfile
          sx={{ display: { xs: "block", sm: "none" }, fontSize: 35 }}
        >
          <Avatar alt="profile" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           onClick={(e) => setOpen(true)} />
        </UserProfile>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
