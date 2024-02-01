import './App.css';
import Header from "./Header.js";
import Hero from "./Hero.js";
import Specials from "./Specials.js";
import Testimonials from "./Testimonials.js";
import About from './About.js';
import Footer from "./Footer.js";
import Helmet from "react-helmet";
import Reservations from './Reservations.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Hero />
        <div className="everything-that-is-not-header-or-footer-or-hero">
        <div className="margin"><Specials/></div>
        <Testimonials/>
        <About/>
      </div>
      </div>
    }, 
    {
      path: "/reservation-screen",
      element: <Reservations />
    }
  ])

  return (
    <div className="App">
      <Helmet>
        <title>Little Lemon Restaurant</title>
        <meta name="description" content="A website for the restaurant Little Lemon"/>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="og:image" content=""/>
      </Helmet>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
