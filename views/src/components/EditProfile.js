import React from "react";
import { Container, Image, Form, Button} from 'react-bootstrap';
import { FontIcon } from '@react-md/icon';
import '../styles/_profile.scss'

function EditProfile(){
    return(
        <Container fluid="sm" id="cont-eProfile">
            <h3 style={{textAlign:'center', padding:'30px'}}>Edit Profile</h3>
            <div className="grid-eProfile">
                <div className="gridPhoto-eProfile">
                    <div className="cont-avatar">
                        <div className="outer">
                            <Image className="img-vProfile" src="https://vetstreet.brightspotcdn.com/dims4/default/ed74abe/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F6c%2Fc9%2F03f60ba14dc1bfeddce2ff9c064c%2Fgolden-retriever-AP-0YXM8S-645sm8513.jpg" roundedCircle />
                            <div className="inner">
                                {/* <input class="inputfile" type="file" name="pic" accept="image*"/> */}
                                <Button className="btn-changeProfile" variant="light">
                                    <FontIcon id="icon-add">add</FontIcon>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="email" defaultValue="Levly" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" defaultValue="Mylo" placeholder="Enter last name" />
                </Form.Group>
                <div id="gridRole-eProfile">
                    <Form.Label>Role</Form.Label>
                    <Form.Select>
                        <option value="1">Admin</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
                <div></div>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group > 
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div></div>
                <Button className="btn-editProfile" variant="outline-primary" type="submit" size="md">
                    Save
                </Button>
                <Button className="btn-editProfile" variant="outline-secondary" type="submit" size="md">
                    Cancel
                </Button>
            </div>
        </Container>
    );
}

export default EditProfile;