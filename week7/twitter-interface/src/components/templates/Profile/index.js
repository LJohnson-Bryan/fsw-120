import {React, useState} from 'react';
import ProfileImage from '../../atoms/ProfileImage';
import AppSkeleton from '../AppSkeleton';
import Tweet from '../../molecules/Tweet';
import '../Home/styles.css';
import './styles.css';

const Profile = (props) => {
    const [twitterData] = useState(props.feed.data.tweets); 
    const tweets = twitterData.map((tweetItem) => {
        if(tweetItem.author === "@LoganJohnson")
        return <Tweet likes={tweetItem.likes} content={tweetItem.content} user={tweetItem.author} date={tweetItem.date} imageURL={tweetItem.imageURL} />
    });
    return ( 
        <AppSkeleton render={ 
            <div className="profile-page">
                <h2 class="profile-tag">@LoganJohnson</h2>
                <div className="background-profile" style={{backgroundImage: "url(" + props.background + ")"}}></div>
                <ProfileImage />
                {tweets}
            </div>
        }/>
    );
}

export default Profile;
