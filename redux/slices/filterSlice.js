import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    isLoading: false,
    // products: [],
    filtredItems: [],
    err: ''
}


// export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
//     return axios.get("/api/product")
//         .then(response => response.data)
// })

const filterSlice = createSlice({
    name: "filter",
    initialState,
    // extraReducers: (builder) => {
    //     builder.addCase(fetchProducts.pending , (state) => {
    //         state.isLoading = true
    //     })
    //     builder.addCase(fetchProducts.fulfilled , (state , action) => {
    //         state.isLoading = false
    //         state.products = action.payload
    //         state.err = ""
    //     })
    //     builder.addCase(fetchProducts.rejected , (state ,action) => {
    //         state.isLoading = false
    //         state.products = []
    //         state.err = action.error.message

    //     })
    // },
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
