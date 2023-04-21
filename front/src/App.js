import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/ContactPage'
import Portofolio from './Pages/Portofolio'
import AdminPage from './Pages/AdminPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path ='/contact'element = {<Contact />}/>
      <Route path ='/portofolio'element = {<Portofolio />}/>
      <Route path ='/admin'element = {<AdminPage />}/>




    </Routes>
   
  );
}

export default App;
