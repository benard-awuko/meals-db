import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Error from './pages/Error';
import SingleMeal from './pages/SingleMeal';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



let App = ()=>{
return (<BrowserRouter>
<NavBar></NavBar>
             <Routes>
                 <Route path='/' element={<Home></Home>}>
                 </Route>

                  <Route path='about' element={<About></About>}>
                 </Route>

                  <Route path='*' element={<Error></Error>}>
                 </Route>

                 <Route path='meal/:id' element={<SingleMeal></SingleMeal>}>
                 </Route>

             </Routes>
             <Footer></Footer>

    </BrowserRouter> )

}

export default App;