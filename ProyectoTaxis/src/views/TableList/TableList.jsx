import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
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
import{ Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormInputs from "components/FormInputs/FormInputs.jsx";

import icons from "variables/icons";



import { thead, tbody } from "variables/general";

class RegularTables extends React.Component {


        constructor(props) {
          super(props);
           let selectedUser = this.userSelected;
         
          if(selectedUser !== false){
            this.state = {
              items: [],
              isLoaded: false,
              open: false,
              modalDemo: false,
            };
        }else{
            this.state = {
              
              items: [],
              selectedUser: false,
              isLoaded: false,
              open: false,
              modalDemo: false,
            };
        }
        this.toggleModalDemo = this.toggleModalDemo.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);



      }

      toggleModalDemo(e){
        this.setState({
            modalDemo: !this.state.modalDemo,
            id:e.id,
            nombre:e.nombre,
            apellido: e.apellido,
            documento: e.documento,
            celular: e.celular,
            correo: e.correo,
            direccion: e.direccion,
            ciudad: e.ciudad,
            pais: e.pais,
            informacion: e.informacion,
            placa: e.placa,
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


      handleEditUser(data) {

        fetch('http://localhost/reactjs/serviciosjs/taxis/editar.php?nombre='+data.nombre
        +'&apellido='+data.apellido+'&documento='+data.documento
        +'&celular='+data.celular+'&email='+data.correo
        +'&direccion='+data.direccion+'&ciudad='+data.ciudad
        +'&pais='+data.pais+'&informacion='+data.informacion+"&placa="+data.placa+"&id="+data.id)
        .then(res => res.json())
        .then(json => {
            alert(json.mns);
            if(json.code === 1){
                let empleados = this.state.items;
                let index = empleados.findIndex((element) => {
                    return element.id === data.id
                });
                empleados[index] = data;
                this.setState({
                    open: false,
                    items: empleados,
                    modalDemo: false,

                });
            }
        }).catch(error => alert('Error:' + error));
      }

        handleDeleteUser = (id) => {
          if (window.confirm('¿Está seguro que desea eliminar este grupo?')) {
              fetch('http://localhost/Reactjs/serviciosjs/taxis/eliminar.php?id=' + id)
              .then(res => res.json())
              .then(json => {
                  alert(json.mns);
                  if (json.code === 1) { 
                      this.setState({
                          items: this.state.items.filter((element) => {
                              return element.id !== id
                          })
                      });
                  }
              }).catch(error => alert('Error:' + error));
          }
        }

      //  Nduthr29*Ecali20%Mbog16=

        componentDidMount() {
          fetch('http://localhost/Reactjs/serviciosjs/taxis/listatabla.php')
                  .then(response => response.json())
                  .then(json => {
                      console.log(json.empleados);
                      this.setState({
                          isLoaded: true,
                          items: json.empleados //filter((e,i) =>{return i < 7}),
                      });
                  });
          }

          handleClick(e){
            e.preventDefault();
            this.handleEditUser(this.state);
            this.setState({
              nombre:"",
              apellido: "",
              documento: "",
              celular: "",
              correo: "",
              direccion: "",
              ciudad: "",
              pais: "",
              informacion: "",
              placa: "",
              });

            }
           

            handleChange(e){
              const { value, name } = e.target;
              this.setState({
                  [name]: value,
              });
            }
          


  render() {

    const { isLoaded, items } = this.state;
    const { classes } = this.props;


    const data = items.map(item => {
    return (
       <tr >
          <td >
          {item.nombre}
          </td>
          <td>
          {item.apellido}
          </td>
          <td>
          {item.documento}
          </td>
          <td>
          {item.celular}
          </td>
          <td>
          {item.correo}
          </td>
          <td>
          {item.direccion}
          </td>
          <td>
          {item.ciudad}
          </td>
          <td>
          {item.pais}
          </td>
          <td>
          {item.placa}
          </td>
          
          
          <td>
          <Button color="primary" round 
          onClick={this.toggleModalDemo.bind(this,item)}
          //imprimir={this.state.imprimir}
          userSelected={this.state.userSelected}>
          <i className={"nc-icon nc-ruler-pencil"} />
          </Button>

          <Button color="danger" round  
          onClick={this.handleDeleteUser.bind(this, item.id)}>
          <i className={"nc-icon nc-simple-remove"} />
          </Button>

         

          </td>
       </tr>
       
    );
  });


  return(
<div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Empleados</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>nombre</th>
                      <th>apellido</th>
                      <th>documento</th>
                      <th>celular</th>
                      <th className="text-center">correo</th>
                      <th >direccion</th>
                      <th>ciudad</th>
                      <th>pais</th>
                      <th>placa</th>
                      <th className="text-center">accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            <form style={{padding: 15}}>
            <Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo}>
              <div className="modal-header justify-content-center">
               <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggleModalDemo}>
                <span aria-hidden="true">×</span>
              </button>
                 <h5 className="modal-title"></h5>
             </div>
            <ModalBody>
                    
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

      
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModalDemo}>
                  Cancelar
              </Button>
              <Button color="primary" onClick={this.handleClick}>
                  Editar
              </Button>
            </ModalFooter>
            </Modal>
                 
          </form>
          </Col>
        </Row>
      </div>
  );


  }
}

export default RegularTables;
