import React, {useEffect, useState} from 'react'
import './Chatroom.css'
import Chatwindow from './Chatwindow';
import Sendbox from './Sendbox';


const Chatroom = () => {
  return (
		<div className="chat-room bg-green-500 h-full ">
			<div className="z-10 blur-box ">
				
			  <Chatwindow />
			  <Sendbox/>
			</div>
		</div>
  );
}












{
	/* <img
					src="https://cdn-icons-png.flaticon.com/128/12924/12924575.png"
					alt=" table"
					className="table-icon overflow-hidden"
				/>
				<img
				  src="https://photo-cdn2.icons8.com/lcrVVKjdk4WIWXOSx8pTTkK8l0SQhE6AJoX1uQJL7tE/rs:fit:1334:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L2VkaXRvci9tb2Rl/bC80OS82ZTUxM2Qw/Mi0wYTM2LTQyNzgt/YTIzNS01N2RlMmUw/M2QwMGIucG5n.png"
					alt="person"
					className="person-icon"
				/> */
}

export default Chatroom