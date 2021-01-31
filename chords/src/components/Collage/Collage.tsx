import React from 'react';
import {Row, Col,Container,Card} from 'react-bootstrap';
import "./Collage.css"
const Collage = () => {
    return (
        <Container className = "Collage" fluid>
            <Row>
                <Col><Card><Card.Img src = ""/></Card></Col>
                <Col><Card><Card.Img src = ""/></Card></Col>
                <Col><Card><Card.Img src = ""/></Card></Col>
            </Row>
            <Row>
                <Col><Card><Card.Img src = ""/></Card></Col>
                <Col><Card><Card.Img src = ""/></Card></Col>
                <Col><Card><Card.Img src = ""/></Card></Col>
            </Row>
            <Row>
                <Col><Card><Card.Img src = ""/></Card></Col>
                <Col><Card><Card.Img src = ""/></Card></Col>
                <Col><Card><Card.Img src = ""/></Card></Col>
            </Row>
        </Container>
    );
}    
export default Collage;