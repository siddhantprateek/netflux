
import './App.css';
import Header from './components/header/header.component';
import Home from './routes/home/home.routes';
import Footer from './components/footer/footer.components';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
