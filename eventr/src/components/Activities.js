import React from 'react'

class Activities extends React.Component{

    render(){

        const {name, image, link, activity_events} = this.props.act
    return(

    <div className='column'>
        <div className="ui card">
                <img className="image" src={image}/>
            <div className="content">
                <a className="header">{name}</a>
  
            </div>
        <div className="extra content">
            <a clasName="info"href={link}>
            <i className="info icon"></i>
                More Info
             <div></div>
             <br/>
            </a>
            {
            <button onClick={() => this.props.moveEvent(this.props.act, this.props.event)}>{activity_events[0].selected ? 'Delete Event' : 'Add Event' }</button> 
            }
        </div>
</div>
    </div>

       
    )

    }
    
}

export default Activities 