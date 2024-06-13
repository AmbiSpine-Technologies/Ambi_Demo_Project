import { useState } from 'react';
import './App.css';
import Profile from './components/Profile/profile';
import Sidebar from './layouts/Sidebar/sidebar';
import Header from './layouts/header/header';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import UserRegister from './components/Auth/Register/UserRegister';
import ExploreComponent from './components/Explore/ExploreComponent';
import UserLogin from './components/Auth/Login/UserLogin';
import VideoCard from './pages/VideoCard';
import VideoCarsoule from './pages/VideoCarsoule';
import HomePageComponent from './components/Home/home';
import JobComponent from './components/Job/Job';
import ColonCard from './components/Home/ColonCard';
import ChatBox from './components/Message/message';
import Spread_Post from './components/spread_post/Spread_Post';

function App() {
  const [sideBar,setSideBar] = useState(false)
  function toggleOpen(){
    setSideBar(!sideBar)
  }
  function toggleClose(){
    setSideBar(!sideBar)
  }
  return (
    <div className="App">
    <Header toggleOpen={toggleOpen}/>
    
    <div className={`tab-group  ${sideBar?'show':''}`}>
    <Sidebar toggleClose={toggleClose}/>
    </div>
   
    {/* //  */}
    <section className='section-container'>
    <Router>
    <Routes>
    <Route path='/home' element={<HomePageComponent/>}/>
      <Route path='/' element={<UserLogin/>}/>
       <Route path='/register' element={<UserRegister/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/video' element={<VideoCarsoule/>}/>
       <Route path='/explore' element={<ExploreComponent/>}/>
      <Route path='/spread' element={<Spread_Post/>}/>
      <Route path='/message' element={<ChatBox/>}/>
      <Route path='/notification' element={<ColonCard/>}/>
      <Route path='/job' element={<JobComponent/>}/>

    </Routes>
    </Router>
    </section>
  </div>
  );
}

export default App;
