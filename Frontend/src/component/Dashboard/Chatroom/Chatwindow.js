import React,{useState, useEffect} from 'react'
import socket from '../../utils/socket'

const Chatwindow = () => {
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
      socket.on("msg-received", (data) => {
        let prevChats = [...chatLog];
        prevChats.push(data);
        setChatLog([...chatLog, data]);
      });
  },[chatLog])

  return (
    <div className=' h-5/6' style={{height:'94%'}}>
      <ul className='loadChat '>
        {chatLog.map((chat, index) => {
          return <li key={index} className='flex justify-between ml-3'> {chat.name}: {chat.msg}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Chatwindow