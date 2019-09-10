import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import UpcomingEvents from './containers/UpcomingEvents'
import PastEvents from './containers/PastEvents'
import Form from './components/Form'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      user_data: {}
  }
  }

componentDidMount(){
  let id = 1
  fetch(`http://localhost:3000/users/${id}`)
  .then(resp => resp.json())
  .then(data => {
    this.setState({
      user_data: data
    })
  })
}



handleSubmit = (e, party) => {
  let data = party

fetch('http://localhost:3000/events', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'accepts': 'application.json'
    },
    body: JSON.stringify(data)
})
.then(res => res.json())
.then(console.log)
}
render(){
  const {user_data} = this.state
  return (
    <div className="App">

  <Router>
    <div>
      <Navbar />
      <Route exact path='/upcoming' render={ routerProps =>   <UpcomingEvents {...routerProps} events={user_data.events}/>}/>
      <Route exact path='/past' render={ routerProps =>   <PastEvents {...routerProps} events={user_data.events}/>}/>
      <Route exact path='/new' render={ (routerProps) =>   <Form {...routerProps} handleSubmit={this.handleSubmit}  />}/>
    </div>
  </Router>

    </div>

    
  );
}
}

export default App;
