import React from 'react'

const Activities = (props) => {
    const {name, image, link} = props.act
    return(
    <div className='column'>
        <div className="ui card">
            <div className="image">
                <img src={image}/>
            </div>
            <div className="content">
                <a className="header">{name}</a>
  
            </div>
        <div className="extra content">
            <a href={link}>
            <i className="user icon"></i>
             More Info
            </a>
            {props.attending.includes(props.act)? <button onClick={() => props.removeEvent(props.act)}>Remove Activity</button> : 
            <button onClick={() => props.addEvent(props.act)}>Add Activity</button> }
        </div>
</div>
    </div>

       
    )
}

export default Activities 