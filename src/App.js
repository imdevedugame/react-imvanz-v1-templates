// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Content from './components/Content';
import ReviewCarousel from './components/RiviewCaraousel';
import Footer from './components/Footer'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Content />
      <ReviewCarousel/>
      <Footer/> {}
    </div>
  );
}

export default App;
