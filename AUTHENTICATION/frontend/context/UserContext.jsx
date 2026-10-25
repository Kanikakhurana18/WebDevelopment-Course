import React, { createContext } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

export const dataContext = createContext()
function UserContext({ children }) {
  let [userData, setUserData] = useState(null)
  const serverUrl = "http://localhost:8000"

  const getUserData = async () => {
    try {
      let { data } = await axios.get(serverUrl + "/api/getUserData", {
        withCredentials: true
      })
      setUserData(data)
    } catch (error) {
      console.log(
        "getUserData error:",
        error.response?.data || error.message
      );

    }
  }

  const value = {
    serverUrl,
    userData,
    setUserData,
    getUserData

  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext
