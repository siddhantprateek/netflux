import './App.css';
import { Footer, Header } from './components';
import { Home, TVSHOW, Profile, NoMatch, New } from './routes'; 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tvshows' element={<TVSHOW />} />
        <Route path='/manage/profiles' element={<Profile />} />
        <Route path='/*' element={<NoMatch />} />
        <Route path='/new' element={<New/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
