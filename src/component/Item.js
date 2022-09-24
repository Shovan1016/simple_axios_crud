import React from 'react'
import EditModal from './EditModal';

const Item = (props) => {

    const [modalShow, setModalShow] = React.useState(false);
    const deleteing=(id)=>{
        props.onDelete(id);
        console.log(id)
    }
    const oneditHandler=(edit)=>{
      props.oneditHandler(edit)
    }

  

  return (
    <div className="container border my-4 border-info">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <button className="btn btn-success mb-5 me-4" onClick={()=>{setModalShow(true)}}>Edit</button>
        
        <button className="btn btn-danger mb-5" onClick={()=>{deleteing(props.id)}}>delete</button>
        <EditModal  
            show={modalShow}
            onHide={() => setModalShow(false)} title={props.title} body={props.body} id={props.id} onEditData={oneditHandler}/>

    </div>
  )
}

export default Item