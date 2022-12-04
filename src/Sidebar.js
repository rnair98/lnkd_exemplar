import { Avatar } from '@material-ui/core'
import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="" alt="" />
            <Avatar className="sidebar_-avatar" />
            <h2>Victor Sullivan</h2>
            <h4>sully@xyz.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">100</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statnumber">
                    100
                </p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar