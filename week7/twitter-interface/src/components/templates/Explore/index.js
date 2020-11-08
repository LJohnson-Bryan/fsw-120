import {React, useState} from 'react';
import Tweet from '../../molecules/Tweet';
import AppSkeleton from '../AppSkeleton';
import '../Home/styles.css';

const Explore = (props) => {
    const [twitterData] = useState(props.feed.data.tweets); 
    const tweets = twitterData.map((tweetItem) => {
        return <Tweet likes={tweetItem.likes} content={tweetItem.content} user={tweetItem.author} date={tweetItem.date} imageURL={tweetItem.imageURL} />
    });
    return ( 
        <AppSkeleton render={ 
            <div>
                {tweets}
            </div>
        }/>
    );
}

export default Explore;
