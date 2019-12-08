import React from "react";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import header from "assets/img/header.jpg";
import Header from "components/Header/Header.jsx";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import mike from "assets/img/mike.jpg";
import QRCode from 'qrcode.react';
import{ Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StarRatings from 'react-star-ratings';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import Stats from "components/Stats/Stats.jsx";

import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

class Dashboard extends React.Component {

        constructor(props) {
          super(props);
          this.state = {
              items: [],
              isLoaded: false,
              items2: [],
              isLoaded2: false,
              open: false,
              modalLarge: false

          }
          this.toggleModalLarge = this.toggleModalLarge.bind(this);



      }

      changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
      }

      toggleModalLarge(e){
        this.setState({
          modalLarge: !this.state.modalLarge,

          
               });
        this.handleDetalles(e);

         
    }

    handleDetalles(e){
      fetch('http://localhost/Reactjs/serviciosjs/taxis/detalles.php?id='+e.id)
      .then(response => {
        if(!response.ok){
          throw new Error("Bad response");
        }
        return response.json();
      })
      .then(json => {
          this.setState({
              isLoaded2: true,
              items2: json.detalles,
          });
      }).catch(error => console.error(error));
      
                
    }

  

      componentDidMount() {
        fetch('http://localhost/reactjs/serviciosjs/taxis/listarEmpleado.php')
                .then(response => response.json())
                .then(json => {
                    console.log("normal: "+json.empleados);
                    this.setState({
                        isLoaded: true,
                        items: json.empleados ,
                    });
                });

       
        }





  render() {

    const { isLoaded, items } = this.state;
    const stylo= {
      float:"none",
      textAlign:"center",
    }
    const boton={
      backgroundColor: "Transparent",
      backgroundRepeat:"noRepeat",
      border: "none",
      cursor:"pointer",
      outline:"none"

    }
   
    const perfiles = items.map(item => {

    return (
        <Col md={4} xs={12}>
              <Card className="card-user">
              <div className="image">
                <img src={header} alt="./Modal.jsx" />
              </div>
              
              <CardBody style={stylo}>
              <Button style={boton} onClick={this.toggleModalLarge.bind(this,item)}>
                <CardAuthor
                  avatar={"http://localhost/Reactjs/serviciosjs/fotostaxis/"+item.foto}
                  avatarAlt="..."
                  title={item.nombre+" "+item.apellido}
                  description={item.celular}
                  
                />
              </Button>
               <p className="text-center">
                  <QRCode value={item.id} />
                </p>

              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={4} className="ml-auto">
                      <h6>
                       {item.placa}
                        <br/>
                        <small>Placa</small>
                      </h6>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="mr-auto ml-auto">
                      <h6>
                        {item.viajes}
                        <br/>
                        <small>Viajes</small>
                      </h6>
                    </Col>
                    <Col lg={4} className="mr-auto">
                      <h6>
                        {parseFloat(item.puntuacion/item.viajes).toFixed( 1 )}
                        <br/>
                        <small>Tasa</small>
                      </h6>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
            
            </Col>
            
    );
  });  
  const { isLoaded2, items2 } = this.state;
  const color ={
    color:"#DCDCDC"
  }
  const fecha ={
    float:"left"
  }
  const comentario ={
    float:"right"
  }
  const detalles = items2.map(item => {
  
      return(
        <div style={stylo}>

          <Col xs={12} sm={6} md={12} lg={12} style={stylo}>
            <Card className="card-stats">
            <CardHeader>
            <div style={fecha}>{item.fecha}</div>
            </CardHeader>
              <CardBody>
                <Row>
                  <Col xs={12} md={12}>
                    <div className="text-center" >
                    {item.comentario}
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <StarRatings
                  rating={parseFloat(item.puntuacion)}
                  starDimension="40px"
                  starSpacing="15px"
                  numberOfStars={5}
                  starRatedColor={'rgb(239, 184, 16)'}
                />
              </CardFooter>
            </Card>
          </Col>
</div>

      );


  });

    return(
      <div className="content">

        <Row>
          
          {perfiles}
   
          <Modal isOpen={this.state.modalLarge} toggle={this.toggleModalLarge} size="lg">
           <ModalHeader className="justify-content-center" toggle={this.toggleModalLarge}>
             Valoraciones
           </ModalHeader>
            <ModalBody>
               
           {detalles}
          

            </ModalBody>
        </Modal>
     



        </Row>
      </div>
    );
  }
}

export default Dashboard;
