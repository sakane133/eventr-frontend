import React from 'react'
import Photos from './Photos'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


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
    <FontAwesomeIcon onClick={() => this.props.handleDelete(party)} className='icon-trash' icon={faTrash} />
        <h1 className="header" id="pn">{party.name}</h1>
            <div className="meta">{party.event_type}</div>
                    <ul>
                        <li>Date: {party.date}</li>
                        <li>Number of Attendees: {party.num_people}</li><br/><br/>
                        <li>Budget: ${party.budget}</li><br/><br/>
                    
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