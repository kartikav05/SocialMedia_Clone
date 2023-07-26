import { Box } from "@mui/material";
import React from "react";
import Post from "./Posts";

export default function Feed() {
  const peopleData = [
    {
      id: 1,
      name: "John Doe",
      caption:
        "John Doe is enjoying a beautiful sunny day at the beach, feeling the warmth of the sun on his face and the soft sand beneath his feet.",
      img: "nature",
    },
    {
      id: 2,
      name: "Jane Smith",
      caption:
        "Jane Smith is exploring fascinating new places, immersing herself in diverse cultures and making unforgettable memories along the way.",
      img: "car",
    },
    {
      id: 3,
      name: "Mike Johnson",
      caption:
        "Mike Johnson stands in awe, gazing at the breathtaking view from the mountaintop, appreciating the wonders of nature that surround him.",
      img: "mounain",
    },
    {
      id: 4,
      name: "Emily Williams",
      caption:
        "Emily Williams can't hide her happiness as she celebrates a special moment with her loved ones, cherishing the joy and love in her heart.",
      img: "birthday",
    },
  ];

  return (
    <Box flex={4} p={2}>
      {peopleData.map((item) => {
        return (
          <Box m={2}>
            <Post
              key={item.id}
              name={item.name}
              caption={item.caption}
              img={item.img}
            ></Post>
          </Box>
        );
      })}
    </Box>
  );
}
