import { createSlice,nanoid } from "@reduxjs/toolkit";

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
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const { postAdded } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer