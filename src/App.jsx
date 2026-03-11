import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Catageries from './pages/Catageries';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Seller from './pages/Seller';

const App = () => {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout />}>
         <Route index element={<Home/>}/>
         <Route path='/listing' element={<Listing />} />
         <Route path='/catageries' element={<Catageries />} />
         <Route path='/blog' element={<Blog />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/login' element={<Login />} />
         <Route path='/seller' element={<Seller />} />
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;