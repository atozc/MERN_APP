import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import Home from "./pages/Home";
import MainScreen from "./components/MainScreen";
import NavbarPage from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyNotes from "./pages/MyNotes/MyNotes";
import CreateNote from './pages/CreateNote/CreateNote';
import EditNote from './pages/EditNote/EditNote';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';


function App() {
  return (
     <>
        <Header />
          <main>
              <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/mynotes" element={<MyNotes/>} />
                <Route path="/mynotes/createNote" element={<CreateNote/>} />
                <Route path="/mynotes/editNote/:noteid" element={<EditNote/>} />
              </Routes>
          </main>
        <ToastContainer />
      </>
  );
}

export default App;