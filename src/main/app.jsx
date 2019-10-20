import '../commom/template/dependencies'
import React from 'react'
import Routes from './routes'
 
import Header from '../commom/template/header'
import Sidebar from '../commom/template/sidebar'
import Footer from '../commom/template/footer'

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
  </div>
)