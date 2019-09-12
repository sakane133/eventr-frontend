import React from 'react'


const Home = () => {
    const image = require('../images/party.svg')
    return(
        <div className='home'>
        <img className='party-img' src={image}/>
        <div>
        <h1 className='title-home'>Eventr</h1>
            <p className='tag'>Your Personal Party Assistant</p>
            <a href='/new'class="button">Get Started</a>
        </div>
        
      </div>

  

        
    )
}

export default Home