import React, { Component } from 'react'
import {Modal, Button, Form, Col, Row} from 'react-bootstrap'

export class FavModal extends Component {
    render() {
        return (
            <div>
                <Modal show= {this.props.ShowModal} onHide= {this.props.close} >
  <Modal.Header closeButton>
    <Modal.Title>update</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form onSubmit= {(e)=> this.props.UpdateFav(e)}>
  <Form.Group  className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" name='name'  defaultValue={this.props.UpdateData.name} />
    </Col>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" name='instructions'defaultValue={this.props.UpdateData.instructions} />
    </Col>
  </Form.Group>
</Form>
  </Modal.Body>

  <Modal.Footer>
    
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal>
            </div>
        )
    }
}

export default FavModal
