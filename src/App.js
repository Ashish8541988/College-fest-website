import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Audi} from './components/Auditorium'
import {Band} from './components/Band'
import {Art} from './components/Art_and_craft'
import {Cultural} from './components/Cultural'
import {Web} from './components/Web_development'
import {Takshilla} from './components/Takshilla'
import {Tech} from './components/Tech'
import {Robotics} from './components/Robotics'
import {Photography} from './components/Photography'
import {Markting} from './components/Markting'
import {Publication} from './components/Media_and_publication'
import {Dance} from './components/Dance'
import {Cinema} from './components/Cinematography'
import { Clubs } from './components/Club';
import './App.css';
import React from 'react';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {Footer} from './components/Footer';
import {About} from './components/About';
import {Contact} from './components/Contact';
import Registration from './components/Registration';
import {Event} from './components/Event';
//slider


///////


function App() {
  return (
   <BrowserRouter> 

       <Header/>
     
   <Routes>
  
   {/* <Route path="/Auditorium" element={<Audi/>}/> */}
   <Route path="/Art_and_craft" element={<Art/>}/>
   {/* <Route path="/Band" element={<Band/>}/> */}
   <Route path="/Cinematography" element={<Cinema/>}/>
   <Route path="/Cultural" element={<Cultural/>}/>
   <Route path="/Dance" element={<Dance/>}/>
   {/* <Route path="/Markting" element={<Markting/>}/> */}
   {/* <Route path="/Media_and_publication" element={<Publication/>}/> */}
   <Route path="/Photography" element={<Photography/>}/>
   <Route path="/Robotics" element={<Robotics/>}/>
   {/* <Route path="/Takshilla" element={<Takshilla/>}/> */}
   <Route path="/Tech" element={<Tech/>}/>
   <Route path="/Web_development" element={<Web/>}/>
   <Route path="/" element={<Home/>}/>
   <Route path="/About" element={<About/>}/>
   <Route path="/Contact" element={<Contact/>}/>
   <Route path="/Event" element={<Event/>}/>
   <Route path="/Club" element={<Clubs/>}/>
   <Route path="/Registration" element={<Registration/>}/>

   </Routes>
      <Footer/>
   
   </BrowserRouter>
  );
}

export default App;
