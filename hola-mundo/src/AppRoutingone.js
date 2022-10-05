
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Route, Routes} from 'react-router'

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/home/about-faqs/AboutPage";

import NotFoundPage from "./pages/home/auth/404/NotFoundPage";


function AppRoutingone() {
    return (
      <Router>
      <div>
      <aside>
        <Link to="/"> | HOME |</Link>
        <Link to="about"> | ABOUT |</Link>
        <Link to="faqs"> | FAQS |</Link>
      </aside>
      <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='about' element={<AboutPage/>} />
        <Route path='faqs' element={<AboutPage/>} />
        <Route path="NotFoundPage" element={<NotFoundPage />}/>  
      </Routes>

      </main>
       </div>
      
      </Router>

    );
}

export default AppRoutingone;


