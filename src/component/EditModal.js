import React,{useState} from 'react'
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';


const EditModal = (props) => {
   
    const [enteredId,setEnteredId]=useState(props.id);
    const [enterdTitle,setEnteredTitle]=useState(props.title);
    const [enteredBOdy,setEnteredBody]=useState(props.body) 
  
    const changeTitleHandler=(event)=>{setEnteredTitle(event.target.value)}
    const changeBodyHandler=(event)=>{setEnteredBody(event.target.value)}
  
    const submitHandler=(event)=>{
      event.preventDefault()
  
  
      const obj={
        userId:1,
        id:props.id,
        title:enterdTitle,
        body:enteredBOdy
      }
      props.onEditData(obj)
  
      setEnteredId("");
      setEnteredTitle("");
      setEnteredBody("");
  
    }

   

  return (
    <div>
         <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editing Mode On
        </Modal.Title>
      </Modal.Header>
      <div className="container text-center mt-5 d-flex justify-content-around">
      <div className="w-50 border border-info  p-4 rounded mb-5">
    <Form onSubmit={submitHandler}>

    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
      <Form.Label>Email Title</Form.Label>
      <Form.Control type="title" placeholder="abc welcome" onChange={changeTitleHandler} value={enterdTitle} />
    </Form.Group>
    <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Enter body</Form.Label>
      <Form.Control as="textarea" rows={3} onChange={changeBodyHandler} value={enteredBOdy}/>
    </Form.Group>
    <button className="btn btn-primary px-3" type="primary"  onClick={props.onHide}>Edit</button>
  </Form>
  </div>
  </div>
    </Modal>
    </div>
  )
}

export default EditModal