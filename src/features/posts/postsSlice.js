import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Learnind Redux toolkit',
        content: "its easy"
    },
    {
        id: '2',
        title: 'Subcribe',
        content: "Like and Share this Video"
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state,action){
            state.push(action.payload);
        }
    }
})

export const { postAdded } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer