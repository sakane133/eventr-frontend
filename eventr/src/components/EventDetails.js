import React from 'react'
import Activities from './Activities'

class EventDetails extends React.Component {
    constructor(){
        super()
        this.state = {
            attending: []
        }
    }

    addEvent = (activityObj) => {
        if(!this.state.attending.includes(activityObj)){
        this.setState({
            attending: [...this.state.attending, activityObj]
        })
    }
    }
    removeEvent = (activityObj) => {
        let newArr = this.state.attending.filter(act => act !== activityObj)
        this.setState({
            attending: newArr
        })
    }

    render(){
        const {name, event_type, budget, num_people, date, activities} = this.props.event
        return(
            <div>
               <p>{name}</p> 
               <p>{event_type}</p> 
               <p>Date: {date}</p> 
               <p>Budget: ${budget}</p> 
               <p>Attendees: {num_people}</p> 
            <div className='selected'>
                <h2>Planning to attend:</h2>
                <div className='ui grid'><div className='six column row'>{this.state.attending ? this.state.attending.map(act => {
                return <Activities  act={act} key={act.id} attending={this.state.attending} removeEvent={this.removeEvent}/>
            }) : null }</div></div>
            </div>
            <div>
                <h2>Suggested Events:</h2>
            <div className='ui grid'><div className='six column row'>{activities.map(act => {
                return <Activities addEvent={this.addEvent} act={act} key={act.id} attending={this.state.attending}/>
            })}</div></div>
            </div>
            </div>
         
        )
    }

    }
        
    
   

export default EventDetails