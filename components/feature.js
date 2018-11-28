import React from 'react';
import {Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';

export default function Feature(props) {
  const {icon, subheading, text} = props;
  return (
    <Col xs="6">
      <Row>
        <Col xs="2">
          <img src={icon} alt="icon" />
        </Col>
        <Col xs="10">
          <h3 className="text-secondary text-left">{subheading}</h3>
          <p>{text}</p>
        </Col>
      </Row>
    </Col>
  );
}

Feature.propTypes = {
  icon: PropTypes.string,
  subheading: PropTypes.string,
  text: PropTypes.string
};
