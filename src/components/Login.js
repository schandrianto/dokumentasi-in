import '../styles/_login.scss';
import React from 'react';
import {Form, Button, Image} from 'react-bootstrap';


function Login() {
    return(
        <div className='background'>
            <div className='login-form'>
                <div className='grid-container'>
                    <div className='picture'>
                        <Image className='form-img' src='Images/img-left.jpg' fluid/>
                    </div>
                    <div>
                        <div>
                            <p className='p1'>Hi !</p>
                            <p className='p2'>welcome back to our
                            project documentation :)</p>
                        </div>
                        <div>
                            <Form className="mx-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <div className='button-form'>
                                    <Button className="btn-sign" variant="primary" type="submit" size="md" href={'/home'}>
                                        Sign in
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const STATE_LOGIN = 'LOGIN';
export default Login;