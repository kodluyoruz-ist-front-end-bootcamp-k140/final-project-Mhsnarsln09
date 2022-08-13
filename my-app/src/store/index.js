import { configureStore } from "@reduxjs/toolkit"

import auth from "./auth"
import chats from "./chats"
const store = configureStore({
    reducer:{
        auth,
        chats
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
}) 
export default store