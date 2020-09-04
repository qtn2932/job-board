import React, { Component, Fragment } from 'react'
import NavBar from './components/NavBar'
import JobCard from './components/JobCard'
class Landing extends Component {
  render () {
    return (
      <Fragment className='landing-container'>
        <NavBar />
        <JobCard />
      </Fragment>

    )
  }
}

export default Landing