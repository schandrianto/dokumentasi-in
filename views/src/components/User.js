import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { FontIcon } from '@react-md/icon';
import '../styles/_setting.scss'
import Register from "./Register";

function User(){
    const [show, setShow] = useState(false);

    const formShow = () => setShow(true);
    const formClose = () => setShow(false);

    return(
        <div style={{marginTop:"50px"}}>
            {/* FORM */}
            <Modal show={show} onHide={formClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign:"center"}}>Create New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Register />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={formClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
           <div className="grid-user">
               <h1>User</h1>
               <div style={{margin:"auto"}}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="search-user"
                />
               </div>
                <div style={{margin:"auto"}}>
                    <Button className="btn-user" onClick={ formShow }>
                        <div className="grid-buttonAdd">
                            <FontIcon className="icon-addRole">person_add</FontIcon>
                             User
                        </div>
                    </Button>
                </div> 
           </div>
           <div className="grid-userTable">
               <div className="title grid-border">
                <p>Name</p>
                <p>Email</p>
                <p>User Roles</p>
               </div>
               <div className="grid-border">
                <p>Rio</p>
                <p>rio@gmail.com</p>
                <p>Admin</p>
               </div>
               <div className="grid-border">
                <p>Rara</p>
                <p>rara@gmail.com</p>
                <p>Programmer</p>
               </div>
               <div className="grid-border">
                <p>Kiki</p>
                <p>kiki@gmail.com</p>
                <p>Support</p>
               </div>
               <div className="grid-border">
                <p>Tina</p>
                <p>tina@gmail.com</p>
                <p>Viewer</p>
               </div>
               <div className="grid-border">
                <p>Sinta</p>
                <p>sinta@gmail.com</p>
                <p>Bussines Analyts</p>
               </div>
           </div>
        </div>
    );
}

export default User;