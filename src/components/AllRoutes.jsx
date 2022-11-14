import React from 'react'
import Sidebar from './Sidebar';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Login from './Login';
import Landingpage  from './Landingpage';
import Signup from './Signup';
import LinenPage from './Linenpage';
import Kidsproduct from './Kidsproduct';
import LinenP from './Linenp';

const AllRoutes = () => {
  return (
    <div>
       <Router>
         <Sidebar/>
         <Routes>
         
        
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route exact path='/' element={<Landingpage/>}/>
          <Route path='/WomenData' element={<LinenP/>}/>
          <Route path='/Linenpage'element={<LinenPage/>}/>
          <Route path='/KidsData'element={<Kidsproduct/>}/>
         </Routes>

      </Router>
    </div>
  )
}

export default AllRoutes
