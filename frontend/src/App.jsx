
import { RouterProvider } from 'react-router-dom'
import { globalRoute } from './routing/GlobalRouting'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import GlobalContext from './GlobalContext/GlobalContext'

const App = () => {
    console.log("Hello")
  return (
    
        <ErrorBoundary>
          <GlobalContext>
            <RouterProvider router={globalRoute}/>
            </GlobalContext>  
        </ErrorBoundary>
    
  )
}

export default App