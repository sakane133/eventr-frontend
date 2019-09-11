import React from 'react'
import EventCard from '../components/EventCard'

class UpcomingEvents extends React.Component {


    render(){
        return(
            <div>
                    <h2 className='title'> Your Upcoming Events</h2>
            <div className='ui grid'>
                
                {this.props.events.map(party =>
             {

                 return <EventCard onSelectedParty={() => this.props.onSelectedParty(party)} handleDelete={this.props.handleDelete} party={party} key={party.id}/>          
              } )}
            </div>
            </div>
        

        )
    }
}

export default UpcomingEvents