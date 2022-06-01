import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import ShortUrlArea from './components/shortUrlArea/ShortUrlArea'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'
import ContentUrlArea from './components/contentUrlArea/ContentUrlArea';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContentUrlArea />
      <Footer />
    </div>
  );
}

export default App;
