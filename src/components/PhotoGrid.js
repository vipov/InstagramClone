import React from 'react';
import Photo from './Photo';
import { useSelector } from "react-redux";
import { selectPosts } from "../features/postsSlice";


export default function PhotoGrid() {
    const posts = useSelector(selectPosts);

    return (
        <div className="photo-grid">
            {/* {console.log(posts)} */}
            {posts.map((post, i) => <Photo posts={posts} key={i} i={i} post={post} />)}
        </div>
    )
}





