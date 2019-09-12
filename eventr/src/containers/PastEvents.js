import React from 'react'
import PastEventCard from '../components/PastEventCard'

class PastEvents extends React.Component {

    render(){
        return(
            <div className='up'>
            <h2 className='title'> Your Past Events</h2>
    <div className='ui grid' id='grid'>
        
        {this.props.events.map(party =>
     {

         return <PastEventCard party={party} key={party.id}/>          
      } )}
    </div>
    </div>
        )
    }
}

export default PastEvents