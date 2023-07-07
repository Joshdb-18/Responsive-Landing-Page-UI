import './App.css';
import MarketTrend from './components/MarketTrend/MarketTrend';
import Navbar from './components/Navbar/Navbar';
import StartAndBuild from './components/StartAndBuild/StartAndBuild';
// import Navbar1 from './components/Navbar1';
// import SampleNavbar from './components/SampleNavbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StartAndBuild/>
      <MarketTrend/>
    </div>
  );
}

export default App;
