import React, { createContext } from 'react'

export let data= createContext()
function Story({children}) {
    let stories={
        name:"The Last Lesson",
        storyline:"Fantasy and Fiction"
    }
  return (
    <div>
    <data.Provider value={stories}>
      {children}
    </data.Provider>
    </div>
  )
}

export default Story
