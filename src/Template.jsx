import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/apiCalls';
import { remove, update } from './redux/features/userSlice';

const Template = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { userInfo, pending, error}  = useSelector((state) => state.user); //using destructuring syntax
    const dispatch = useDispatch();

    const clickHandler = (e) => {
      e.preventDefault();
      updateUser({name, email}, dispatch)
      setName('');
      setEmail('');
    }
  return (
    <div>This is Template Hello {userInfo.name}
        <div>
        <div>
            <label>Username</label>
            <input onChange={(e)=> setName(e.target.value)} placeholder={userInfo.name} type='text' value={name || ''} />
        </div>
        <div>
            <label>email</label>
            <input onChange={(e)=> setEmail(e.target.value)} placeholder={userInfo.email} type='email' value={email || ''} />
        </div>
        <button onClick={clickHandler}>Submit</button>
        </div>
        <br />
        {/* <button onClick={()=> dispatch(remove())}>LogOut</button> */}
        
    </div>
  )
}

export default Template