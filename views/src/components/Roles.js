import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FontIcon } from '@react-md/icon';
import '../styles/_setting.scss'

function Roles(){
    const [show, setShow] = useState(false);

    const formShow = () => setShow(true);
    const formClose = () => setShow(false);

    return(
        <div>
            {/* FORM */}
            <Modal show={show} onHide={formClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign:"center"}}>Create New Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="grid-onecolumn">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={formClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
           <div className="grid-setting">
               <h1>Roles</h1>
                <div style={{margin:"auto"}}>
                    <Button className="btn-role" onClick={formShow}>
                        <div className="grid-buttonAdd">
                            <FontIcon className="icon-addRole">add_circle</FontIcon>
                            Role
                        </div>
                    </Button>

                    
                </div> 
           </div>
           <div className="grid-roles">
               <div className="title grid-border">
                <p>Role Name</p>
                <p>Description</p>
                <p>Users</p>
               </div>
               <div className="grid-border">
                <p>Admin</p>
                <p>Administrator of the whole application</p>
                <p>1</p>
               </div>
               <div className="grid-border">
                <p>Business Analyts</p>
                <p>User can edit Books, Chapters & Pages</p>
                <p>10</p>
               </div>
               <div className="grid-border">
                <p>Support</p>
                <p>User can view books & their content behind authentication</p>
                <p>5</p>
               </div>
               <div className="grid-border">
                <p>Programmer</p>
                <p>The role given to public visitors if allowed</p>
                <p>1</p>
               </div>
               <div className="grid-border">
                <p>Viewer</p>
                <p>Folks in the marketing dept.</p>
                <p>20</p>
               </div>
           </div>
        </div>
    );
}

export default Roles;