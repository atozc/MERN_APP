import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import Home from "./pages/Home";
import NavbarPage from "./components/Navbar/Navbar";
//import MyNotes from "./pages/MyNotes/MyNotes";
//import CreateNote from './pages/CreateNote/CreateNote';
//import EditNote from './pages/EditNote/EditNote';
import { ToastContainer } from 'react-toastify';
//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';


function App() {
  return (
     <>
        <NavbarPage />
          <main>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
          </main>
        <ToastContainer />
      </>
  );
}

export default App;