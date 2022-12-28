import { Avatar } from '@material-ui/core'
import React from 'react'
import "./HeaderOption.css"

function HeaderOption({ avatar, name, Icon, title, onClick }) {
  return (
   // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar}/>}
      {name && <Avatar className="headerOption__icon">{name[0]}</Avatar>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption;