import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Tab, Row } from 'react-bootstrap'
// import { HashLink as Link } from 'react-router-hash-link';

export const Home = () => {
  return (
    <div className='Home'>
      <Jumbotron>
        <h1>This is our amazing Campus Forum app</h1>
        <p>Tervetuloa!
        </p>
      </Jumbotron>
      <div>
        <Tab.Container id='list-group-tabs-mods' defaultActiveKey='#link1'>
          <Row>
            {/* <Col md={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1" as={Link} to='#link1'>
                <code>components/ScooterList.jsx</code>
                </ListGroup.Item>
              </ListGroup>
            </Col> */}
          </Row>
        </Tab.Container>
      </div>
    </div>
  )
}
