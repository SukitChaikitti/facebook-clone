import React , {useEffect, useState} from 'react';
import StoryReel from './StoryReel';
import './Feed.css';
import Messagesender from './Messagesender';
import Post from './Post';
import db from './firebase';

function Feed() {

    const [ posts , setPosts ] = useState([]);

    useEffect(() => {

        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map(doc => {
                return {id: doc.id,
                data: doc.data()
            }
            }))
        })

    }, [])

    console.log(posts)

    return (
        <div className = 'feed'>
            <StoryReel/>
            <Messagesender/>
            {posts.map((post) => (
                <Post 
                key = {post.id}
                profilepic = {post.data.profilePic}
                username = {post.data.username}
                timestamp = {post.data.timestamp}
                message = {post.data.message}
                image = {post.data.image}/>
            ))}
        </div>
    )
}

export default Feed
