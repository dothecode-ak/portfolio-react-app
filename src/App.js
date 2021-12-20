
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/jumbotron/'
// import '../node_modules/bootstrap/dist/js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/jquery-slim/dist/jquery.slim';
import '../node_modules/@popperjs/core/dist/cjs/popper'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Teams from './components/Teams/Team';
import Course from './components/Course/Course';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <Course />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
