import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import videoSrc from '../ku.mp4';
import { Wave } from 'react-animated-text';

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover

  return (
    <BannerContainer isHovered={isHovered}>
      <VideoBg autoPlay loop muted src={videoSrc} type="video/mp4" />
      <Particles />
      <TextOverlay>
        <TextPrimary>GET READY FOR A</TextPrimary>
        <TextSecondary>
          <Wave text="ANIME IMVANZ" effect="fadeOut" effectChange={1.0} />
        </TextSecondary>
        <StartButton 
          onMouseEnter={() => setIsHovered(true)} // Set state on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Reset state on mouse leave
        >
          Mulai
        </StartButton>
      </TextOverlay>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  backdrop-filter: ${({ isHovered }) => (isHovered ? 'blur(50%)' : 'none')}; /* Blur on hover */
  
  @media (max-width: 768px) {
    height: 70vh; // Adjust height for mobile
  }
`;

// Background Video
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Floating particles animation
const particleAnimation = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 1; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
  100% { transform: translateY(0) translateX(0); opacity: 1; }
`;

const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(circle, rgba(0, 224, 255, 0.3) 10%, transparent 20%);
  background-size: 5px 5px;
  opacity: 0.3;
  animation: ${particleAnimation} 6s infinite ease-in-out;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    top: 40%; // Adjust vertical alignment for mobile
  }
`;

// 3D Effect for Primary Text
const TextPrimary = styled.h1`
  font-size: 4rem;
  margin-top: 10px;
  overflow: hidden;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3), 5px 5px 15px rgba(0, 224, 255, 0.7);

  @media (max-width: 768px) {
    font-size: 2.5rem; // Adjust font size for mobile
  }
`;

// 3D Glow Effect for Secondary Text
const TextSecondary = styled.h1`
  font-size: 4rem;
  color: transparent;
  font-weight: bold;
  -webkit-text-stroke: 2px white;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 5px #00e0ff, 0 0 10px #00e0ff, 0 0 15px #00e0ff, 0 0 20px #00e0ff, 0 0 30px #00e0ff;
  font-weight: 900;
  perspective: 500px;
  transform: rotateX(15deg);

  @media (max-width: 768px) {
    font-size: 2.5rem; // Adjust font size for mobile
  }
`;

// Animated Border for Button
const animatedBorder = keyframes`
  0% { border-color: rgba(0, 224, 255, 0.7); }
  50% { border-color: rgba(0, 123, 255, 1); }
  100% { border-color: rgba(0, 224, 255, 0.7); }
`;

const StartButton = styled.button`
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  color: white;
  background-color: rgba(0, 224, 255, 0.5); /* Semi-transparent background */
  border: 2px solid #00e0ff;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  animation: ${animatedBorder} 3s infinite alternate;
  box-shadow: 0px 0px 10px rgba(0, 224, 255, 0.7);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px rgba(0, 224, 255, 1), 0px 0px 25px rgba(0, 123, 255, 0.7);
    background-color: rgba(0, 224, 255, 0.7); /* Change background on hover */
  }

  @media (max-width: 768px) {
    font-size: 1rem; // Adjust font size for mobile
    padding: 0.6rem 1.5rem; // Adjust padding for mobile
  }
`;
