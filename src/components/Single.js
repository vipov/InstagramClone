import React, {useState} from 'react'
import {selectActivePost, selectPosts} from "../features/postsSlice"
import {selectActiveComments} from "../features/commentsSlice"
import {useSelector} from "react-redux";
import Photo from './Photo';
import Comments from './Comments';
import { useParams } from "react-router-dom";

export default function Single() {
    const selectedPost = useSelector(selectActivePost);
    const posts = useSelector(selectPosts);
    const selectedComments = useSelector(selectActiveComments);
    
    let { postId  } = useParams();
    // console.log("this.context:",  id)
    const i = posts.findIndex((post) => post.code === postId);
    // console.log("post nr is:", i)
    return (
      <div className="single-photo">
       {/* the id is: {postId }
       the i is {i}
      { console.log("selectedComments",selectedComments)} */}
        <Photo posts={posts} post={selectedPost} i={i} />
        <Comments postComments={selectedComments} post={selectedPost} />
      </div>
    )
}


// import React from 'react';
// import Photo from './Photo';
// import Comments from './Comments';

// const Single = React.createClass({
//   render() {
//     const { postId } = this.props.params;

//     const i = this.props.posts.findIndex((post) => post.code === postId);
//     const post = this.props.posts[i];

//     const postComments = this.props.comments[postId] || [];

//     return (
//       <div className="single-photo">
//         <Photo i={i} post={post} {...this.props} />
//         <Comments postComments={postComments} />
//       </div>
//     )
//   }
// });

// export default Single;


// import React from 'react'
// import {selectActivePost} from "../features/postsSlice"
// import {useSelector} from "react-redux";

// export default function Single() {
//     const selectedPost = useSelector(selectActivePost);

//     return (
//         <div>
//             i am single
//             {console.log(selectedPost.caption)}
//             {selectedPost.caption }
//         </div>
//     )
// }