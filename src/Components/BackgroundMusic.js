// src/components/BackgroundMusic.js
import React, { useEffect, useRef } from 'react';

const BackgroundMusic = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
