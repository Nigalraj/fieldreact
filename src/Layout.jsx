import React from 'react'
import Header_2 from './components/Header_2'
import { Col, Row } from 'react-bootstrap'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header_2 />
    <Row className="mx-0">
      <Col md={1} lg={1} className="d-none bg-light d-md-inline-flex px-0">
        <Sidebar />
      </Col>
      <Col md={11} lg={11} className="px-0">
        <Outlet/>
      </Col>
    </Row>
  </>
  )
}

export default Layout