import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'; 
import Zoom from 'react-reveal/Zoom'; 
import Modal from './Modal'; 

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const cardsData = [
    {
      image: "https://media.suara.com/pictures/653x366/2024/02/28/56857-toji-fushiguro.jpg",
      title: "Toji Fushiguro",
      description: "Description for Toji Fushiguro. This is where you describe the character.",
      details: {
        age: "Unknown",
        height: "Unknown",
        abilities: "Powerful Jujutsu Sorcerer",
        bio: "Toji Fushiguro is a powerful jujutsu sorcerer from the Jujutsu Kaisen series."
      }
    },
    {
        image: "https://media.suara.com/pictures/653x366/2024/02/28/56857-toji-fushiguro.jpg",
        title: "Toji Fushiguro",
        description: "Description for Toji Fushiguro. This is where you describe the character.",
        details: {
          age: "Unknown",
          height: "Unknown",
          abilities: "Powerful Jujutsu Sorcerer",
          bio: "Toji Fushiguro is a powerful jujutsu sorcerer from the Jujutsu Kaisen series."
        }
      },
      {
        image: "https://media.suara.com/pictures/653x366/2024/02/28/56857-toji-fushiguro.jpg",
        title: "Toji Fushiguro",
        description: "Description for Toji Fushiguro. This is where you describe the character.",
        details: {
          age: "Unknown",
          height: "Unknown",
          abilities: "Powerful Jujutsu Sorcerer",
          bio: "Toji Fushiguro is a powerful jujutsu sorcerer from the Jujutsu Kaisen series."
        }
      },
    
  ];

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <>
      <ContentContainer>
        {cardsData.map((card, index) => (
          <Fade key={index} left={index % 2 === 0} right={index % 2 !== 0}>
            <CardWrapper isLeft={index % 2 === 0} onClick={() => handleCardClick(card)}>
              <ImageWrapper>
                <Zoom>
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                  />
                </Zoom>
              </ImageWrapper>
              <TextContainer>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </TextContainer>
            </CardWrapper>
          </Fade>
        ))}
      </ContentContainer>

      {isModalOpen && (
        <Modal character={selectedCharacter} onClose={closeModal} />
      )}
    </>
  );
};

export default Content;


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 20px; 
  }
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isLeft ? 'flex-start' : 'flex-end')};
  width: 100%;
  margin: 20px 0;
  flex-direction: ${props => (props.isLeft ? 'row' : 'row-reverse')};
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  perspective: 1000px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 400px; 
  margin: 0 20px;

  &:hover {
    transform: rotateY(10deg) rotateX(10deg);
  }

  @media (max-width: 768px) {
    max-width: 100%; 
    margin: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto; 
  border-radius: 15px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
  text-align: left; 

  h2 {
    margin-bottom: 20px;
    color: #333;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem; 
    }
  }

  p {
    color: #666;
    line-height: 1.6;
    animation: fadeIn 1s ease forwards;

    @media (max-width: 768px) {
      font-size: 1rem; 
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
