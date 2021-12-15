import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
// import BlogPost from '../pages/BlogPost/blog';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
      {/* <BlogPost /> */}
    </>
  );
}

export default Home;
