import React from 'react'
import EventCard from '../components/EventCard'

class UpcomingEvents extends React.Component {

    render(){
        return(
            <div>Upcoming Events
                {this.props.activities.map(act =>
             {return <EventCard act={act} key={act.id}/>
                   
              } )}
            </div>

        )
    }
}

export default UpcomingEvents