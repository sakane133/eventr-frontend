import React from 'react'
import Activities from './Activities'
import Photos from './Photos'


class EventCard extends React.Component{

    render(){
        const{party} = this.props
        return(
            <div>
             <br/>   
             <br/>   

<div className='four wide column'>
<div className="ui cards">
<div className="card">
    <div className="content">
        <div className="header">{party.name}</div>
            <div className="meta">{party.event_type}</div>
                    <ul>
                        <li>Number of Attendees:{party.num_people}</li><br/>
                        <li>Budget:${party.num_people}</li><br/><br/>
                        
                        {party.activities.map(act => {
                            return <p> {act.name}</p>
                        })}
                    </ul>
              
            </div>
        </div>
    </div>

</div>

            </div>
           
  
    
  
        
        )
    }
}

export default EventCard