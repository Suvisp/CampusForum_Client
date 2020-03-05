import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Tab } from 'react-bootstrap'
import SideBar from './SideBar';


export const Home = () => {
  return (
      
    <div className='Home'>
     
      <Jumbotron>
        <h1>Welcome to the Campus Forum ™</h1>
        <a class="weatherwidget-io" href="https://forecast7.com/en/60d2124d66/espoo/" data-label_1="ESPOO" data-label_2="WEATHER" data-theme="original" >Check the weather in Keilaniemi &#x2600; &#9928;</a>
      </Jumbotron>
      <div>
        <Tab.Container id='list-group-tabs-mods' defaultActiveKey='#link1'>
            <SideBar />
        </Tab.Container>
      </div>
    </div>
  )
}
