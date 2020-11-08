import React from 'react';
import Navigation from '../../molecules/Navigation';
import NewsSection from '../../organisms/NewsSection';
import '../Home/styles.css';

const AppSkeleton = (props) => {
    return ( 
        <div className="interface-container">
            <Navigation />
            <main className="interface-main">
                {props.render}
            </main>
            <NewsSection />
        </div>
    );
}

export default AppSkeleton;
