import { createSlice } from '@reduxjs/toolkit';
import posts from '../data/posts';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: posts,
    activePost: null
  },
  reducers: {
    setActivePost: (state, action) => {
      state.activePost = action.payload;
    },
    setPosts: (state, action) => {
      console.log("settings posts:", action.payload)
      state.posts = action.payload;
    },
  },
});

export const {
  setActivePost,
  setPosts} = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;
export const selectActivePost = (state) => state.posts.activePost;
export default postsSlice.reducer;
















// import { createSlice } from '@reduxjs/toolkit';
// import posts from '../data/posts';

// export const postsSlice = createSlice({
//   name: 'posts',
//   initialState: {
//     posts: posts,
//   },
//   reducers: {
//     selectMail: (state, action) => {
//       state.selectMail = action.payload; // ten reducer ustawia wartosc selectMail (moze lepsza nazwa selectEDMail) na obiekt przekazany (a ten obiekt jest z firebase pobierany i przekazywany do state'u emails)
//     },
//     openSendMessage: state => {
//       state.sendMessageIsOpen = true;
//     },
//     closeSendMessage: state => {
//       state.sendMessageIsOpen = false;
//     },
//   },
// });

// export const {
//   selectMail,
//   openSendMessage, 
//   closeSendMessage} = mailSlice.actions;

// export const selectOpenMail = (state) => state.mail.selectMail;
// export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;
// export default mailSlice.reducer;
