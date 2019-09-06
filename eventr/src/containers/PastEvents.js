import React from 'react'
import EventCard from '../components/EventCard'

class PastEvents extends React.Component {

    render(){
        return(
            <div>Past Events
                <EventCard />
                <EventCard />
            
            </div>
        )
    }
}

export default PastEvents