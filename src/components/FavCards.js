import React, { Component } from 'react'
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export class FavCards extends Component {
    render() {
        return (
            <div>
                 <Container>
          <Row md={3}>
            {this.props.dataCrud.map((i, n) => (
              <Col key={n}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={i.photo} />
                  <Card.Body>
                    <Card.Title>{i.name}</Card.Title>
                    <Card.Text>{i.instructions}</Card.Text>
                    <Button variant="danger" onClick={() => this.props.deleteFavorite (i._id)} >
                      delete
                    </Button>
                    <Button variant="danger" onClick={() => this.props.UpdateFavorite(i)} >
                      update
                    </Button>
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

export default FavCards
