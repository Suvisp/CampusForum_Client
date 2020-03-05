import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Tab } from 'react-bootstrap'
import SideBar from './SideBar';
import { HashLink as Link } from 'react-router-hash-link';
// import { HashLink as Link } from 'react-router-hash-link';

export const Home = () => {
  return (
      
    <div className='Home'>
     
      <Jumbotron>
        <h1>Welcome to the Campus Forum ™</h1>
      </Jumbotron>
      
      <div>
        <Tab.Container id='list-group-tabs-mods' defaultActiveKey='#link1'>

            <SideBar />
          {/* <Row>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1" as={Link} to='#link1'>
                <code>components/ScooterList.jsx</code>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row> */}
        </Tab.Container>
      </div>
    </div>
  )
}
