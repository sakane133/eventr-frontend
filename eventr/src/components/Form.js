import React from 'react'

class Form extends React.Component {

    constructor(){
        super()
        this.state = {
            user_id: 1,
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
            <form onSubmit={(e) => this.props.handleSubmit(e, this.returnState())}>
            <label>
              Event Name:
              <input onChange={this.handleChange} type="text" name="name"  />
            </label>
            <label><br/>
              Event Type:
              <input type="text" name="event_type" onChange={this.handleChange} />
            </label><br/>
            <label>
              Event Date:
              <input type="date" name="date" onChange={this.handleChange}  />
            </label>
            <br/>
            <label>
              Budget:
              <input type="number" name="budget" onChange={this.handleChange} />
            </label>
            <br/>
            <label>
              Number of Attendees:
              <input type="number" name="num_people" onChange={this.handleChange}  />
            </label>
            <br/>
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
       
            <input type="submit" value="Submit"  />
          </form >
        )
    }
}


export default Form