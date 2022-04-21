import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
    name:'basket',
    initialState: {value:{}},
    reducers: {
        addItem: (state, action) => {

        },
        removeItem: (state, action) => {

        }
    }
})

export const { addItem, removeItem } = basketSlice.actions
export default basketSlice.reducer