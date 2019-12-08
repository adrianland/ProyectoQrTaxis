import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col } from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import avatar from "assets/img/default-avatar.png";
import empleados from "assets/img/empleados.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import ItemAdd from './ItemAdd.jsx';
import{ Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



import axios,{post} from 'axios';

class User extends React.Component {
  
            constructor(props){
              super(props);
            
              this.state = {
                nombre: "",
                apellido: "",
                documento: "",
                celular: "",
                correo: "",
                direccion: "",
                ciudad: "",
                pais: "",
                informacion: "",
                placa: ""
              };
              this.handleClick = this.handleClick.bind(this);
              this.handleChange = this.handleChange.bind(this);

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
  


    handleAdd(data) {
      //console.log(data)
       fetch('http://localhost/reactjs/serviciosjs/taxis/crearEmpleado.php?nombre='+data.nombre
        +'&apellido='+data.apellido+'&documento='+data.documento
        +'&celular='+data.celular+'&email='+data.correo
        +'&direccion='+data.direccion+'&ciudad='+data.ciudad
        +'&pais='+data.pais+'&informacion='+data.informacion+"&placa="+data.placa)
        .then(res => res.json())
        .catch(error => alert('Error:' + error))
        .then(json => {
            alert(json.mns);
            if (json.code === 1) {
                this.setState({
                    items: [...this.state.items, data]
                });
            }
        });
           
        }


  handleClick(e){
    e.preventDefault();
    this.clearForm();

  
    this.handleAdd(this.state);
    /* this.setState({
        nombre : "",
        apellido : "",
        documento : "",
        celular : "",
        correo : "",
        direccion : "",
        ciudad : "",
        pais : "",
        informacion : "",
        placa : "",
      });*/

     

    

   /* let files=e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) =>{
     const url = "http://localhost/Reactjs/serviciosjs/fotostaxis";
     const formData = { file: e.target.result }
        return post(url, formData)
        .then(response => console.warn("result: "+response))
    console.warn("datos : ",e.target.result);

    }*/

}

  handleChange(e){
    const { value, name } = e.target;
    this.setState({
        [name]: value,
        //file:e.target.files[0]
    });
  }


  clearForm = () => {
    document.getElementById("myForm").reset(); 
    this.setState({
      item: ""
    })
  }


  render() {
 
    return (
      
      <div className="content">
        <Row>
          <Col md={4} xs={12}>
            <Card className="card-user">
              <div className="image">
                <img src={empleados} alt="..." />
              </div>
              <CardBody>
                <CardAuthor
                  avatar={empleados}
                  avatarAlt="..."
                  title="Foto"
                />
               
              </CardBody>
             
            </Card>
           
          </Col>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Crear nuevo usuario</CardTitle>
              </CardHeader>
              <CardBody>
                <form id="myForm">


                <FormInputs
                    ncols={["col-md-4 pr-1", "col-md-4 px-1", "col-md-4 pl-1"]}
                    proprieties={[
                      {
                        label: "Nombre",
                        inputProps: {
                          type: "text",
                          name:"nombre",
                          onChange:this.handleChange,
                          Value: this.state.nombre,
                          placeholder: "Nombre"
                        }
                      },
                      {
                        label: "Apellido",
                        inputProps: {
                          type: "text",
                          name:"apellido",
                          onChange:this.handleChange,
                          Value: this.state.apellido,
                          placeholder: "Apellido"
                        }
                      },
                      {
                        label: "Documento",
                        inputProps: {
                          type: "text",
                          name:"documento",
                          placeholder: "Documento",
                          onChange:this.handleChange,
                          Value: this.state.documento,
                        }
                      }
                    ]}
                  />
                    <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                    proprieties={[
                      {
                        label: "Celular",
                        inputProps: {
                          type: "text",
                          name:"celular",
                          placeholder: "Celular",
                          onChange:this.handleChange,
                          Value: this.state.celular,
                        }
                      },
                      {
                        label: "E-mail",
                        inputProps: {
                          type: "text",
                          name:"correo",
                          placeholder: "Correo Electronico",
                          onChange:this.handleChange,
                          Value: this.state.correo,
                        }
                      }
                    ]}
                  />
                <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                    proprieties={[
                      {
                        label: "Direccion",
                        inputProps: {
                          type: "text",
                          name:"direccion",
                          placeholder: "Direccion",
                          onChange:this.handleChange,
                          Value: this.state.direccion
                        }
                      },
                      {
                        label: "Placa",
                        inputProps: {
                          type: "text",
                          name:"placa",
                          placeholder: "Placa del Taxi",
                          onChange:this.handleChange,
                          Value: this.state.placa
                        }
                      }
                    ]}
                  />
                <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                    proprieties={[
                      {
                        label: "Pis",
                        inputProps: {
                          type: "text",
                          name:"pais",
                          placeholder: "Pais",
                          onChange:this.handleChange,
                          Value: this.state.pais
                        }
                      },
                      {
                        label: "Ciudad",
                        inputProps: {
                          type: "text",
                          name:"ciudad",
                          placeholder: "Ciudad",
                          onChange:this.handleChange,
                          Value: this.state.ciudad
                        }
                      }
                    ]}
                  />

              <FormInputs
                    ncols={["col-md-6 pr-1"]}
                    proprieties={[
                      {
                        label: "Informacion",
                        inputProps: {
                          type: "text",
                          name:"informacion",
                          placeholder: "Informacion",
                          onChange:this.handleChange,
                          Value: this.state.informacion
                        }
                      }
                    ]}
                  />

                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="primary" round onClick={this.handleClick}>Crear</Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        
        </Row>
      </div>
    );
  }
}

export default User;
