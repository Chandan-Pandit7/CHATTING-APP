import React from 'react'

const Avatar = ({avatar, people}) => {
  return (
		<>
			<div className="w-24 h-24 p-1 mb-5 rounded-full flex flex-col items-center justify-center ">
				<img
					src={`${avatar}`}
					alt="avatar"
				/>
              <div className="pt-1 ">{people}</div>
			</div>
		</>
  );
}

export default Avatar