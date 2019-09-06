import React from 'react'
import EventCard from '../components/EventCard'

class UpcomingEvents extends React.Component {


    componentDidMount(){
        let data = {
            category: [102, 103]
        }
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accepts': 'application.json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(console.log)
    }

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