// Write your code here
import {Component} from 'react'
import './index.css'

const clickStatus = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  registeredView = () => (
    <div className="active">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="image"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  yetToRegisterView = () => (
    <div className="active">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  closed = () => (
    <div className="active">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registration soon!</p>
    </div>
  )

  defaultText = () => (
    <div className="active">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  render() {
    console.log('initial')
    const {status} = this.props
    switch (status) {
      case clickStatus.registered:
        return this.registeredView()
      case clickStatus.yetToRegister:
        return this.yetToRegisterView()
      case clickStatus.closed:
        return this.closed()
      default:
        return this.defaultText()
    }
  }
}

export default ActiveEventRegistrationDetails
