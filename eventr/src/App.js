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
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      user_data: {
        events: [],
        event:{}
      },
      formSubmit: false
  }}

componentDidMount() {
  let id = 16
  fetch(`http://localhost:3000/users/${id}`)
  .then(resp => resp.json())
  .then(data => {
    this.setState({
      user_data: data
    })
  })
}

moveEvent = (activityObj, eventObj) => {
  let question = activityObj.activity_events[0].selected ? false : true
  let data = {
      selected: question
  }
  fetch(`http://localhost:3000/activity_events/${activityObj.activity_events[0].id}`,  {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
    let stateCopy = {...this.state.user_data}
    let singleEvent = stateCopy.events.find(e => e.id === activityObj.activity_events[0].event_id)
    let singleAct = singleEvent.activities.find(a => a.id === activityObj.id)
    singleAct.activity_events[0].selected = question
    this.setState({
     user_data: stateCopy,
     event: eventObj
  })
  })
}

handleDelete = (party) => {
  fetch(`http://localhost:3000/events/${party.id}`,{
    method: 'DELETE'
  }).then(resp => resp.json())
  .then(data => {alert(data.message)
    let events = this.state.user_data.events.filter(e=> e !== party)
    this.setState({
      user_data:{
        ...this.state.user_data,
        events: events
      }
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
alert("Event Added!!")

}

onSelectedParty = (selectedParty) => {
  this.setState({
    event: selectedParty
  })
}

generateNew = (arr, event) => {
  let data = [arr,event]

fetch('http://localhost:3000/generate_new', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'accepts': 'application.json'
    },
    body: JSON.stringify(data)
})
.then(res => res.json())
.then( data => {
  let stateCopy = {...this.state.user_data}
  let singleEvent = stateCopy.events.find(e => e.id === event.id)
  singleEvent.activities = data
  this.setState({
    user_data: stateCopy,
    event: event
  })

})

}

render(){
  const {user_data} = this.state
  let todaysDate = new Date()
  let formatDate = todaysDate.getFullYear() + '0'+(todaysDate.getMonth() + 1)  +  todaysDate.getDate()
  let pastEvents = user_data.events.filter(e=>  { return parseInt(e.date.split('-').join('')) < formatDate
  })
  let futureEvents = user_data.events.filter(e=>  { return parseInt(e.date.split('-').join('')) >= formatDate
})

  return (
    <div className="App">


      <Navbar />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/upcoming' render={ routerProps =>   <UpcomingEvents {...routerProps} events={futureEvents} handleDelete={this.handleDelete} onSelectedParty={this.onSelectedParty} />}/>
      <Route exact path='/past' render={ routerProps =>   <PastEvents {...routerProps} events={pastEvents}/>}/>
      <Route exact path='/new' render={ (props) =>{
         return <Form handleSubmit={this.handleSubmit}  />  }}
         />
      <Route exact path='/events/:id' render={(props)=> { 
        let eventId = parseInt(props.match.params.id)
        let eventFound = this.state.event ? this.state.event : user_data.events.find(e=> e.id === eventId)
        return eventFound ? <EventDetails generateNew={this.generateNew} eventObj={this.state.eventObj} event={eventFound} moveEvent={this.moveEvent} user_data={user_data}  /> :  <Home /> 
      }}/>
      </Switch>
  

    </div>

    
  );
}
}

export default App;
