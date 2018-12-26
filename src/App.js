

 import React from 'react';
 import ReactDOM from 'react-dom';
import NavBar from './js/components/containers/NavBar';
import AboutContainer from './js/components/containers/AboutContainer';
import WorkContainer from './js/components/containers/WorkContainer';
import ContactContainer from './js/components/containers/ContactContainer';

 
 const App = () => (
   <div>
      <NavBar />
      <AboutContainer />
      <WorkContainer/>
      <ContactContainer/>
   </div>
 )

 export default App;