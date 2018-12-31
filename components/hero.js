import React from 'react';
import {Jumbotron, Container, Row, Button} from 'reactstrap';
import PropTypes from 'prop-types';

export default function Hero(props) {
  const {title} = props;
  return (
    <Jumbotron>
      <Container>
        <Row className="justify-content-center">
          <h2 className="col-8">{title}</h2>
          <div className="w-100" />
          <p className="col-8 pt-5 text-center">
            <a href="//github.com/finscrapers/finscrapers/releases/download/v1.0.0/finscrapers-mac-1.0.0.dmg">
              <Button color="secondary" size="lg">
                Download
              </Button>
            </a>
          </p>
        </Row>
      </Container>
    </Jumbotron>
  );
}

Hero.propTypes = {
  title: PropTypes.string
};
