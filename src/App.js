import './App.css';
import Header from "./Header.js";
import Hero from "./Hero.js";
import Specials from "./Specials.js";
import Testimonials from "./Testimonials.js";
import About from './About.js';
import Footer from "./Footer.js";
import Helmet from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Little Lemon Restaurant</title>
        <meta name="description" content="A website for the restaurant Little Lemon"/>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="og:image" content=""/>
      </Helmet>
      <Header/>
      <body>
        <main>
          <Hero/>
          <Specials/>
        </main>
        <Testimonials/>
          <About/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
