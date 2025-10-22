import React from 'react'
import Nav from './requestHandler/nav';
import SubNavBar from './requestHandler/subNavBar';
import Header from './requestHandler/header';
import RequestData from './requestHandler/requestData';

const RequestHandler = () => {
  return (
    <div>
        <Nav/>
        <SubNavBar/>
        <div className="max-w-6xl mx-auto mt-6 px-4">
            <Header/>
            <RequestData/>
        </div>
    </div>
  )
}

export default RequestHandler;