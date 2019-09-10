import React from 'react'
import Photos from './Photos'
import { Link } from 'react-router-dom'


class EventCard extends React.Component{

    render(){
        const{party} = this.props
        return(
            <div>
             <br/>   
             <br/>   

<div className='six wide column'>
<div className="ui cards">
<div className="card">
    <div className="content">
        <div className="header">{party.name}</div>
            <div className="meta">{party.event_type}</div>
                    <ul>
                        <li>Number of Attendees:{party.num_people}</li><br/>
                        <li>Budget:${party.num_people}</li><br/><br/>
                        
                        {party.activities.map(act => {
                            return <p key={act.id}> {act.name} </p> 
                        })}
                    </ul>
                    <Link to={`/events/${party.id}`}>
                        <button onClick={()=> this.props.onSelectedParty(party)}> View Event</button>
                    </Link>
                   
            </div>
        </div>
    </div>

</div>

            </div>
           
  
    
  
        
        )
    }
}

export default EventCard