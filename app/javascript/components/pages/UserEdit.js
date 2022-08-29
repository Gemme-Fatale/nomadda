import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export class UserEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedTrip: {
        location: this.props.destinations?.location,
        main_attraction: this.props.destinations?.main_attraction,
        start_date: this.props.destinations?.start_date,
        end_date: this.props.destinations?.end_date,
        travelers: this.props.destinations?.travelers,
        trip_details: this.props.destinations?.trip_details,
        image: this.props.destinations?.image,
        family_friendly: this.props.destinations?.family_friendly,
        visitable_id: this.props.destinations?.visitable_id,
        visitable_type: this.props.destinations?.visitable_type,
        country: this.props.destinations?.country
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

  render() {
    let {destinations} = this.props
    return (
      <>
        <div className='whole-edit-page'>
          <h2 className='user-edit-header'>Let's Make Some Changes!</h2>
          {destinations && 
            <Form className='user-edit-form'>
              <FormGroup>
                <Label className='edit-form-label' for="location">Location: </Label>
                <Input
                className='edit-input'
                type="text"
                name="location"
                onChange={this.handleChange}
                value={this.state.updatedTrip.location}/>
              </FormGroup>
              <FormGroup>
                <Label className='edit-form-label' for="start_date">Start Date: </Label>
                <Input
                className='edit-input'
                type="date"
                name="start_date"
                onChange={this.handleChange}
                value={this.state.updatedTrip.start_date}/>
              </FormGroup> 
              <FormGroup>
                <Label className='edit-form-label' for="end_date">End Date: </Label>
                <Input
                className='edit-input'
                type="date"
                name="end_date"
                onChange={this.handleChange}
                value={this.state.updatedTrip.end_date}/>
              </FormGroup>
              <FormGroup>
                <Label className='edit-form-label' for="travelers">Number of Travelers: </Label>
                <Input
                className='edit-input'
                type="number"
                name="travelers"
                onChange={this.handleChange}
                value={this.state.updatedTrip.travelers}/>
              </FormGroup>
              <FormGroup>
                <Label className='edit-form-label' for="trip_details">Trip Details: </Label>
                <Input
                className='edit-input'
                type="textarea"
                name="trip_details"
                onChange={this.handleChange}
                value={this.state.updatedTrip.trip_details}/>
              </FormGroup>        
              <Button 
                className='edit-button'
                name="submit" 
                onClick={this.handleSubmit}>
                Update Trip!
              </Button>  
              {this.state.success && <Redirect to={"/mytrips"}/>}
            </Form>
          }
        </div>
      </>
    )
  }
}

export default UserEdit