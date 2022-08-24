import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export class UserEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedTrip: {
        location: this.props.destinations?.location,
        start_date: this.props.destinations?.start_date,
        end_date: this.props.destinations?.end_date,
        travelers: this.props.destinations?.travelers,
        trip_details: this.props.destinations?.trip_details
      },
      success: false
    }
  }

  handleChange = (e) => {
    const { updatedTrip } = this.state
    updatedTrip[e.target.name] = e.target.value
    this.setState({ updatedTrip: updatedTrip })
  }

  handleSubmit = (e) => { 
    this.props.updateUserDestinations(this.state.updatedTrip, this.props.destinations.id)
    this.setState({ success: true })
  }

  render(){
    let {destinations} = this.props
    console.log("trip" , this.state.updatedTrip)
    return (
      <>
        <h2 className='usereditheader'>Let's Make Some Changes!</h2>
        {destinations && 
          <Form className='usereditform'>
            <FormGroup>
              <Label for="location">Location: </Label>
              <Input
              type="text"
              name="location"
              onChange={this.handleChange}
              value={this.state.updatedTrip.location}/>
            </FormGroup>
            <FormGroup>
              <Label for="start_date">Start Date: </Label>
              <Input
              type="date"
              name="start_date"
              onChange={this.handleChange}
              value={this.state.updatedTrip.start_date}/>
            </FormGroup> 
            <FormGroup>
              <Label for="end_date">End Date: </Label>
              <Input
              type="date"
              name="end_date"
              onChange={this.handleChange}
              value={this.state.updatedTrip.end_date}/>
            </FormGroup>
            <FormGroup>
              <Label for="travelers">Number of Travelers: </Label>
              <Input
              type="number"
              name="travelers"
              onChange={this.handleChange}
              value={this.state.updatedTrip.travelers}/>
            </FormGroup>
            <FormGroup>
              <Label for="trip_details">Trip Details: </Label>
              <Input
              type="textarea"
              name="trip_details"
              onChange={this.handleChange}
              value={this.state.updatedTrip.trip_details}/>
            </FormGroup>        
            <Button 
              name="submit" 
              onClick={this.handleSubmit}>
              Update Trip!
            </Button>  
            {this.state.success && <Redirect to={"/mytrips"}/>}
          </Form>
        }
      </>
    )
  }
}

export default UserEdit