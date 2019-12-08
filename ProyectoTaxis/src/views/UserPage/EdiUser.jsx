import React, {Component} from 'react';
import{ Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
  } from "reactstrap";

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });

class EditUser extends Component{



    constructor(props){
        super(props);

        let selectedUser = this.props.userSelected;

        if(selectedUser !== false){
            this.state = {
                id: selectedUser.id,
                nombre: selectedUser.nombre,
                apellido: selectedUser.apellido,
                documento: selectedUser.documento,
                celular: selectedUser.celular,
                email: selectedUser.email,
                direccion: selectedUser.direccion,
                ciudad: selectedUser.ciudad,
                pais: selectedUser.pais,
                informacion: selectedUser.informacion,
                placa: selectedUser.placa,
            };
        }else{
            this.state = {
                id: 0,
                nombre: "",
                apellido: "",
                documento: "",
                celular: "",
                email: "",
                direccion: "",
                ciudad: "",
                pais: "",
                informacion: "",
                placa: "",
            };
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        console.log(this.state);
        if(this.state.id !== 0){
            this.props.onEditUser(this.state);
        }else{
            
            this.props.onAddUser(this.state);
        }

        this.setState({
                nombre: "",
                apellido: "",
                documento: "",
                celular: "",
                email: "",
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
            [name]: value
        });
    }

    render(){
        return (
            <form style={{padding: 15}}>
            <Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo}>
              <div className="modal-header justify-content-center">
               <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggleModalDemo}>
                <span aria-hidden="true">×</span>
              </button>
                 <h5 className="modal-title">Modal Title</h5>
             </div>
            <ModalBody>
      
      
                    
                    <Input 
                        name="nombre"
                        label="Nombre del grupo"
                        placeholder="Nombre"
                        value={this.state.nombre}
                        onChange={this.handleChange}
                        margin="normal" />
                    <Input 
                        name="apellido"
                        label="Nombre del grupo"
                        placeholder="Apellido"
                        value={this.state.apellido}
                        onChange={this.handleChange}
                        margin="normal" />
                   
                     <Input 
                        name="documento"
                        label="Nombre del grupo"
                        placeholder="Documento"
                        style={{width: '33%', paddingLeft: 5, paddingRight: 5}}
                        value={this.state.documento}
                        onChange={this.handleChange}
                        margin="normal" />

                     <Input 
                        name="celular"
                        label="Nombre del grupo"
                        placeholder="Celular"
                        style={{width: '33%', paddingLeft: 5, paddingRight: 5}}
                        value={this.state.celular}
                        onChange={this.handleChange}
                        margin="normal" />

                     <Input 
                        name="email"
                        label="Nombre del grupo"
                        placeholder="E-Mail"
                        style={{width: '33%', paddingLeft: 5, paddingRight: 5}}
                        value={this.state.email}
                        onChange={this.handleChange}
                        margin="normal" />

                    <Input 
                        name="direccion"
                        label="Nombre del grupo"
                        placeholder="Direccion"
                        style={{width: '33%', paddingLeft: 5, paddingRight: 5}}
                        value={this.state.direccion}
                        onChange={this.handleChange}
                        margin="normal" />

                    <Input 
                        name="placa"
                        label="Nombre del grupo"
                        placeholder="placa"
                        style={{width: '33%', paddingLeft: 5, paddingRight: 5}}
                        value={this.state.placa}
                        onChange={this.handleChange}
                        margin="normal" />  



                    <Input 
                        name="ciudad"
                        label="Nombre del grupo"
                        placeholder="Ciudad"
                        style={{width: '33%', paddingLeft: 5, paddingRight: 5}}
                        value={this.state.ciudad}
                        onChange={this.handleChange}
                        margin="normal" />

                    <Input 
                        name="pais"
                        label="Nombre del grupo"
                        placeholder="Pais"
                        style={{width: '33%', paddingLeft: 5, paddingRight: 5}}
                        value={this.state.pais}
                        onChange={this.handleChange}
                        margin="normal" />



                    <Input 
                        name="informacion"
                        label="Nombre del grupo"
                        placeholder="Informacion"
                        style={{width: '33%', paddingLeft: 5, paddingRight: 5}}
                        value={this.state.informacion}
                        onChange={this.handleChange}
                        margin="normal" />

                    <Input 
                        name="file"
                        label="Nombre del grupo"
                        placeholder="Foto"
                        type="file"
                        style={{width: '33%', paddingLeft: 5, paddingRight: 5}}
                        value={this.state.file}
                        onChange={this.handleChange}
                        onChange={(e)=>this.handleChange}
                        margin="normal" />
      
      
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModalDemo}>
                  Close
              </Button>
              <Button color="primary">
                  Save changes
              </Button>
            </ModalFooter>
            </Modal>
                 
          </form>
        );
    }
}

export default(EditUser);