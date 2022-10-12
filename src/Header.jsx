import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
const name  = useSelector((state) => state.user.name); //don't use destructuring syntax
  return (
    <div
    style={{width:'100vw', height: '75px', textAlign:'center'}}>This is Header Hello {name}</div>
  )
}

export default Header