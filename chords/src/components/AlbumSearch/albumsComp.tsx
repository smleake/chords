import React from 'react';
import { Card, Container } from 'react-bootstrap';
import "./albumComp.css"

const AlbumList = ({albumList} : {albumList:any}) => {
    return (
        <Container className="d-flex">
            <Card>
                <div title={albumList.title}>
                    <a href={albumList.link}>
                        <Card.Img src={ albumList.img.url} alt=""/>
                    </a>
                </div>
            </Card>
        </Container>
            
    );
}
export default AlbumList;