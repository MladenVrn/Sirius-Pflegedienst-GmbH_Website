import './App.css';
import Navbar from './components/navbar';
import Home from './components/homeComponent';
import Pflege from './components/pflegeComponent';
import Leistungen from './components/leistungenComponent';
import Kontakt from './components/kontaktComponent';
import Footer from './components/footerComponent';
import Btn from './components/scrollBtn';





//register components inside App function
function App() {

  //render components in App()
  return (
    <div>
      <Btn />
      <Navbar/>
      <Home />
      <Pflege />
      <Leistungen />
      <Kontakt />
      <Footer />
    </div>
  );
}

export default App;
