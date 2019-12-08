/*eslint-disable*/
import React from "react";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col
} from "reactstrap";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

import Button from "components/CustomButton/CustomButton.jsx";

import axios, { post } from 'axios';


class Notifications extends React.Component {

  state = { selectedFile: null }

fileChangedHandler = event => {
  this.setState({ selectedFile: event.target.files[0] })
}

uploadHandler = () => {
  const formData = new FormData()
  formData.append(
    'myFile',
    this.state.selectedFile,
    this.state.selectedFile.name
  )
  axios.post('http://localhost/Reactjs/serviciosjs/fotostaxis', formData)
}
  
  render() {
    return (
      <div className="content">
        <Row>
        <form>
        <input type="file" onChange={this.fileChangedHandler}></input>
         <button onClick={this.uploadHandler}>Upload!</button>
        </form>
        </Row>
      </div>
    );
  }
}

export default Notifications;
