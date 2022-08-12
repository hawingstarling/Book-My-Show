import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import { MainLayout } from './layout'
import Login from './components/Login/Login'
import User from './components/User/User'
import Ticket from './components/Ticket/Ticket'

function App() {
  return (
    <div className="App">
      <Routes>
        { publicRoutes.map((route, index) => {
          const Page = route.component
          let Layout = MainLayout
          
          if (route.layout) Layout = route.layout
          else if (route.layout === null) Layout = Fragment

          return <Route 
            key={index} 
            path={route.path} 
            element={
              <Layout>
                <Page />
              </Layout>
            } 
          />
        })}
        {/* <Seating />
        <Login />
        <User />
        <Ticket /> */}
      </Routes>
    </div>
  );
}

export default App;
