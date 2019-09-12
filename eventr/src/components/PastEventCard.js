import React from 'react'



class PastEventCard extends React.Component{
    att = () => {
        
        return this.props.party.activities.filter(act =>  { 
            return  act.activity_events[0].selected === true })}
        
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
        <h1 className="header" id="pn">{party.name}</h1>
            <div className="meta">{party.event_type}</div>
                    <ul>
                        <li>Date: {party.date}</li>
                        <li>Number of Attendees: {party.num_people}</li><br/><br/>
                        <li>Budget: ${party.num_people}</li><br/><br/>
                    
                    </ul>
            <div> Attended Events: </div>
            <br/>
            <div>
                { this.att().length > 0 ? this.att().map(a => {
                    return <p>{a.name}</p>
                }) : null}
               </div>
            </div>
        </div>
    </div>

</div>

            </div>
           
  
    
  
        
        )
    }
}

export default PastEventCard