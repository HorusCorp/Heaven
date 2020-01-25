import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './Components/Nav';
import AboutUs from './Components/AboutUs';
import PicsCaroussel from './Components/PicsCaroussel';
// import BlogCaroussel from './Components/BlogCaroussel';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Test from './Components/test';


function App() {
  return (
    <div className="App">
      <Nav/>
      <AboutUs/>
      <PicsCaroussel/>
      {/* <BlogCaroussel/> */}
      <Test/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
