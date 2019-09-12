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
        <div className='event-info'>
        <h1 className="pname">{name}</h1> 
               <h4 className="det">Event Type: </h4> <p className="p">{event_type}</p>
               <h4 className="det">Date: </h4> <p className="p">{date}</p>
               <h4 className="det">Budget: </h4> <p className="p">${budget}</p>
               <h4 className="det">Attendees: </h4> <p className="p">{num_people}</p>
               <br/>
        </div>
              
            <div className='selected'>
                <h2>You have {this.attending().length} activities planned: </h2> 
                <div className='ui grid'>

                    <div className='six column row'>
                        {this.attending().map(act => <Activities moveEvent={this.props.moveEvent} act={act} key={act.id} event={this.props.event}  /> )}
                    </div>
                </div>
            </div>
            <div className='suggested'>
                <h2 >Suggested Events:  <button onClick={()=>this.props.generateNew(this.suggested(), this.props.event)}>Find new event options!</button></h2>
                </div>

            <div className='ui grid'><div className='six column row'>
                 {this.suggested().map(act => <Activities moveEvent={this.props.moveEvent} event={this.props.event} act={act} key={act.id}  /> )}
            </div></div>
            
            </div>
         
        )
    }

    }
        
    
   

export default EventDetails