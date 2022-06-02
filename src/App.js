import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import ShortUrlArea from './components/shortUrlArea/ShortUrlArea'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'
import ContentUrlArea from './components/contentUrlArea/ContentUrlArea';
import { StyledButton } from './components/styledComponents/styledComponents'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContentUrlArea />
      <div className='getStartedSection'>
            <h1>Boost your links today</h1>

            <StyledButton size='large'>Get Started</StyledButton>
            </div>
      <Footer />
    </div>
  );
}

export default App;
