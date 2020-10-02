import React from 'react';

const BlogPost = (props) => {
    return ( 
        <div className="blogPost" style={{maxWidth:"500px", display:"block", marginLeft:"auto", marginRight:"auto"}}>
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
            <p><i>Posted by <b>{props.author}</b> on {props.date}</i></p>
            <hr />
        </div>
     );
}
 
export default BlogPost;
