import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

export class FavModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.ShowModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>update</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={(e) => this.props.UpdateFav(e)}>
              <Form.Group className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2"></Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="name"
                    defaultValue={this.props.UpdateData.name}
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="instructions"
                    defaultValue={this.props.UpdateData.instructions}

                  />
                </Col>
              </Form.Group>
              <Button variant="primary" type="submit" >Save changes</Button>

            </Form>
          </Modal.Body>

          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default FavModal;


