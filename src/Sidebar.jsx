import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  const recentItem = (hashtag) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash"># {hashtag}</span>
    </div>
  )

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img 
                src="https://images.unsplash.com/photo-1669920687377-537d98f0d837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" 
                alt="background" />
            <Avatar className="sidebar__avatar" />
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
                <p className="sidebar__statNumber">
                    100
                </p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('software-engineering')}
            {recentItem('entrepreneurship')}
            {recentItem('mobile-apps')}
            {recentItem('web-development')}
            {recentItem('design')}
        </div>
    </div>
  )
}

export default Sidebar