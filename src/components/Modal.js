import React from 'react';
import styled from 'styled-components';

const Modal = ({ character, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CharacterImage src={character.image} alt={character.title} />
        <CharacterInfo>
          <h2>{character.title}</h2>
          <p><strong>Age:</strong> {character.details.age}</p>
          <p><strong>Height:</strong> {character.details.height}</p>
          <p><strong>Abilities:</strong> {character.details.abilities}</p>
          <p><strong>Bio:</strong> {character.details.bio}</p>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </CharacterInfo>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;

// Styled Components for Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  max-width: 900px;
  width: 95%;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  animation: slideIn 0.3s forwards; // Slide in effect

  @keyframes slideIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const CharacterImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 15px; // Round the top left corner
  border-bottom-left-radius: 15px; // Round the bottom left corner
  border: 2px solid #e7e7e7; // Subtle border around the image
`;

const CharacterInfo = styled.div`
  padding: 30px; // Increased padding for better spacing
  width: 50%;
  
  h2 {
    margin: 0 0 15px; // More space below the title
    color: #333;
    font-size: 24px; // Larger title font size
    text-transform: uppercase; // Uppercase title
    letter-spacing: 1px; // Letter spacing for effect
  }
  
  p {
    margin: 10px 0; // More space between paragraphs
    color: #555; // Darker gray for better readability
    line-height: 1.5; // Improved line height for readability
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s; // Smooth transition

  &:hover {
    background: #0056b3; // Darker shade on hover
    transform: scale(1.05); // Slightly enlarge button on hover
  }
`;
