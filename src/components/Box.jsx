import React from 'react'
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap"
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'

export default function Box() {
    return (
        <div>
            <Container style={{ paddingTop: 50}}>
                <Row>
                    <Col>     <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col style={{ paddingRight:400}}>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>   </Col>
                </Row>
                <Row>
                    <Col style={{ paddingTop: 50}}>     <Card style={{ width: '18rem', height: '18rem'}}>

                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Hello</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col style={{ paddingTop: 50,paddingRight:400}}>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>   </Col>



                </Row>
            </Container>


        </div>
    )
}