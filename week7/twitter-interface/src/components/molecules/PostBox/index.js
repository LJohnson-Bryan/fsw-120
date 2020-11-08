import {React, useState} from 'react';
import Button from '../../atoms/Button';
import ProfileImage from '../../atoms/ProfileImage';
import './styles.css';

const PostBox = (props) => {
    const [inputField, setInputField] = useState("");
    return ( 
        <form className="tweet-form flex-left" onSubmit={
            (e) => {
                e.preventDefault();
                props.tweet({
                    author: "@LoganJohnson",
                    content: inputField
                })
                setInputField("");
            }
        }>
            <ProfileImage />
            <div className="inline-block ml-15p">
                <input className="tweet-input"  value={inputField} onChange={(e) => setInputField(e.target.value)} placeholder="Share something!"/>
                <Button>Tweet!</Button>
            </div>
        </form>
    );
}

export default PostBox;
