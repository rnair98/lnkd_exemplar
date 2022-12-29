import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOptions from './InputOptions'
import Post from './Post'

import { db } from './firebase'

import firebase from 'firebase/compat/app'

import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import { useSelector } from 'react-redux'
import { selectUser } from './slices/userSlice'
import FlipMove from "react-flip-move"

export default function Feed() {
  const user = useSelector(selectUser)
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp","desc")
      .onSnapshot((snapshot) => (
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
         )));
  }, []);
  

  const sendPost = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.description || user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} 
                           onChange={
                             (event) => setInput(event.target.value)
                           } 
                           type="text" 
                    />
                    <button onClick={sendPost} type="submit">Send</button>
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
        <FlipMove>
          {
            posts.map(({id, data: {name, description, message, photoUrl}}) => (
              <Post 
                  key={id} 
                  name={name} 
                  description={description} 
                  message={message} 
                  photoUrl={photoUrl}
              />
            ))
          }
        </FlipMove>
    </div>
  )
}