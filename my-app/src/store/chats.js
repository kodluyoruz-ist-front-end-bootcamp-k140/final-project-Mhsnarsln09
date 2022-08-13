import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    messages: []
}

const chats = createSlice({
    name:"messages",
    initialState,
    reducers:{
        setMessages:(state, action) => {
            state.messages = action.payload
        },
        appendMessage:(state, action) => {
            state.messages = [...state.messages, action.payload]
        }
    }

})
export const {setMessages, appendMessage} = chats.actions
export default chats.reducer
