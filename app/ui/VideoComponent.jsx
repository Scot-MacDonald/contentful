"use client";

import React, { useState, useEffect } from "react";

const VideoComponent = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const src = await getVideoSrc();
        setVideoSrc(src);
      } catch (error) {
        console.error("Error fetching video source:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <iframe
      title="vimeo-player"
      src="https://player.vimeo.com/video/323600282?h=ba8af7f9d6"
      width="640"
      height="360"
      frameborder="0"
    ></iframe>
  );
};

export default VideoComponent;
