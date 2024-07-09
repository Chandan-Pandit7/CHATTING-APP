import React, {useState, useEffect, useRef, useContext} from 'react'
import socket from '../../utils/socket'
import {UserContext} from '../../../context/UserContext'

const input = document.querySelector('#input');

const Sendbox = () => {
  const [message, setMessage] = useState('');
  const input = useRef('')
  const btn = useRef();
  const { userDetails } = useContext(UserContext);
  
  // console.log("Button",btn.current);
  // if (btn.current.disabled == undefined) btn.current.disabled = false;

  function sendMessage() {
    setMessage(...message)
    socket.emit('send_message', {msg:message, name:userDetails.firstname});
    setMessage('')
    input.current.value=''
  }
  // if (message == "") {
	// 	btn.current.disabled = true;
  // } else {
	// 	btn.current.disabled = false;
  // }


  return (
    <div className=''>
      <input ref={input} style={{width:"90%"}} type="text" id='input' onChange={(ev)=>{setMessage(ev.target.value)}} placeholder='Enter  your message' className='w-10/12 p-2 pl-5 rounded-full ' />
      <button type="button" style={{width:"10%"}} onClick={sendMessage} className='bg-blue-600 w-36 p-2 text-white rounded-full'>Send</button>
    </div>
  )
}

export default Sendbox