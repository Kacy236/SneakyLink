import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SearchBar from "../SearchBar/SearchBar";
import "./Hero.css";
import { BsHeartFill, BsFillChatDotsFill, BsPersonFill } from 'react-icons/bs';

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: radial-gradient(circle, rgba(255, 183, 197, 1) 0%, rgba(255, 118, 137, 1) 100%);
  color: white;
  text-align: center;
  overflow: hidden;
  position: relative;
  padding: 2rem;
`;
<SearchBar/>

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const IconFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
  animation: ${fadeIn} 1.5s ease forwards;
  color: #ffe0e9;
  text-shadow: 0px 4px 10px rgba(255, 94, 129, 0.7);
  font-family: 'Lobster', cursive;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 0.5rem;
  animation: ${fadeIn} 2s ease forwards;
  color: #fff5f8;
  text-shadow: 0px 2px 5px rgba(255, 118, 137, 0.5);
  font-family: 'Poppins', sans-serif;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  animation: ${fadeIn} 2s ease forwards;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #ffb3c6;
  animation: ${IconFloat} 3s infinite ease-in-out;
  filter: drop-shadow(0px 4px 6px rgba(255, 94, 129, 0.5));

  &:nth-child(2) { animation-delay: 0.5s; }
  &:nth-child(3) { animation-delay: 1s; }
`;

const Button = styled.button`
  background-color: #ff5e81;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 25px;
  margin-top: 2.5rem;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 15px rgba(255, 94, 129, 0.6);
    background-color: #ff3a61;
  }
`;

const AnimatedText = styled.span`
  display: inline-block;
  animation: ${fadeIn} 2s ease forwards;
`;

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = ["Find Your Match", "Have the best night of your life", "Explore sexual possibilities"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <Title><AnimatedText>{phrases[textIndex]}</AnimatedText></Title>
      <Subtitle>Welcome to the beginning of something beautiful</Subtitle>
      <IconContainer>
        <Icon><BsHeartFill /></Icon>
        <Icon><BsFillChatDotsFill /></Icon>
        <Icon><BsPersonFill /></Icon>
      </IconContainer>
      <Button>Join Now</Button>
    </HeroContainer>
  );
};

export default HeroSection;


