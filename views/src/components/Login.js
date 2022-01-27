import '../styles/_login.scss';
import React, { useState } from 'react';
import {Form, Button, Image} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import swal from 'sweetalert';


function Login() {
    //Untuk simpan input value
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false);

    //Jalanin login api
    const submit = async event => {
        event.preventDefault();
        console.log({
            username, 
            password
        })

        const response = await fetch('http://localhost:1234/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include', //untuk simpan cookie
            body: JSON.stringify({
                username,
                password
            })
        });

        const content = await response.json();
        console.log(content.status);

        if(content.status === "success"){
            setRedirect(true);
        }
        else{
            return swal("Login Gagal", content.message, "error");
        }
    }

    //Redirect jika api sukses
    if(redirect){
        return <Redirect to='/home'/>
    }

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
                            <Form className="mx-3" onSubmit={submit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" 
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" 
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <div className='button-form'>
                                    <Button className="btn-sign" variant="primary" type="submit" size="md" /*href={'/home'}*/>
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