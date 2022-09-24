import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'

import Item from '../component/Item'

const MainData = () => {

const [change,onChange]=useState("")
const [mData,setMData]=useState([])

useEffect(()=>{fetchData()},[change]);

const fetchData=async ()=>{
    const respose= await axios.get("https://posts-5b9b9-default-rtdb.firebaseio.com/post.json")
    const responseData=respose.data
    const loadedPost=[];
    for (const key in responseData){
        loadedPost.push({
            id:key,
            title:responseData[key].title,
            body:responseData[key].body

        })
    }
    setMData(loadedPost)

}
const deleteItem=async (id)=>{
    const d=await axios.delete(`https://posts-5b9b9-default-rtdb.firebaseio.com/post/${id}.json/`)
    console.log(d);
    
    console.log(mData)
    onChange("deleted")
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
    onChange("edited")}


  return (
    <div className="main-div">
        <button className="btn btn-primary mt-2 px-5 fw-bold" onClick={fetchData}> Fetch</button>
        <div>
            {mData.map((y)=>(
                <Item key={y.id} title={y.title} body={y.body} onDelete={deleteItem} id={y.id} oneditHandler={editHandler}/>
            ))}
            

        </div>
    </div>
  )
}

export default MainData