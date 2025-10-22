import React from 'react'
import Nav from './requestHandler/nav';
import SubNavBar from './requestHandler/subNavBar';
import RequestData from './requestHandler/requestData';


const RequestHandler = () => {
  return (
    <div>
        <Nav/>
        <SubNavBar/>
        <RequestData/> 
    </div>
  )
}

export default RequestHandler;