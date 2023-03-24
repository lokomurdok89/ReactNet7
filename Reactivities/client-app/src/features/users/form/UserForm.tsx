import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Header, Modal, Segment } from "semantic-ui-react";
import { User } from "../../../app/model/user";

interface Props{
    user:User|undefined;
    closeForm:() => void;
    createOrEdit:(user:User)=> void;
    submitting:boolean;
    isOpen:boolean;
}

export default function UserForm({user: selectedUser,closeForm,createOrEdit,submitting,isOpen}:Props){
    console.log()
    var initialState = selectedUser ?? {
        id:'',
        nombre:'',
        correo:'',
        fechaNacimiento:'',
        rut:''
    };
    
    const[user, setUser] = useState(initialState);
    
    function handleSubmit(){
        console.log("submit")
        createOrEdit(user);
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const{name,value}=event.target;
        setUser({...user,[name]:value})
    }   
        return(
           
            <Modal open={isOpen} dimmer={'blurring'}>
            <Modal.Header>Usuario</Modal.Header>            
            <Modal.Content>
                <Form onSubmit={handleSubmit} autoComplete='off'>
                    <label>Nombre</label>
                    <Form.Input placeholder="Nombre" value={user.nombre} name='nombre' onChange={handleInputChange}/>
                    <label>Correo</label>
                    <Form.Input placeholder="Correo" value={user.correo} name='correo'  onChange={handleInputChange}></Form.Input>
                    <label>Rut</label>
                    <Form.Input placeholder="Rut"name='rut' value={user.rut} onChange={handleInputChange}></Form.Input>
                    <label>Fecha Nacimiento</label>
                    <Form.Input placeholder="FechaNacimiento" type="date" value={user.fechaNacimiento} name='fechaNacimiento' onChange={handleInputChange} ></Form.Input> 
                    <Button color='black' onClick={() => closeForm()} floated="right" content="Cancel" ></Button> 
                    <Button loading ={submitting} floated="right" positive type="submit" content="Submit" icon='checkmark'></Button> 
                </Form>   
            </Modal.Content> 
            <Modal.Actions>
                <p></p>
                                         
            </Modal.Actions>
            </Modal>
    )

}