import React from 'react';
import Navbar from './components/Navbar'
import UpcomingEvents from './containers/UpcomingEvents'
import PastEvents from './containers/PastEvents'
import Form from './components/Form'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      activities: []
  }
  }

componentDidMount(){
    let data = {
        category: [102, 103]
    }
    fetch('http://localhost:3000/activities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accepts': 'application.json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => this.setState({activities: data}))
}
render(){
  return (
    <div className="App">


      <Navbar />
      <UpcomingEvents activities={this.state.activities}/>
      <PastEvents activities={this.state.activities}/>
      <Form />
    </div>
  );
}
}

export default App;
