import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import './App.css';
import Sidebar from './layouts/Sidebar/sidebar';
import Header from './layouts/header/header';
import { Route, Routes } from 'react-router-dom';
import WebFont from "webfontloader";
import Loading from './layout/loading.jsx';
import ProtectRoute from './components/Auth/ProtectRoute.jsx';

// Lazy loaded components
const Profile = lazy(() => import('./components/Profile/profile'));
const UserRegister = lazy(() => import('./components/Auth/Register/UserRegister'));
const ExploreComponent = lazy(() => import('./components/Explore/ExploreComponent'));
const UserLogin = lazy(() => import('./components/Auth/Login/UserLogin'));
const VideoCarsoule = lazy(() => import('./pages/VideoCarsoule'));
const HomePageComponent = lazy(() => import('./components/Home/home'));
const JobComponent = lazy(() => import('./components/Job/Job'));
const ChatBox = lazy(() => import('./components/Message/message'));
const Spread_Post = lazy(() => import('./components/spread_post/Spread_Post'));
const Cantact_Spread = lazy(() => import('./components/Community/Cantact_Spread'));
const EventCard = lazy(() => import('./components/Event/EventCard.js'));
const Audio = lazy(() => import('./components/Audiolive/Audio'));
const StoryCarosuel = lazy(() => import('./components/carosuel/storycarosuel'));
const Followers = lazy(() => import('./components/Community/followers'));
const Following = lazy(() => import('./components/Community/following'));
const ChatHome = lazy(() => import('./components/Message/ChatHome.jsx'));
const MassageBox = lazy(() => import('./components/Message/conversation/massage/massage.jsx'));
const LiveSpread = lazy(()=> import('./components/Audiolive/LiveSpread.js'))
function App() {
  
  const [user ,setUser]=useState(true) ;
  const [sideBar, setSideBar] = useState(false);
  const scrollableContentRef = useRef(null);

  const handleScroll = () => {
    if (scrollableContentRef.current) {
      const scrollTop = window.scrollY;
      const newHeight = 100 + scrollTop * 0.1;
      scrollableContentRef.current.style.height = `${newHeight}vh`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className="App">
      <Header toggleOpen={toggleSideBar} />
      
      <div className={`tab-group ${sideBar ? 'show' : ''}`}>
        <Sidebar toggleClose={toggleSideBar} />
      </div>

      <section className='section-container'>
        <Suspense fallback={<Loading />} >
          <Routes>
            <Route path='/' element={<HomePageComponent scrollableContentRef={scrollableContentRef} />} />
            <Route path='/login' element={
              <ProtectRoute user={!user} redirect='/'>
                <UserLogin />
              </ProtectRoute>
            } />
             <Route path='/register' element={<UserRegister />} />
             <Route element={<ProtectRoute user={user} />}>
              <Route path='/profile' element={<Profile scrollableContentRef={scrollableContentRef} />} />
              <Route path='/video' element={<VideoCarsoule />} />
              <Route path='/explore' element={<ExploreComponent scrollableContentRef={scrollableContentRef} />} />
              <Route path='/spread' element={<Spread_Post />} />
              <Route path='/message' element={<ChatHome />} />
              <Route path="/chat/:id" element={<MassageBox />} />
              <Route path='/connected' element={<Cantact_Spread scrollableContentRef={scrollableContentRef} />} />
              <Route path='/event' element={<EventCard />} />
              <Route path='/job' element={<JobComponent />} />
              <Route path='/audio' element={<Audio />} />
              <Route path='/spread-live' element={<LiveSpread />} />
              <Route path='/video-slide' element={<StoryCarosuel />} />
              <Route path='/followers' element={<Followers />} />
              <Route path="/following" element={<Following />} />
            </Route>
          </Routes>
        </Suspense>
      </section>
    </div>
  );
}

export default App;


