import React from 'react';


import Navbar from './components/Navbar'
import UpcomingEvents from './containers/UpcomingEvents'
import PastEvents from './containers/PastEvents'
import Form from './components/Form'
import './App.css';

function App() {

  return (
    <div className="App">


      <Navbar />
      <UpcomingEvents />
      <PastEvents />
      <Form />
    </div>
  );
}

export default App;
