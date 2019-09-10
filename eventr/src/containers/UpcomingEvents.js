import React from 'react'
import EventCard from '../components/EventCard'

class UpcomingEvents extends React.Component {


    render(){
        console.log(this.props)
        return(
            <div>
                    <h2 className='title'> Your Upcoming Events</h2>
            <div className='ui grid'>
                
                {this.props.events.map(party =>
             {

                 return <EventCard onSelectedParty={this.props.onSelectedParty} party={party} key={party.id}/>          
              } )}
            </div>
            </div>
        

        )
    }
}

export default UpcomingEvents