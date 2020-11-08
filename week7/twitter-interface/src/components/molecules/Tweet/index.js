import {React, useState} from 'react';
import ProfileImage from '../../atoms/ProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Tweet = (props) => {
    
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(props.likes);
    const [isEditing, setEditing] = useState(false);
    const [tweetChange, setTweetChange] = useState(props.content);
    const [displayedTweet, setDisplayedTweet] = useState(props.content);

    return ( 
        <div className="flex-left mh-150">
            <div className="inline-block mr-2"><ProfileImage imageURL={props.imageURL} /></div>
            <div className="inline-block w-full">
                <div className="meta-tweet">
                    {props.user} - {props.date}
                </div>
                <div>
                    {displayedTweet}
                    {isEditing && <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setDisplayedTweet(tweetChange);
                            setEditing(false);
                        }}>
                        <input 
                            type="text" 
                            style={{marginBottom: 0}} 
                            value={tweetChange} 
                            onChange={(e) => setTweetChange(e.target.value)}
                        />
                        <button>Submit</button>
                        </form>}
                </div>
                <div className="inline-block" style={{color: (liked ? "red" : "black")}} onClick={() => {
                    if(liked) {
                        setLiked(false);
                        setLikes(likes - 1);
                    } else {
                        setLiked(true);
                        setLikes(likes + 1);
                    }
                }}>{likes} <FontAwesomeIcon icon={faHeart} /></div>
                <div className="inline-block float-right mr-13p" onClick={() => props.handleRemove(props.idKey)}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className="inline-block float-right mr-13p" onClick={() => setEditing(prevState => !prevState)}>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            </div>
        </div>
    );
}

Tweet.defaultProps = {
    likes: 0,
    imageURL: "https://images.unsplash.com/photo-1603997478098-3a448cd7e521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    content: "lorem ipsum dolor asit amet.",
    user: "@JohnDoe",
    date: "Nov 7"
}

export default Tweet;
