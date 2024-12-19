import React from 'react'
import GlobalContext from './GlobalContext/GlobalContext'
import { RouterProvider } from 'react-router-dom'
import { globalRoute } from './routing/GlobalRouting'

const App = () => {
  return (
   <GlobalContext>
    <RouterProvider router={globalRoute}/>
   </GlobalContext>
  )
}

export default App;
