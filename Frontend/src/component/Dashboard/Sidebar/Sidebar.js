import React from 'react'
import './Sidebar.css'
import Avatar from './Avatar';

let avatars = [
	"https://cdn-icons-png.flaticon.com/128/4140/4140061.png",
	"https://cdn-icons-png.flaticon.com/128/706/706830.png",
	"https://cdn-icons-png.flaticon.com/128/11498/11498793.png",
	"https://cdn-icons-png.flaticon.com/128/4140/4140039.png",
	"https://cdn-icons-png.flaticon.com/128/1154/1154448.png"
];
let peoples = [
  "John Doe", "Bob Smith", "Alice Brown", "Mike Jones", "Lucy "
]

const Sidebar = () => {
  return (
    <div className="side-bar pt-5 p-1 h-full">
      {avatars.map((avatar, indx) => {
        return <Avatar  avatar={avatar} people={peoples[indx]} />
      })}
		</div>
  );
}

export default Sidebar