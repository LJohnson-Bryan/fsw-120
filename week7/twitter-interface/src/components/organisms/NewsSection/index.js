import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../../atoms/Search';
import FollowSuggestion from '../../molecules/FollowSuggestion';
import './styles.css';

const NewsSection = () => {
    return ( 
        <aside className="interface-aside">
                <Search />
                <h2 className="whoToFollow">
                    Who To Follow
                </h2>
                <hr />
                <FollowSuggestion name="Betty Sherith" tag="@bettingOne1" image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                <FollowSuggestion name="Karen Wusthle" tag="@karenPerson" image="https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                <FollowSuggestion name="John Does" tag="@johnDoes" image="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                <FollowSuggestion name="Freddy Johnston" tag="@FredFamily20" image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                <FollowSuggestion name="Susan Huckleberry" tag="@theOneHuckle" image="https://images.unsplash.com/photo-1557002665-c552e1832483?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <Link to="/home">Show More</Link>

                <footer>
                    <Link to="/home">Terms of Service</Link>
                    <Link to="/home">Privacy Policy</Link>
                    <Link to="/home">Cookie Policy</Link>
                    <Link to="/home">Ads info</Link>
                    <Link to="/home">More</Link>
                    <p>&copy; 2020 Twitter, Inc.</p>
                </footer>   
        </aside>
    );
}

export default NewsSection;
