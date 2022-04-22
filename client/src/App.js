import './App.css';
import { Footer, Header } from './components';
import { Home, TVSHOW, Profile, NoMatch, New, Login, SignUp, MyList } from './routes'; 
import { Routes, Route } from 'react-router-dom';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/in/login' element={<Login />} />
        <Route path='/in/' element={<SignUp />} />
        <Route path='/tvshows' element={<TVSHOW />} />
        <Route path='/manage/profiles' element={<Profile />} />
        <Route path='/*' element={<NoMatch />} />
        <Route path='/new' element={<New/>} />
        <Route path='/mylist' element={<MyList />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
