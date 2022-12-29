import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const article = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )


  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>New Posts</h2>
            <InfoIcon />
        </div>
        {article("About this Page", "Uses for this template")}
        {article("Ideas for Features","What to add next")}
        {article("Building a decentralized social network","What Mastodon gets right")}
    </div>
  )
}

export default Widgets;