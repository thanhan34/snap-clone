import React from 'react'
import { Avatar } from '@material-ui/core'
import StopIcon from '@material-ui/icons/Stop';
import ReactTimeAgo from 'react-timeago'
import { useDispatch } from 'react-redux'
import { db } from './firebase'
import { useHistory } from 'react-router-dom'
import './Chat.css'
import { selectImage } from './features/appSlice';
function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const open = () => {
        if (!read) {
            dispatch(selectImage(imageUrl))
            db.collection("posts").doc(id).set(
                {
                    read: true,
                },
                {
                    merge: true,
                }
            )
            history.push("/chats/view")
        }
    }
    return (
        <div className="chat" onClick={open}>
            <Avatar src={profilePic} className="chat__avatar" />
            <div className="chat__info">
                <h4>{username}</h4>
                <p>{!read && "Tap to view -"}{" "} {<ReactTimeAgo date={new Date(timestamp?.toDate()).toUTCString()} />}</p>
            </div>
            {!read && <StopIcon className="chat__readIcon" />}
        </div>
    )
}

export default Chat
