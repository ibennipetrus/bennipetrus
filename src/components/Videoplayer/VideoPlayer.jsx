import React, { useState, useRef, useEffect } from "react";

const VideoPlayer = ({
  src = "/video/default.mp4",
  width = "100%",
  height = "100%",
  style = {},
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  return (
    <div
      className="relative cursor-pointer rounded overflow-hidden"
      style={{ width, height, style }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover block"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
