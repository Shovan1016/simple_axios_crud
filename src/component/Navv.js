import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Item from './Item';





const Navv = () => {
const [searchKey,setSearchKey]=useState("");
const [sData,setSData]=useState([]);

const deleteItem=async (id)=>{
  const d=await axios.delete(`https://posts-5b9b9-default-rtdb.firebaseio.com/post/${id}.json/`)
  console.log(d);
  // setMData(mData.filter(s=>s.id !== id));
  // console.log(mData)
  // onChange("deleted")
}

const editHandler=(edit)=>{

  const editData={
      id:1000,
      title:edit.title,
      body:edit.body,
      userId:edit.userId 
  }
  editEdit(editData,edit.id);
  
  

}
const editEdit=async(editData,id)=>{
const respose=await axios.put(`https://posts-5b9b9-default-rtdb.firebaseio.com/post/${id}.json/`,editData);
  // onChange("edited")
}


const searchHandler=async ()=>{
  const respose= await axios.get("https://posts-5b9b9-default-rtdb.firebaseio.com/post.json")
  const responseData=respose.data
const loadedPost=[];
  for (const key in responseData){
    if(responseData[key].title === searchKey){
      loadedPost.push({
          id:key,
          title:responseData[key].title,
          body:responseData[key].body

      })}
  }
  setSData(loadedPost)
  console.log(loadedPost)
  console.log(searchKey);
 
}



const enteredKeyword=(event)=>{
  setSearchKey(event.target.value);
}



  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand >Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        <span className='me-4 ms-5' > <Link to="/" style={{textDecoration:"none", color:'black'}}>Home</Link></span>
        <Link to="/add-new" style={{textDecoration:"none", color:'black'}}>Add New</Link>
         </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={enteredKeyword}
          />
          <Button variant="outline-success" onClick={searchHandler}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  {sData.map((y)=>(
    <Item key={y.id} title={y.title} body={y.body} onDelete={deleteItem} id={y.id} oneditHandler={editHandler}/>
))}
  </>
  )
}

export default Navv