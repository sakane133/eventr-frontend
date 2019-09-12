import React from 'react'

class Form extends React.Component {

    constructor(){
        super()
        this.state = {
            user_id: 7,
            name: '',
            event_type: '',
            date: '',
            budget:0,
            num_people: 0,
            interests: []
        }
           

        

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheckbox = (e) => {
        if (e.target.checked && !this.state.interests.includes(e.target.value) ){
            this.setState({
                interests: [...this.state.interests, e.target.value]
            })
        } else {
            let newI = this.state.interests.filter(i => !e.target.value)
            this.setState({
                interests: newI
            })
        }
    }

    returnState = () => {
        let party = this.state
        return party
    }

    render(){
        return(
            <div className='form'>
            <h2>Create a new event!</h2>
                 <form className='ui form' onSubmit={(e) => this.props.handleSubmit(this.returnState())}>
                    <div class='field'>   
                    <input onChange={this.handleChange} type="text" name="name" placeholder='Event Name'  />
                    </div>

                    <div class='field'>   
                    <input type="text" name="event_type" onChange={this.handleChange} placeholder='Event Type' />
                    </div>
                    
                    <div class='field'>   
                    <input type="date" name="date" onChange={this.handleChange}  placeholder='Event Date' />
                    </div>

                   <br/>
                   <div class='field'>   
                   <input type="number" name="budget" onChange={this.handleChange} placeholder='Budget' />
                    </div>

                    <div className='field'>
                    <input type="number" name="num_people" onChange={this.handleChange} placeholder='Number of Attendees'  />
                    </div>
                    <div>

                    </div>
                    <br/>

                    <div>
                        
                    </div>
                    <label>
                        Interests:
                    </label><br/>
                    <label>
                        Music
                    <input type="checkbox" name="music" value='103' onChange={this.handleCheckbox}  />
                    </label>
                    <label>
                        Beauty/Fashion
                    <input type="checkbox" name="beauty" value='106' onChange={this.handleCheckbox}  />
                    </label>
                    <label>
                        Food/Drink
                    <input type="checkbox" name="food" value='110' onChange={this.handleCheckbox}  />
                    </label>
                    <label>
                        Travel/Outdoors
                    <input type="checkbox" name="travel" value='109' onChange={this.handleCheckbox}  />
                    </label>
                    <label>
                        Performing Arts
                    <input type="checkbox" name="arts" value='105' onChange={this.handleCheckbox}  />
                    </label>
                <br/>
                    <input className='ui button' type="submit" value="Submit"  />
          </form >
            </div>
           
        )
    }
}


export default Form