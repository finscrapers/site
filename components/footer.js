import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export default function Footer() {
  return (
    <footer className="container-fluid py-4">
      <Row className="align-items-center">
        <Col xs="8">
          <p className="mb-2">© Finscrapers 2018</p>
          <p className="mb-0">Licensed under the MIT License.</p>
        </Col>
        <Col size="4" className="text-right">
          <a href="//twitter.com/finscrapers">
            <img src="/static/twitter.svg" alt="Twitter" />
          </a>
        </Col>
      </Row>
    </footer>
  );
}
