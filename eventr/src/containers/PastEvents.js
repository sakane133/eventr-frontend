import React from 'react'
import EventCard from '../components/EventCard'

class PastEvents extends React.Component {

    render(){
        return(
            <div className='up'>
            <h2 className='title'> Your Past Events</h2>
    <div className='ui grid'>
        
        {this.props.events.map(party =>
     {

         return <EventCard party={party} key={party.id}/>          
      } )}
    </div>
    </div>
        )
    }
}

export default PastEvents