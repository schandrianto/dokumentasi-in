import React from "react";
import { Container } from "react-bootstrap";
import Roles from "./Roles.js";
import User from "./User.js";
import '../styles/_setting.scss';

function Setting(){
    return(
        <Container fluid="sm" id="cont-bookmark">
            <Roles />
            <User />
        </Container>
    );
}

export default Setting;