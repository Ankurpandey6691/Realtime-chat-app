import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Loader from './component/loader';
import './App.css';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('./pages/home'));
const PublicRoute = lazy(() => import('./routes/public'));
const Features = lazy(() => import('./pages/features'));
const About = lazy(() => import('./pages/about'));
const NotFound = lazy(() => import('./pages/notfound'));
const Auth = lazy(() => import('./pages/login&sign'));
const ProtectedRoute = lazy(() => import('./routes/protected'));
const ChatDashboard = lazy(() => import('./pages/chatDashboard'));
const ChatSection = lazy(() => import('./component/chat/chatSection'));
const UserProfile = lazy(() => import('./pages/userprofile'));
const SettingsPage = lazy(() => import('./pages/setting/setting'));

function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>

          <Route path='/' element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path='features' element={<Features />} />
            <Route path='about' element={<About />} />
          </Route>

          <Route path='/' element={<ProtectedRoute />}>
            <Route path='c' element={<ChatDashboard />}>
              <Route path='chat/:userId' element={<ChatSection />} />
              <Route path='profile' element={<UserProfile />} />
              <Route path='setting' element={<SettingsPage />} />
            </Route>
          </Route>

          <Route path='/login' element={<Auth />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer/>
      </Suspense>
    </>
  )
}

export default App
