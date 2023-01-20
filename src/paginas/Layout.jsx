import React from 'react'
import Navbar from '../componentes/Navbar'
import Sidebar from '../componentes/Sidebar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
        <Sidebar />
        <div className="xl:col-span-5">
          <Navbar />
          <div className="h-[90vh] overflow-y-scroll p-8">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout;