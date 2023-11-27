import { BrowserRouter, Routes,Route } from "react-router-dom";
import Materialui from "./materialui";
import Registration from "./Registration";
import MenuAppBar from "./Navbar";
import About from "./Aboutpage";
import Home from "./Homepageback";
import { ToastContainer } from "react-toastify";
import Paintings2 from "./Paintings2";
import ContactUs from "./ContactUs";

function App2(){
  return(
    <div>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Materialui />}></Route>
        <Route path="/SignUp" element={<Registration />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Paintings" element={<Paintings2 />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App2;