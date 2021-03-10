import React, {useState}from 'react';
import { selectComments } from "../features/commentsSlice";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { setActivePost } from '../features/postsSlice';
import { setActiveComments } from '../features/commentsSlice';
import { useHistory } from 'react-router-dom';
import { setPosts } from '../features/postsSlice';

function Photo({post, i, posts}) {
    let [refreshPage, setRefreshPage] = useState(true); // integer state
    const comments = useSelector(selectComments);
    const activeComments = comments[post.code] || []

    // console.log("activeComments",activeComments)
    const dispatch = useDispatch();
    const history = useHistory()

    const selectPost = () => {
// console.log("settings comments:",activeComments)
      dispatch(setActivePost({ 
        ...post
      }));

      dispatch(setActiveComments(activeComments
      ));

      history.push(`/view/${post.code}`);
  };

const [remountCount, setRemountCount] = useState(0);
const refresh = () => setRemountCount(remountCount + 1);

const incrementLikes = (i) => {
  let tempPosts = [...posts]
  let otherposts = [
    ...posts.slice(0,i),
    {...posts[i], likes: posts[i].likes + 1},
    ...posts.slice(i + 1)
  ]
  console.log("...posts",tempPosts )
  console.log("posts",otherposts )
  dispatch(setPosts(otherposts))
  setRefreshPage(!refreshPage)
  console.log("refreshPage",refreshPage )
  refresh()
  }

    return (
      <figure className="grid-figure" onClick={selectPost}>
        <div className="grid-photo-wrap">
          <img src={post.display_src} alt={post.caption} className="grid-photo" />
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button className="likes" onClick={() => incrementLikes(i)}>&hearts; {post.likes}</button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>

      </figure>
    )
}


export default Photo;









// import React from 'react';
// import { Link } from 'react-router';
// import CSSTransitionGroup from 'react-addons-css-transition-group';

// const Photo = React.createClass({
//   render() {
//     const { post, i, comments } = this.props;
//     return (
//       <figure className="grid-figure">
//         <div className="grid-photo-wrap">
//           <Link to={`/view/${post.code}`}>
//             <img src={post.display_src} alt={post.caption} className="grid-photo" />
//           </Link>

//           <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
//             <span key={post.likes} className="likes-heart">{post.likes}</span>
//           </CSSTransitionGroup>

//         </div>

//         <figcaption>
//           <p>{post.caption}</p>
//           <div className="control-buttons">
//             <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
//             <Link className="button" to={`/view/${post.code}`}>
//               <span className="comment-count">
//                 <span className="speech-bubble"></span>
//                 {comments[post.code] ? comments[post.code].length : 0 }
//               </span>
//             </Link>
//           </div>
//         </figcaption>

//       </figure>
//     )
//   }
// });

// export default Photo;


// import React from 'react';
// import { Link } from 'react-router';
// import { selectComments } from "../features/commentsSlice";
// import { useSelector } from "react-redux";

// export default function Photo({post, i}) {
//     const comments = useSelector(selectComments);

//     return (
//         <div>
//               {post.code}
//               {console.log(comments["BAhvZrRwcfu"])}
//         </div>
//     )
// }

