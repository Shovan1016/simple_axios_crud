import React from 'react'
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const ItemFrom = (props) => {
  const [enteredId,setEnteredId]=useState("");
  const [enterdTitle,setEnteredTitle]=useState("");
  const [enteredBOdy,setEnteredBody]=useState("") 

  const [idTouched,setIdTouched]=useState(false);
//   const [titleTouched,setTitleTouched]=useState(false);
//   const [bodyTouched,setBodyTouched]=useState(false);

  const [idValid,setIdValid]=useState(false)
//   const [titleValid,setTitleValid]=useState(false)
//   const [bodyValid,setBodyValid]=useState(false)



  const changeIdHandler=(event)=>{

    setEnteredId(event.target.value)

    setIdValid(false)
    setIdTouched(true);
    if(event.target.value.trim().length >=1 && event.target.value>100)
    {
      setIdValid(true)
    }
  }

  const changeTitleHandler=(event)=>{setEnteredTitle(event.target.value)}
  const changeBodyHandler=(event)=>{setEnteredBody(event.target.value)}

  const submitHandler=(event)=>{
    event.preventDefault()


    const obj={
      userId:1,
      id:enteredId,
      title:enterdTitle,
      body:enteredBOdy
    }
    props.onNewData(obj)

    setEnteredId("");
    setEnteredTitle("");
    setEnteredBody("");

  }


  return (
    <div className="container text-center mt-5 d-flex justify-content-around">
      <div className="w-50 border border-info p-4 rounded">
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
      <Form.Label>Enter id</Form.Label>
     {!idValid && idTouched && <p className="text-start text-danger">Please Enter a value</p>}
      <Form.Control type="number" placeholder="101" onChange={changeIdHandler} value={enteredId}/>
    </Form.Group>
    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
      <Form.Label>Email Title</Form.Label>
      <Form.Control type="title" placeholder="abc welcome" onChange={changeTitleHandler} value={enterdTitle} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Enter body</Form.Label>
      <Form.Control as="textarea" rows={3} onChange={changeBodyHandler} value={enteredBOdy}/>
    </Form.Group>
   <button className="btn btn-success" type="submit">Submit</button>
  </Form>
  </div>
  </div>
  )
}

export default ItemFrom