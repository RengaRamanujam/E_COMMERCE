import React from 'react'
import Header from '../components/Header'

const PageContainer = ({children}) => {
  return (
    <>
      <Header/>
      <div>{children}</div>
    </>
  )
}

export default PageContainer