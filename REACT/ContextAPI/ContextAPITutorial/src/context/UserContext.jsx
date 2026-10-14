import React, { createContext } from 'react'

export const data=createContext()

function UserContext({children}) {
    let username="Kanika Khurana"
  return (
    <div>
        <data.Provider value={username}>
        {children}
        </data.Provider>
    </div>
  )
}

export default UserContext
