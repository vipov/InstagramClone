import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice'
import commentsReducer from '../features/commentsSlice'
export default configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
});
