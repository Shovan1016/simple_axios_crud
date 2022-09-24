import React from 'react'
import ItemFrom from '../component/ItemFrom'
import axios from 'axios'

const ItemFromMain = () => {


  const newDataHandler=async (da)=>{
    console.log(da)

    const response=await axios.post('https://posts-5b9b9-default-rtdb.firebaseio.com/post.json',da);
    console.log(response)



  }


  return (
    <div><ItemFrom onNewData={newDataHandler}/></div>
  )
}

export default ItemFromMain