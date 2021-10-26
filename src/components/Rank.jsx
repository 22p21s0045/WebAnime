import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
export default function Rank() {
    let dataObject =[]
    fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    .then(response => response.json())
    .then(darthVaderObj => {
        dataObject.push(darthVaderObj);
      })
    
    
    
    
    //.then(response => console.log(response.top[0].title))\/
    const [data, setdata] = useState(dataObject)
    console.log()
    return (
        <div>
            <Container style={{ paddingLeft: 300, paddingTop: 15 }}>

                <Row >
                    <Card style={{ backgroundColor: '#FEF1E6', width: '30rem', height: '3rem' }}>
                        
                        <h1>{data[0].top[0].title}</h1>

                        
                       

                    </Card>





                </Row>
                <Row>
                    <Card style={{ backgroundColor: '#F9D5A7', width: '30rem', height: '3rem' }}>
                        <h1>Hello2</h1>

                    </Card>



                </Row>
                <Row>
                    <Card style={{ backgroundColor: '#90AACB', width: '30rem', height: '3rem' }}>
                        <h1>Hello3</h1>

                    </Card>


                </Row>




            </Container>
        </div>
    )
}
