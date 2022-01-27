import React from "react";
import { Container, Image} from 'react-bootstrap';
import { FontIcon } from '@react-md/icon';
import '../styles/_profile.scss'

function ViewProfile(){
    return(
        <Container fluid="sm" id="cont-vProfile">
            <div className="grid-vProfile">
                <div>
                    <div id="div-img" >
                        <Image className="img-vProfile" src="https://vetstreet.brightspotcdn.com/dims4/default/ed74abe/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F6c%2Fc9%2F03f60ba14dc1bfeddce2ff9c064c%2Fgolden-retriever-AP-0YXM8S-645sm8513.jpg" roundedCircle />
                    </div>
                    <div style={{textAlign:'center', color:'white'}}>
                        <h5 id="name">Levly Mylo</h5>
                        <h6>Admin | Since 9 September 2021</h6>
                        <h6>#documentation#program</h6>
                        <p>10 Projects Documentation</p>
                    </div>
                </div>
                <div>
                    <h4 style={{paddingBottom:'40px'}}>Created Projects Documentation</h4>
                    <div className="grid-link-vProfile">
                        <a className="link-vProfile" href="#project">
                            <div className="grid-content">
                                <FontIcon className="icon-vProfile">label_important</FontIcon>
                                <div>
                                    <h5>An Example Bookshelf</h5>
                                    <p>A bookshelf can contain multiple books and a book can be in multiple shelves.</p>
                                </div>
                            </div>
                        </a>
                        <a className="link-vProfile" href="#project">
                            <div className="grid-content">
                                <FontIcon className="icon-vProfile">label_important</FontIcon>
                                <div>
                                    <h5>Logging in to the demo site</h5>
                                    <p>This demo site has the following credentials</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ViewProfile;