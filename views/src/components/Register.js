import '../styles/_login.scss';
import React from 'react';
import {Col, Form } from 'react-bootstrap';


// function Register() {
//     return(
//         <div className="background">
//             <div className='login-form'>
//                 <div className='grid-form'>
//                     <div className='picture'>
//                         <Image className='form-img' src='Images/img-left.jpg' fluid/>
//                     </div>
//                     <div>
//                         <div>
//                             <p className='p1'>Hi !</p>
//                             <p className='p2'>welcome back to our
//                             project documentation :)</p>
//                         </div> 
//                         <Form className="mx-3">
//                             <div className="grid-container mb-2">
//                                 <Form.Group as={Col}  controlId="formBasicEmail">
//                                     <Form.Label>First Name</Form.Label>
//                                     <Form.Control type="email" placeholder="Enter first name" />
//                                 </Form.Group>
//                                 <Form.Group as={Col} controlId="formBasicEmail">
//                                     <Form.Label>Last Name</Form.Label>
//                                     <Form.Control type="email" placeholder="Enter last name" />
//                                 </Form.Group>
//                             </div>

//                             <div className="grid-container mb-2">
//                                 <Form.Group as={Col} controlId="formBasicEmail">
//                                     <Form.Label>Username</Form.Label>
//                                     <Form.Control type="email" placeholder="Enter username" />
//                                 </Form.Group>

//                                 <Form.Group as={Col} controlId="formBasicEmail">
//                                     <Form.Label>Email address</Form.Label>
//                                     <Form.Control type="email" placeholder="Enter email" />
//                                 </Form.Group>
//                             </div>

//                             <Form.Group className="mb-2">
//                                 <Form.Label>Role</Form.Label>
//                                 <Form.Select>
//                                     <option value="1">Admin</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </Form.Select>
//                             </Form.Group>

//                             <div className="grid-container mb-2">
//                                 <Form.Group as={Col} controlId="formBasicPassword">
//                                     <Form.Label>Password</Form.Label>
//                                     <Form.Control type="password" placeholder="Password" />
//                                 </Form.Group > 
//                                 <Form.Group as={Col} controlId="formBasicPassword">
//                                     <Form.Label>Confirm Password</Form.Label>
//                                     <Form.Control type="password" placeholder="Password" />
//                                 </Form.Group>
//                             </div>

                        
//                             <div className='button-form'>
//                                 <Button className="btn-sign" variant="primary" type="submit" size="md">
//                                     Sign in
//                                 </Button>
//                             </div>
//                         </Form>
//                         <div className='text-register'>
//                             Already have an account? 
//                             <Link to={'/'} id="register">Sign in here.</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div> 
//         </div>
//     )
// }

function Register() {
    return(
        <div>
            <Form className="mx-3">
                <div className="grid-container mb-2">
                    <Form.Group as={Col}  controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter last name" />
                    </Form.Group>
                </div>

                <div className="grid-container mb-2">
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </div>

                <Form.Group className="mb-2">
                    <Form.Label>Role</Form.Label>
                    <Form.Select>
                        <option value="1">Admin</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <div className="grid-container mb-2">
                    <Form.Group as={Col} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group > 
                    <Form.Group as={Col} controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export const STATE_SIGNUP = 'SIGNUP';
export default Register;