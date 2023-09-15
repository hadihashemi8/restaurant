import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    isLoading: false,
    // products: [],
    filtredItems: [],
    err: ''
}


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterProducts: (state, action) => {
            const items = action.payload.items
            const filterOptions = action.payload.filterOptionChips
           
            let filtredItems = []

            filterOptions.forEach(item => {
                if (item == "همه") {
                    state.filtredItems = items

                } else {
                    const findItems = items.map(pItem => pItem.categories == item && pItem)

                    filtredItems = [...filtredItems, ...findItems.filter(item => item)]

                    
                    state.filtredItems = filtredItems
                }
            })


        }
    }
})


export const { filterProducts } = filterSlice.actions

export default filterSlice.reducer
