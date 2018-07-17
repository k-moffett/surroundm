import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleUserName = this.handleUserName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleUserName(event) {
        this.setState({username: event.target.value});
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSignUp() {
        fetch('/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.sessid, 'responseJson');
                if (responseJson.emailCheck === 'account exists') {
                    console.log('Account with that email already exists.')
                } else {
                    console.log(responseJson.sessid)
                    this.props.history.push('/homepage')
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return(
        <Form>
            <FormGroup>
                <Input type="text" value={this.state.username} onChange={this.handleUserName} placeholder="enter a username" />
            </FormGroup>
            <FormGroup>
                <Input type="email" value={this.state.email} onChange={this.handleEmail} placeholder="enter your email" />
            </FormGroup>
            <FormGroup>
                <Input type="text" value={this.state.password} onChange={this.handlePassword} placeholder="enter password" />
            </FormGroup>
            <Button color="primary" onClick={(e) => {this.handleSignUp()}} >Sign Up</Button>
        </Form>
        )
    }
}