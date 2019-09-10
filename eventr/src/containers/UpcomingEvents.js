import React from 'react'
import EventCard from '../components/EventCard'

class UpcomingEvents extends React.Component {

    render(){
        return(
            <div>
                    <h2 className='title' Your Upcoming Events/>
            <div className='ui grid'>
                {this.props.events.map(party =>
             {return <EventCard party={party} key={party.id}/>          
              } )}
            </div>
            </div>
        

        )
    }
}

export default UpcomingEvents