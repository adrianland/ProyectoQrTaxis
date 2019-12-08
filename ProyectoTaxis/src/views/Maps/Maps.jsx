import React from "react";
import QRCode from 'qrcode.react';

import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"; 


class FullScreenMap extends React.Component {

  render() {
    return (
      <div className="content">
        <Row>
        <QRCode value="http://facebook.github.io/react/" />
        </Row>
      </div>
    );
  }
}

export default FullScreenMap;
