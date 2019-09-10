import React from 'react';

import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import UpcomingEvents from './containers/UpcomingEvents'
import PastEvents from './containers/PastEvents'
import Form from './components/Form'
import Home from './containers/Home'
import './components/EventDetails'
import './App.css';
import EventDetails from './components/EventDetails';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      user_data: {
        events: []
      }
    
  }
  }

componentDidMount() {
  let id = 1
  fetch(`http://localhost:3000/users/${id}`)
  .then(resp => resp.json())
  .then(data => {
    this.setState({
      user_data: data
    })
  })
}



handleSubmit = (party) => {
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
.then(data => {
  console.log(data)
})
}

onSelectedParty = (selectedParty) => {
  this.setState({
    selectedParty: selectedParty
  })
}

render(){
  const {user_data, selectedParty} = this.state
  console.log('app is loaded')
  return (
    <div className="App">


      <Navbar />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/upcoming' render={ routerProps =>   <UpcomingEvents {...routerProps} events={user_data.events} onSelectedParty={this.onSelectedParty} />}/>
      <Route exact path='/past' render={ routerProps =>   <PastEvents {...routerProps} events={user_data.events}/>}/>
      <Route exact path='/new' render={ (routerProps) =>   <Form {...routerProps} handleSubmit={this.handleSubmit}  />}/>
      <Route exact path='/events/:id' render={(props)=> { 
        let eventId = parseInt(props.match.params.id)
        let eventObj = user_data.events.find(e=> e.id === eventId)
        return eventObj ? <EventDetails event={eventObj}/> :  <Home /> 
      }}/>
      </Switch>
  

    </div>

    
  );
}
}

export default App;
