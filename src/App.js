// Importation of all the Neccesary Component form the component folder
import './App.css';
import NavbarComponent from './Components/NavBar';
import CardComponent from './Components/Card';
import CardsComponent from './Components/Card2';
import CardComponents from './Components/Card3';

function App() {
  return (

    <div className="App">
      {/* The Br tag is to spacing betweent the various Component when rendered */}
      <br />
      <NavbarComponent />
      <br />
      <CardComponent />
      <br />
      <CardsComponent />
      <br />
      <CardComponents />
      
    </div>
  );
}

export default App;
