import { createSlice } from '@reduxjs/toolkit';
import comments from '../data/comments';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: comments,
    activeComments: null
  },
  reducers: {
    setActiveComments: (state, action) => {
      state.activeComments = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    //jakos tak
    // incrementLikes: (state, action) => {
    //   ...state.slice(0,i), // before the one we are updating
    //   {...state[i], likes: state[i].likes + 1},
    //   ...state.slice(i + 1), // after the one we are updating
    // }



  },
});

export const {
  setActiveComments, setComments} = commentsSlice.actions;

export const selectComments = (state) => state.comments.comments;
export const selectActiveComments = (state) => state.comments.activeComments;
export default commentsSlice.reducer;


// console.log("Incrementing Likes!!");
// const i = action.index;
// return [
//   ...state.slice(0,i), // before the one we are updating
//   {...state[i], likes: state[i].likes + 1},
//   ...state.slice(i + 1), // after the one we are updating
// ]













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
