import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const authors = [
  {
    image: "https://media.vgm.io/artists/40/37204/37204-1613303664.jpg",
    name: "Satoru Gojo",
    series: "Jujutsu Kaisen",
    description: "A powerful jujutsu sorcerer and teacher, known for his charismatic personality and unmatched strength.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt298hfSANV0Zj7rF_2VPKhkpRuUfMtBQsMcAxFmQW7hUJThGWhG_bymH9Asd4-7fxJJs&usqp=CAU",
    name: "Joseph Joestar",
    series: "JoJo's Bizarre Adventure",
    description: "A clever strategist known for his resourcefulness and his journey across generations.",
  },
  {
    image: "https://external-preview.redd.it/eHqzhbUzAnIUpCxydQ0PrEZlebP_9gQHGntkiuNj9dA.jpg?auto=webp&s=b945ddff001916f58d618a60e37a0f6a80e41f55",
    name: "Naruto Uzumaki",
    series: "Naruto",
    description: "A ninja with dreams of becoming the strongest Hokage, showcasing immense growth and determination.",
  },
];

const AuthorsPage = () => {
  const [isVisible, setIsVisible] = useState(Array(authors.length).fill(false));
  const [toggledIndex, setToggledIndex] = useState(null); // Track the toggled index for mobile

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          setIsVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true; // Mark this card as visible
            return newVisible;
          });
          observer.unobserve(entry.target); // Stop observing this element
        }
      });
    });

    const cards = document.querySelectorAll('.author-card');
    cards.forEach((card, index) => {
      card.setAttribute('data-index', index); // Set index for each card
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCardToggle = (index) => {
    setToggledIndex(toggledIndex === index ? null : index); // Toggle the index
  };

  return (
    <PageContainer>
      <Header>Meet the Authors</Header>
      <AuthorsGrid>
        {authors.map((author, index) => (
          <AuthorCard
            key={index}
            className={`author-card ${isVisible[index] ? 'fade-in' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
            onClick={() => handleCardToggle(index)} // Handle click for mobile
          >
            <ImageContainer>
              <AuthorImage src={author.image} alt={author.name} className={toggledIndex === index ? 'visible' : ''} />
            </ImageContainer>
            <AuthorDetails>
              <h3>{author.name}</h3>
              <h4>{author.series}</h4>
              <p>{author.description}</p>
            </AuthorDetails>
          </AuthorCard>
        ))}
      </AuthorsGrid>
    </PageContainer>
  );
};

export default AuthorsPage;

// Styled Components
const PageContainer = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

const AuthorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const AuthorCard = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative; // Allow positioning of children
  transition: transform 0.5s ease, opacity 0.5s ease; // Increased transition time
  opacity: 0; // Start hidden
  transform: translateY(20px) scale(0.9); // Start below the view and smaller

  &.fade-in {
    opacity: 1; // Fade in
    transform: translateY(0) scale(1); // Move to original position and scale to normal size
  }

  &:hover {
    transform: translateY(-5px) scale(1.05); // Elevate and scale up on hover
  }
`;

const ImageContainer = styled.div`
  height: 200px; // Keep this height to fit the images
  overflow: hidden; // Hide overflow for the effect
  position: relative; // Allow absolute positioning of the image
`;

const AuthorImage = styled.img`
  width: 400px;
  object-fit: cover;
  position: absolute; // Position absolutely to overlap text
  top: 0; // Align to top
  left: 0; // Align to left
  transition: opacity 0.3s; // Transition for the image opacity
  opacity: 0; // Start hidden
  z-index: 1; // Layer below the text

  &.visible {
    opacity: 1; // Show image when toggled
  }
`;

const AuthorDetails = styled.div`
  padding: 15px; // Adjusted padding for a more compact look
  position: relative; // Position relative to layer above the image
  z-index: 2; // Layer above the image

  h3 {
    margin: 0 0 5px; // Reduced margin
    color: #333;
  }

  h4 {
    margin: 0 0 5px; // Reduced margin
    color: #007bff;
  }

  p {
    color: #666;
    line-height: 1.5;
  }
`;
