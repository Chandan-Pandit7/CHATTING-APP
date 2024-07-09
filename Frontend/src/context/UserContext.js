import React, { createContext, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null);

    return (
		<UserContext.Provider value={{ userDetails, setUserDetails }}>
			{children}
		</UserContext.Provider>
    );
}

export default UserProvider
export {UserContext}