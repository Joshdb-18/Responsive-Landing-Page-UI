import './App.css';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import LearnAndExplore from './components/LearnAndExplore/LearnAndExplore';
import LearnCrypto from './components/LearnCrypto/LearnCrypto';
import MarketTrend from './components/MarketTrend/MarketTrend';
import MarketUpdate from './components/MarketUpdate/MarketUpdate';
import Navbar from './components/Navbar/Navbar';
import StartAndBuild from './components/StartAndBuild/StartAndBuild';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StartAndBuild/>
      <MarketTrend/>
      <Features/>
      <LearnAndExplore/>
      <MarketUpdate/>
      <GetStarted/>
      <LearnCrypto/>
      <Footer/>
    </div>
  );
}

export default App;
