import React from "react";
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from "semantic-ui-react";

class Login extends React.Component {
 state = {
   name: "",
   password: "",
 };
 
 handleChange = (e, { name, value }) => {
   this.setState({ [name]: value });
 };

 handleLoginSubmit = () => {
   //make a fetch call
   fetch('http://localhost:3000/api/v1/login', {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({user: {
       name: this.state.name,
       password: this.state.password
     }})
   })
   .then(res => res.json())
   .then(data => {
     if(data.user){
       console.log(data.jwt)
       localStorage.setItem('token', data.jwt)
       this.props.updateUser(data.user)
     }else{
       alert("Incorrect name or password")
     }
   })
   //update the state of user
 };
 render() {
   return (
     <Segment>
       <Form
         onSubmit={this.handleLoginSubmit}
         size="mini"
         key="mini"
         loading={this.props.authenticatingUser}
         error={this.props.failedLogin}
       >
         <Message
           error
           header={this.props.failedLogin ? this.props.error : null}
         />
         <Form.Group widths="equal">
           <Form.Input
             label="name"
             placeholder="name"
             name="name"
             onChange={this.handleChange}
             value={this.state.name}
           />
           <Form.Input
             type="password"
             label="password"
             placeholder="password"
             name="password"
             onChange={this.handleChange}
             value={this.state.password}
           />
         </Form.Group>
         <Button type="submit">Login</Button>
       </Form>
     </Segment>
   );
 }
}
export default withRouter(Login);