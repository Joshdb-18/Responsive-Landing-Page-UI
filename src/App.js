import './App.css';
import Features from './components/Features/Features';
import MarketTrend from './components/MarketTrend/MarketTrend';
import Navbar from './components/Navbar/Navbar';
import StartAndBuild from './components/StartAndBuild/StartAndBuild';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StartAndBuild/>
      <MarketTrend/>
      <Features/>
    </div>
  );
}

export default App;
