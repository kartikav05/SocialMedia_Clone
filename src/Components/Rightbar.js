import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React from "react";
import ConvoList from "./Conversations";

export default function Rightbar() {
  const itemData = [
    {
      title: "Image 1",
      src: "https://source.unsplash.com/random/1",
    },
    {
      title: "Image 2",
      src: "https://source.unsplash.com/random/2",
    },
    {
      title: "Image 3",
      src: "https://source.unsplash.com/random/3",
    },
    {
      title: "Image 4",
      src: "https://source.unsplash.com/random/4",
    },
    {
      title: "Image 5",
      src: "https://source.unsplash.com/random/5",
    },
    {
      title: "Image 6",
      src: "https://source.unsplash.com/random/6",
    },
  ];

  const avatars = [
    {
      alt: "Remy Sharp",
      src: "https://material-ui.com/static/images/avatar/1.jpg",
    },
    {
      alt: "Travis Howard",
      src: "https://material-ui.com/static/images/avatar/2.jpg",
    },
    {
      alt: "Cindy Baker",
      src: "https://material-ui.com/static/images/avatar/3.jpg",
    },
    {
      alt: "Agnes Walker",
      src: "https://material-ui.com/static/images/avatar/4.jpg",
    },
    {
      alt: "Trevor Henderson",
      src: "https://material-ui.com/static/images/avatar/5.jpg",
    },
    {
      alt: "New Avatar 1",
      src: "https://material-ui.com/static/images/avatar/6.jpg",
    },
    {
      alt: "New Avatar 2",
      src: "https://material-ui.com/static/images/avatar/7.jpg",
    },
  ];

  const AvatarListComponent = () => {
    const avatarObjects = avatars.map((avatar, index) => (
      <Avatar key={index} alt={avatar.alt} src={avatar.src} />
    ));

    return <AvatarGroup max={7}>{avatarObjects}</AvatarGroup>;
  };

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>

        {AvatarListComponent()}

        <Typography variant="h6" fontWeight={100} m={2}>
          Latest Post
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.title}>
              <img src={item.src} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Conversations
        </Typography>
        <ConvoList />
      </Box>
    </Box>
  );
}
