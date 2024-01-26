import logo from './logo.svg';
import TopBar from './Components/topbar';
import Hero from './Components/hero';
import './index';
import Education from './Components/education';
import About from './Components/about';
import Contact from './Components/contact';
import Footer from './Components/footer';


function App() {
  return (
    <>
      <TopBar />
      <br />  <br />
      <Hero />
      <Education />

      <About />
      <Contact />
      <Footer />


    </>
  )
}

export default App;