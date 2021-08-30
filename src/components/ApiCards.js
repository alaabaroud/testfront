import React, { Component } from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'

export class ApiCards extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row md={3}>
                        {this.props.ApiData.map((i, n) => (
                            <Col key={n}>
               <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={i.photo} />
  <Card.Body>
    <Card.Title>{i.name}</Card.Title>
    <Card.Text>
      {i.instructions}
    </Card.Text>
    <Button variant="primary" onClick={() => this.props.addFav(i)}>like</Button>
  </Card.Body>
</Card>
</Col>
))}
</Row> 
</Container>
            </div>
        )
    }
}

export default ApiCards
