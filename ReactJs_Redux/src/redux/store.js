// Store hold all your data of the application

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"

// reducer manipulates the data

export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
})