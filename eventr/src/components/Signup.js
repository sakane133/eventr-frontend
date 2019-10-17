import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const SignUpDiv = styled.div`

`

class Signup extends React.Component{

    render(){
        return(
            <SignUpDiv>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Form size='large'>
              <Header as='h2' color='purple' textAlign='center'>
                 Log-in to your account
              </Header>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='Pick a Username' />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Enter your Password'
                    type='password'
                  />
        
                  <Button color='purple' fluid size='large'>
                    Sign Up
                  </Button>
                </Segment>
              </Form>
              <Message>
               Already have an account? <a href='/login'>Log in</a>
              </Message>
            </Grid.Column>
          </Grid>
            </SignUpDiv>
            
        )
    }
}
export default Signup