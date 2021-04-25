import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Tools from './components/Tools/Tools';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Tools />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
