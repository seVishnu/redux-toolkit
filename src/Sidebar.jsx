import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const name  = useSelector((state) => state.user.userInfo.name); //don't use destructuring syntax
  return (
    <div style={{height:'80vh', width:'400px', display:'flex', alignItems:'center'}}>This is Sidebar Hello {name}</div>
  )
}

export default Sidebar