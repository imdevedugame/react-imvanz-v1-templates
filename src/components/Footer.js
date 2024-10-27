import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>&copy; 2024 Imvanz. All Rights Reserved.</Copyright>
        <SocialLinks>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;


const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Copyright = styled.p`
  margin: 10px 0;
`;

const SocialLinks = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    transition: color 0.3s;

    &:hover {
      color: #007bff; // Change color on hover
    }
  }
`;
