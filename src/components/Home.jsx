import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Tab } from 'react-bootstrap'
import SideBar from './SideBar';


export const Home = () => {
  return (
      
    <div className='Home'>
     
      <Jumbotron>
        <h1>Welcome to the Campus Forum ™</h1>
      </Jumbotron>
      <div>
        <Tab.Container id='list-group-tabs-mods' defaultActiveKey='#link1'>
            <SideBar />
        </Tab.Container>
      </div>
    </div>
  )
}
