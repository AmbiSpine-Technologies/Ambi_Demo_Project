import { useEffect, useState,useRef } from 'react';
import './App.css';
import Profile from './components/Profile/profile';
import Sidebar from './layouts/Sidebar/sidebar';
import Header from './layouts/header/header';
import { Route,Routes } from 'react-router-dom';
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
import WebFont from "webfontloader";
import Calendar from './components/calender/calender';
import CalendarComponent from './components/calender/date-mi';
import Cantact_Spread from './components/Community/Cantact_Spread';

function App() {

  const scrollableContentRef = useRef(null);

  const handleScroll = () => {
    if (scrollableContentRef.current) {
      const scrollTop = window.scrollY;
      const newHeight = 100 + scrollTop * 0.1; // Adjust the multiplier as needed
      scrollableContentRef.current.style.height = `${newHeight}vh`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(()=>{
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  },[])
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
    <Routes>
    <Route path='/home' element={<HomePageComponent scrollableContentRef={scrollableContentRef}/>}/>
      <Route path='/' element={<UserLogin/>}/>
       <Route path='/register' element={<UserRegister/>}/>
       <Route path='/profile' element={<Profile scrollableContentRef={scrollableContentRef}/>}/>
       <Route path='/video' element={<VideoCarsoule/>}/>
       <Route path='/explore' element={<ExploreComponent scrollableContentRef={scrollableContentRef}/>}/>
      <Route path='/spread' element={<Spread_Post/>}/>
      <Route path='/message' element={<ChatBox/>}/>
      <Route path='/connected' element={<Cantact_Spread scrollableContentRef={scrollableContentRef}/>}/>
      <Route path='/job' element={<JobComponent/>}/>

    </Routes>
    
    </section>
  </div>
  );
}

export default App;
