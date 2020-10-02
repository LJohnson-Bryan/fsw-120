import React from 'react';
import BlogPost from './BlogPost';
import BlogData from './BlogData';

const BlogList = () => {

    const blogPosts = BlogData.map(post => {
        return (
            <BlogPost title={post.title} subTitle={post.subTitle} author={post.author} date={post.date} />
        );
    });

    return ( 
        <main class="container">
        {blogPosts}
        </main>
     );
}
 
export default BlogList;
