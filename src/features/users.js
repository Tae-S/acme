import { createSlice } from '@reduxjs/toolkit'

let initial = null

try{
    initial = JSON.parse(localStorage.getItem('acme-users'))
}catch(err){
    console.log('Error occurred.', err)
}

initial = initial === null?[]:initial

export const usersSlice = createSlice({
    name: 'users',
    initialState: { value: Object.keys(initial).length===0?[]:initial},
    reducers: {
        login: (state, action) => {

        },
        register: (state, action) => {

        }
    }

})

export const { login, register } = usersSlice.actions
export default usersSlice.reducer