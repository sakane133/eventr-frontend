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
            {
            <button onClick={() => props.addEvent(props.act, props.event)}>Add Activity</button> }
        </div>
</div>
    </div>

       
    )
}

export default Activities 