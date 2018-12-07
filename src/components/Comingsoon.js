import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import FontAwesome from "react-fontawesome";

class Comingsoon extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Coming soon</h1>
                    <p className="text-muted">Enter email to be notified</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" />
                    </InputGroup>
                    <Button color="success" block>Notify Me!</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                      <Button className="btn-github mb-1" block
                        href="https://github.com/dblintio/frontend/issues/8">
                        <FontAwesome name="github"/>
                        <span>  Watch the Github Issue</span>
                      </Button>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Comingsoon;
