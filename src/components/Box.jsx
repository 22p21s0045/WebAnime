import React from 'react'
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap"
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Box() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios('https://api.jikan.moe/v3/top/anime/1/bypopularity')
            .then(response => setdata(response))


    }, [])
    console.log(data.data?.top[0].image_url)

    return (
        <div>
            <Container style={{ paddingTop: 50 }}>
                <Row >
                    <Col classname ='boxs'>
                        <Card style={{ width: '18rem', height: '18rem' }}>

                            <Card.Img variant="top" src={data.data?.top[0].image_url} style={{ width: '18rem', height: '18rem' }} />
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

                    <Col style={{ paddingRight: 30 }}classname ='boxs' >    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[1].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col style={{ paddingTop: 5, paddingLeft: 0 }}classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[2].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>


                </Row>
                <Row style={{ paddingTop: 150 }}>
                    <Col style={{ paddingTop: 50 }}classname ='boxs'>     <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[3].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>4</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col style={{ paddingTop: 50, paddingRight: 30 }}classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[4].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>5</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col style={{ paddingTop: 50, paddingLeft: 0 }}classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[5].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>6</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>










                </Row>
                <Row style={{ paddingTop: 150 }} classname ='boxs'>
                    <Col style={{ paddingTop: 50 }}>     <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[6].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>7</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col style={{ paddingTop: 50, paddingRight: 30 }}classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[7].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>8</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col style={{ paddingTop: 50, paddingLeft: 0 }}classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[8].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>9</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>










                </Row>
                <Row style={{ paddingTop: 150 }}>
                    <Col style={{ paddingTop: 50 }} classname ='boxs'>     <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[9].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>10</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col style={{ paddingTop: 50, paddingRight: 30 }}classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[10].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>11</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col style={{ paddingTop: 50, paddingLeft: 0 }}classname ='boxs'>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[11].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>12</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>










                </Row>
                <Row style={{ paddingTop: 150 }}>
                    <Col style={{ paddingTop: 50 }}>     <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[12].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>13</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col style={{ paddingTop: 50, paddingRight: 30 }}>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[13].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>14</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col style={{ paddingTop: 50, paddingLeft: 0 }}>    <Card style={{ width: '18rem', height: '18rem' }}>

                        <Card.Img variant="top" src={data.data?.top[14].image_url} style={{ width: '18rem', height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>15</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </Col>










                </Row>

            </Container>


        </div>
    )
}
