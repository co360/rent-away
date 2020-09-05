import React, { Component } from 'react'
import Activity from './Activity'
import './Activity.css'

class Activities extends Component {
  render() {

    const activities = this.props.activities.map((activity, index) => {
      return (
        <div key={index} className='col s2'>
          <Activity activity={activity} />
        </div>
      )
    })
    return <div className='activities'>{activities}</div>
  }
}
export default Activities
