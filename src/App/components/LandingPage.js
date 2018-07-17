import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';
import SignUp from './SignUp'
import Login from './Login'

export default class LandingPage extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <Container className="LandingPage">
            <SignUp history={this.props.history} />
            <Login history={this.props.history} />
        </Container>
    );
  }
}

