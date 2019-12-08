import React from "react";
import CardAuthor from "components/CardElements/CardAuthor.jsx";
import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import Button from "components/CustomButton/CustomButton.jsx";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
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
        open: false,
    }
    
}

  componentDidMount() {
    fetch('http://localhost/reactjs/serviciosjs/taxis/listarEmpleado.php')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    isLoaded: true,
                    items: json.empleados 
                });
            });
    }


  render() {
    
    const { classes } = this.props;
    const { isLoaded, items } = this.state;
            
    const perfiles = items.map(item => {

   /* if (!isLoaded) {
      return <div>Loading...</div>
    } else {
            items.map(item => {
*/

            return (
      
      
            <Card className="card-user">
              <div className="image">
                <img src={damirBosnjak} alt="..." />
              </div>
              
              <CardBody>
                <CardAuthor
                  avatar={mike}
                  avatarAlt="..."
                  title={item.nombre}
                  description="@chetfaker"
                />
                <p className="description text-center">
                  "I like the way you work it{" "}<br/>
                    No diggity <br/>
                    I wanna bag it up"
                    
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={3} className="ml-auto">
                      <h5>
                        12
                        <br/>
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="mr-auto ml-auto">
                      <h5>
                        2GB
                        <br/>
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col lg={3} className="mr-auto">
                      <h5>
                        24,6$
                        <br/>
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
         
      );
    });  
    return(
      <div className="content">
        <Row>
        <Col md={4} xs={12}>
      {perfiles}
      </Col>
        </Row>
      </div>
     
    );
  /*    
    });
  }
 */



  }
}

export default Dashboard;
