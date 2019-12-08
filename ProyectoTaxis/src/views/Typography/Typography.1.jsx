import React from "react";
import CardAuthor from "components/CardElements/CardAuthor.jsx";
import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";
import { Card, CardHeader, CardFooter, CardBody, Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">Paper Table Heading</h5>
                <p className="category">Created using Montserrat Font Family</p>
              </CardHeader>
              <CardBody>



            <Col xs={12} sm={6} md={6} lg={3}>
              <Card className="card-user">
              <div className="image">
                <img src={damirBosnjak} alt="..." />
              </div>
              
              <CardBody>
                <CardAuthor
                  avatar={mike}
                  avatarAlt="..."
                  title="{item.nombre}"
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
            </Col>



              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Typography;
