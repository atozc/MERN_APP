import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/Home';
import LoginScreen from './pages/Login';
import RegisterScreen from './pages/Signup';
import MyNotes from './pages/MyNotes/MyNotes'
import CreateNote from './pages/CreateNote/CreateNote';
import EditNote from './pages/EditNote/EditNote';
import {Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <>
        <Header />
          <main>
              <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<LoginScreen/>} />
                <Route path="/signup" element={<RegisterScreen/>} />
                <Route path="/mynotes" element={<MyNotes/>} />
                <Route path="/mynotes/createNote" element={<CreateNote/>} />
                <Route path="/mynotes/editNote/:noteid" element={<EditNote/>} />
              </Routes>
          </main>
        <ToastContainer />
        <Footer />
      </>
  );
}

export default App;
