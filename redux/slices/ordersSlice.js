import { createSlice } from "@reduxjs/toolkit";






const initialState = {
    items: typeof window !== "undefined" && JSON.parse(window.localStorage.getItem("Orders")) || [],
    total: 0,
}


const calcTotal = (items) => {

    const total = items.reduce((acc, cur) => {
        if (cur.offerPresent == 0) {
            return acc + cur.price * cur.qty
        } else {
            const finalPrice = cur.price * cur.qty - (((cur.offerPresent * cur.price) / 100) * cur.qty)

            return acc + finalPrice
        }

    }, 0)

    return total

}

const setLocalStorage = (orders) => {
    localStorage.setItem("Orders", JSON.stringify(orders))
}

const ordersList = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addToList: (state, action) => {

            const index = state.items.findIndex(item => item.id == action.payload.id)

            if (index == -1) {
                state.items.push(action.payload)
                setLocalStorage(state.items)
                state.total = calcTotal(state.items)
            } else {
                state.items[index].qty += 1
                setLocalStorage(state.items)
                state.total = calcTotal(state.items)
            }

        },
        removeFromList: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
            setLocalStorage(state.items)
            state.total = calcTotal(state.items)
        },
        updateQty: (state, action) => {
            const index = state.items.findIndex(item => item.id == action.payload.id)

            state.items[index].qty = action.payload.qty
            setLocalStorage(state.items)
            state.total = calcTotal(state.items)
        },
        clearAll: (state, action) => {
            state.items = []
            localStorage.removeItem("Orders")
            state.total = calcTotal(state.items)
        },
        
    }
})

export const { addToList, removeFromList, updateQty, clearAll } = ordersList.actions

export default ordersList.reducer

// [
//     { order: {}, details: {} }

// ]