import { configureStore } from "@reduxjs/toolkit"

import statesSlice from "../pages/statesSlice"

export default configureStore({
    reducer: {
        states : statesSlice
    }
})