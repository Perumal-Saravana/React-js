import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import User from './Component/User';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import OldBook from './Component/OldBook';
import NewBook from './Component/NewBook';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <ul>
               <li> <Link to="/">Home</Link> </li>
               <li> <Link to="/about">About</Link></li>
               <li> <Link to="/Contactus">Contact</Link></li>
               <li> <Link to="/user/1">User 1</Link></li>
               <li> <Link to="/books/old_book">Old Book</Link></li>
               <li> <Link to="/books/new_book">New Book</Link></li>
               <li> <Link to="/Login">Login</Link></li>
            </ul>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/about' element={<About/>}/>
              <Route path='/Contactus' element={<Contact/>}/>
              <Route path='/user/:id' element={<User/>}/> 
              <Route path='books'>
                  <Route path='old_book' element={<OldBook/>}/> 
                  <Route path='new_book' element={<NewBook/>}/> 
              </Route>
              <Route path='/Login' element={<Login/>}/> 
              <Route path='/dashboard' element={<Dashboard/>}/> 
          </Routes>
       </BrowserRouter>
    </div>
  );
}
export default App;