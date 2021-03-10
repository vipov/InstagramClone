import React, {useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {useSelector, useDispatch} from "react-redux";
import { selectPosts } from "../features/postsSlice";
import { setComments, selectComments } from '../features/commentsSlice';
import {selectActiveComments} from "../features/commentsSlice"

export default function Comments({postComments, post}) {


  const selectedComments = useSelector(selectActiveComments);

  console.log("postComments",postComments)
  let [refreshPage, setRefreshPage] = useState([...postComments]); // integer state
  // useEffect(() => {
  //   setRefreshPage([...postComments])
  // }, []);
console.log("refresh",refreshPage)

  const dispatch = useDispatch();
  let comments = useSelector(selectComments)
  const { register, handleSubmit, watch, errors} = useForm();

    function renderComment(comment, i) {
        return (
          <div className="comment" key={i}>
            <p>
              <strong>{comment.user} </strong>
              {comment.text}
              <button className="remove-comment" 
              onClick={() => removeComment(i)}
              >&times;</button>
            </p>
          </div>
        )
      }
const removeComment = (i) => {
//remove
let tempCommentsAll = comments;
let postComments1 = refreshPage;

postComments1 = [
  ...refreshPage.slice(0, i),
  ...refreshPage.slice(i + 1)
]

tempCommentsAll = {
...comments
}
tempCommentsAll[post.code] = postComments1
 

console.log("postComments1",postComments1)
dispatch(setComments(tempCommentsAll))
setRefreshPage(postComments1)
}
const addComment = () => {
  //add 


// return [...state,{
//   user: action.author,
//   text: action.comment
//   }];
}

    const onSubmit = (formData, e) => {
        console.log("object",postComments)
        let tempCommentsAll ={...comments} ;
        let postComments1 = [...refreshPage,
          {
           user: formData.author,
           text: formData.comment
          }
          ]
          console.log("tempCommentsAll[post.code],",tempCommentsAll[post.code])
          console.log("postComments1",postComments1)
          tempCommentsAll[post.code] = postComments1
dispatch(setComments(tempCommentsAll))
setRefreshPage(postComments1)
e.target.reset();
    };

    return (

        <div className="comments">
            {/* {console.log("postComments",postComments)} */}
        {/* {postComments.map(renderComment)} */}
        {refreshPage.map(renderComment)}
        {/* {refreshPage.map(renderComment)} */}
        {/* {refreshPageComments.map(renderComment)} */}
        {/* {postComments.map(comment => (
            <div> {comment.text} </div>
        ))} */}
        <form  className="comment-form" onSubmit={handleSubmit(onSubmit)}>
          <input name='author' type="text" placeholder="author" ref={register( {required: true})} />
          {errors.author && <p>'To' is required</p> }

          <input name='comment' type="text" placeholder="comment" ref={register( {required: true})} />
          {errors.comment && <p>'Comment' is required</p> }
          {/* {refreshPage} */}
          <button type="submit"
        //    hidden
            > Send </button>
        </form>
      </div>

    )
}

// <div className="sendMail__options">
// <Button 
// className="sendMail__send"
// variant="contained"
// color="primary"
// type="submit"
// >
// Send</Button>
// </div>