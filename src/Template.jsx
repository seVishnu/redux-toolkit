import { useState } from 'react'

const Template = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    console.log(name, email);
    const clickHandler = (e) => {
      e.preventDefault();
      console.log('clicked')

      setName('');
      setEmail('');
    }
  return (
    <div>This is Template Hello Vishnu
        <div>
        <div>
            <label>Username</label>
            <input onChange={(e)=> setName(e.target.value)} placeholder='username' type='text' value={name || ''} />
        </div>
        <div>
            <label>email</label>
            <input onChange={(e)=> setEmail(e.target.value)} placeholder='email' type='email' value={email || ''} />
        </div>
        <button onClick={clickHandler}>Submit</button>
        </div>
        
    </div>
  )
}

export default Template