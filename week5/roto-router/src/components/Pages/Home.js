import React from 'react';

const Home = () => {
    return ( 
        <div>
            <div className="pt-3 hero-home hero">
                <h1>Home Page</h1>
            </div>
            <div className="container tc tb">
                <p>Our services garuntee high quality plumbing in your local area to ensure that everything is going well.</p>
                <img className="inline-block mr-1" src="https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" height="300px" />
                <img className="inline-block mr-1" src="https://images.unsplash.com/photo-1538474705339-e87de81450e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" height="300px" />
                <img className="inline-block mr-1" src="https://images.unsplash.com/photo-1543674892-7d64d45df18b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=930&q=80" height="300px" />
            </div>
        </div>
    );
}

export default Home;
