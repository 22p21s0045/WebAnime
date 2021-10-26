import React from 'react'
import { useState,useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import axios from 'axios';
export default function Rank() {
    const [data, setdata] = useState([])
    useEffect(()=>{
        axios('https://api.jikan.moe/v3/top/anime/1/bypopularity')
        .then(response =>setdata(response))
    
    
      },[])

    
    
    
    //.then(response => console.log(response.top[0].title))\/
    
    console.log(data.data?.top[0].title)
    return (
        <div>
            <Container style={{ paddingLeft: 300, paddingTop: 15 }}>

                <Row >
                    <Card style={{ backgroundColor: '#FEF1E6', width: '30rem', height: '3rem' }}>
                        
                        <h1 style={{textAlign: 'center'}}>{data.data?.top[0].title}</h1>

                        
                       

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
