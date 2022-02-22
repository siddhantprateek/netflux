
import './App.css';
import { Footer, Header } from './components';
import { Home, TVSHOW } from './routes'; 
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tvshows' element={<TVSHOW />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
