import {React, useState, useEffect} from 'react';
import PostBox from '../../molecules/PostBox';
import Tweet from '../../molecules/Tweet';
import AppSkeleton from '../AppSkeleton';
import './styles.css';

const Home = (props) => {

    const [twitterData, setTwitterData] = useState( props.feed.data.tweets );
    const [twitterTweets, setTwitterTweets] = useState([]);

    useEffect(() => {
        fetchTweets();
    }, []);

    const handleRemove = (id) => {

        setTwitterData(() => {
            const data = twitterData;
            data.splice(id, 1);
            return(data);
        });
        
        setTwitterTweets(() => {
            const data = twitterTweets;
            data.splice(id, 1);
            return(data);
        });

        setTimeout(() => {
            fetchTweets();
        }, 1)

        setTwitterTweets(twitterTweets);
        
    }  

    const fetchTweets = () => {
        let idKeys = -1;
        let tweets = twitterData.map(tweetItem => {
            idKeys++;
            return <Tweet handleRemove={handleRemove} likes={tweetItem.likes} key={idKeys} idKey={idKeys} content={tweetItem.content} user={tweetItem.author} date={tweetItem.date} imageURL={tweetItem.imageURL} />
        });
        setTwitterTweets(tweets);
    } 
        const tweets = twitterTweets;
        
        let id = 9;
        const addTweet = (arg) => {
            let newState = twitterData;
            arg.id = id;
            newState.push(arg);
            id++;
            setTwitterData(newState);
    
            setTwitterTweets(twitterTweets);
            setTimeout(() => {
                fetchTweets();
            }, 1)
        }

        return (
            <AppSkeleton render={ 
                <div>
                    <PostBox tweet={addTweet}/>
                    {tweets}
                </div>
            }/>
        );
    
}

export default Home;
