import React from "react";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import CardAuthor from "components/CardElements/CardAuthor.jsx";
import mike from "assets/img/mike.jpg";
import QRCode from 'qrcode.react';


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Typography extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            open: false,
        }
    }

    componentDidMount() {
      fetch('http://localhost/reactjs/serviciosjs/taxis/todos.php')
              .then(response => response.json())
              .then(json => {
                  console.log(json);
                  this.setState({
                      isLoaded: true,
                      items: json.empleados ,
                  });
              });
      }


      handleSelectUser(id) {
        this.setState({

        })
        let data = this.state.items.find((element) => {
            return element.id === id
        });
        
        this.setState({
            open: true,
            selectedUser: data
        });
    }

  handleClickOpen = () => {
    this.setState({
        open: true,
    });
   };

handleClose = value => {
  this.setState({ open: false });
};
render() {

  const { isLoaded, items } = this.state;

  const perfiles = items.map(item => {

  return (
           <Col md={4} xs={12}>
            <Card className="card-user">
            <div className="image">
              <img src={damirBosnjak} alt="./Modal.jsx" />
            </div>
            <CardBody>
              <CardAuthor
                avatar={"http://localhost/Reactjs/serviciosjs/fotostaxis/"+item.foto}
                avatarAlt="..."
                title={item.nombre+" "+item.apellido}
                description={item.celular}
              />
             <p className="text-center">
                <QRCode value={item.id} />
              </p>

            </CardBody>
            <CardFooter>
              <hr />
              <div className="text-center">
                <Row>
                  <Col xs={6} sm={6} md={6} lg={4} >
                    <h6 className="text-center">
                     {item.placa}
                      <br/>
                      <small >Placa</small>
                    </h6>
                  </Col>
                </Row>
              </div>
            </CardFooter>
          </Card>
          </Col>
  );
});  

      return(
        <div className="content">
          <Row>
            {perfiles}
          </Row>
        </div>
      );
  }
}

export default Typography;
