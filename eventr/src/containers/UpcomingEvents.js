import React from 'react'
import EventCard from '../components/EventCard'

class UpcomingEvents extends React.Component {

    render(){
        return(
            <div>Upcoming Events
                <EventCard />
                <EventCard />
            </div>

        )
    }
}

export default UpcomingEvents