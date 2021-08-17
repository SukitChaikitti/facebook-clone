import React from 'react';
import './Messagesender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function Messagesender() {

    const [{user} , dispatch ] = useStateValue();
    const [ input , setInput ] = useState('');
    const [ imageUrl , setImageUrl ] = useState('');

    const handlerSubmit = (event) => {
        event.preventDefault();

        db.collection('posts').add({
            message: input,
            username: user.displayName,
            profilePic: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: imageUrl
        })

        setInput('');
        setImageUrl('');
    };


    return (
        <div className = 'messagesender'>
            <div className = 'messagesender__top'>
                <Avatar src = {user.photoUrl}/>
                <form>
                    <input placeholder = {`What's is on youe mind ${user.displayName}`} className = 'messagesender__input' value = {input} onChange = {(e) => setInput(e.target.value)}></input>
                    <input placeholder = {`img (url)`} value = {imageUrl} onChange = {(e) => setImageUrl(e.target.value)}></input>
                    <button onClick = {handlerSubmit} type = 'submit'>Let's go</button>
                </form>
            </div>
            <div className = 'messagesender__bottom'>
                <div className = 'messagesender__option'>
                    <VideocamIcon style = {{color : 'red'}}/>
                    <h3>Live video</h3>
                </div>
                <div className = 'messagesender__option'>
                    <PhotoLibraryIcon style = {{color : 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className = 'messagesender__option'>
                    <InsertEmoticonIcon style = {{color : 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default Messagesender;
