
import { BrowserRouter as Router,Redirect } from "react-router-dom"
import { Route, Routes} from 'react-router'
import  LoginPage from "./pages/auth/Loginpage"
import NotFoundPage from "./pages/home/auth/404/NotFoundPage";
import DashBoard from "./pages/dashbord/Dashboard"

function AppRoutingFinal() {

  let loggedIn= true;
    return (
      <Router>
        <Routes>
        <Route path="/">
          {
            loggedIn ?
            (<Redirect from="/" to="dashboard"/>)
            :
            (<Redirect from="/" to="login"/>)
            
          }

        </Route>
        <Route path="LoginPage" element={<LoginPage/>}/> 

        <Route path="/dasboard">
          {
            loggedIn ?
            (<DashBoard/>)
            :
            (<Redirect from="/" to="login"/>)
            
          }

        </Route>


        <Route path="NotFoundPage" element={<NotFoundPage />}/> 


        </Routes>
      </Router>
    );
}

export default  AppRoutingFinal;


