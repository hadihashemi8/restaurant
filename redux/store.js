import { configureStore } from "@reduxjs/toolkit"
import filterSlice from "./slices/filterSlice"
import ordersSlise from "./slices/ordersSlice"


export default configureStore({
    reducer: {
        filterItems: filterSlice,
        ordersList: ordersSlise
    }
})


