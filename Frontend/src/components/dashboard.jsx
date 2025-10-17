import React from 'react'
import Header from './dashboard/header'
import Body from './dashboard/body'
import Footer from './dashboard/footer'
const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[var(--primary-50)] ">
      <Header />
      <Body className="flex-1" />
      <Footer />
    </div>

        
  )
}

export default Dashboard