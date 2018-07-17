import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleLogin() {
        console.log('login motherfucker')
        fetch('/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'responseJson')
                if (responseJson.passCheck === 'correct') {
                    this.props.history.push('/homepage')
                } else {
                    console.log(responseJson.passCheck, 'incorrect pass')
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
                <Input type="email" value={this.state.email} onChange={this.handleEmail} placeholder="enter your email" />
            </FormGroup>
            <FormGroup>
                <Input type="text" value={this.state.password} onChange={this.handlePassword} placeholder="enter password" />
            </FormGroup>
            <Button color="primary" onClick={(e) => {this.handleLogin()}} >Log In</Button>{' '}
        </Form>
        )
    }
}