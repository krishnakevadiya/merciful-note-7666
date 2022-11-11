
import './App.css';
import Sidebar from './components/Sidebar';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { SidebarData } from './components/SidebarData';
import Landingpage  from './components/Landingpage';
function App() {
  return (
    
      <> 
      <Router>
         <Sidebar/>
         <SidebarData/>
      </Router>
      <Landingpage/>

     
      </>
  );
}

export default App;
