import React from 'react'
import Activities from './Activities'

class EventDetails extends React.Component {
  


   

    attending = () => {
        return this.props.event.activities.filter(act => { 
          return act.activity_events[0].selected 
        })
    }

    suggested = () => {
        return this.props.event.activities.filter(act =>{
            return act.activity_events[0].selected === false
        })
    }

    

    render(){
        const {name, event_type, date, budget, num_people} = this.props.event
        return(
            
            <div>
        {console.log('attending is', this.attending())}
        
               <p>{name}</p> 
               <p>{event_type}</p> 
               <p>Date: {date}</p> 
               <p>Budget: ${budget}</p> 
               <p>Attendees: {num_people}</p> 
            <div className='selected'>
                <h2>Planning to attend:</h2>
                <div className='ui grid'><div className='six column row'>
        {this.attending().map(act => <Activities moveEvent={this.props.moveEvent} act={act} key={act.id} event={this.props.event}  /> )}
            </div></div>
            </div>
            <div>
                <h2>Suggested Events:</h2>
            <div className='ui grid'><div className='six column row'>
                 {this.suggested().map(act => <Activities moveEvent={this.props.moveEvent} event={this.props.event} act={act} key={act.id}  /> )}
            </div></div>
            </div>
            </div>
         
        )
    }

    }
        
    
   

export default EventDetails