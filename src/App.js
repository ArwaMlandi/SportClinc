import logo from './logo.svg';
import './App.css';
import Hero from './commponent/Hreo';
import Program from './commponent/Program';
import Reasons from './commponent/Reasons';
import Plans from './commponent/Plans';
import Testamonial from './commponent/Testamonial';
import Join from './commponent/Join';
import Footer from './commponent/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testamonial/>
      <Join/>
      
    </div>
  );
}

export default App;
