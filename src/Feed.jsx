import React from 'react'
import './Feed.css'
import InputOptions from './InputOptions'
import Post from './Post'

import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

export default function Feed() {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                {/* InputOptions */}
                <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                <InputOptions Icon={SubscriptionsIcon} title='Video' color='#70B5F9'/>
                <InputOptions Icon={EventNoteIcon} title='Event' color='#70B5F9'/>
                <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#70B5F9'/>
            </div>
        </div>
        {/* Posts */}
        <div className="feed__posts">
            <Post name='Bruce Wayne'
                  description='CEO of Wayne Enterprises'
                  message='This is a test message'
                  photoUrl='https://preview.redd.it/hn0wzs8xpyn81.jpg?width=640&crop=smart&auto=webp&s=c9d903bf4a5a397b2008a322f61b38878e556317'
            />
        </div>
    </div>
  )
}