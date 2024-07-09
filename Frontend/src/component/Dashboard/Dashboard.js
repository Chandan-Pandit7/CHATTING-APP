import React from 'react'
import './Dashboard.css'
import Sidebar from './Sidebar/Sidebar';
import Chatroom from './Chatroom/Chatroom';

const Dashboard = () => {
  return (
    <div className='dashboard flex'>
          <Sidebar />
          <Chatroom />
	</div>
  );
}

export default Dashboard