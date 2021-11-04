import React from "react";
import { Container} from 'react-bootstrap';
import '../styles/_bookmark.scss';
import { FontIcon } from '@react-md/icon';

function Bookmark(){
    return(
        <Container fluid="sm" id="cont-bookmark">
            <h1 id="title-bookmark">Bookmark Projects</h1>
            <div className="grid-bookmark">
                <a className="link-content" href="#project">
                    <div className="grid-content">
                        <FontIcon style={{color:'#f5567d'}}>star</FontIcon>
                        <div>
                            <h4>Bookstack User Guide</h4>
                            <p>Everything a general user needs to know about using BookStack on a regular basis.</p>
                        </div>
                    </div>
                </a>
                <a className="link-content" href="#project">
                    <div className="grid-content">
                        <FontIcon style={{color:'#f5d056'}}>star</FontIcon>
                        <div>
                            <h4>An Example Bookshelf</h4>
                            <p>A bookshelf can contain multiple books and a book can be in multiple shelves.</p>
                        </div>
                    </div>
                </a>
                <a className="link-content" href="#project">
                    <div className="grid-content">
                        <FontIcon style={{color:'#adf556'}}>star</FontIcon>
                        <div>
                            <h4>Logging in to the demo site</h4>
                            <p>This demo site has the following credentials</p>
                        </div>
                    </div>
                </a>
                <a className="link-content" href="#project">
                    <div className="grid-content">
                        <FontIcon style={{color:'#56c3f5'}}>star</FontIcon>
                        <div>
                            <h4>Test Chapter One</h4>
                            <p>Years created hath without together bearing dry waters over kind third that under form in saying thing them day so own may beast bearing moving that won't had.</p>
                        </div>
                    </div>
                </a>
            </div>
        </Container>
    );
}

export default Bookmark;