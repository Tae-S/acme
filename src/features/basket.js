import { createSlice } from '@reduxjs/toolkit'

let initial = null
try{
    initial = JSON.parse(localStorage.getItem('acme-basket'))
}catch(err){
    console.warn('Error occurred. ',err)
}

initial = initial === null?[]:initial

export const basketSlice = createSlice({
    name:'basket',
    initialState: {value: Object.keys(initial).length===null?[]:initial},
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload)
            const _temp = state.value
            const _book = _temp.filter(_t => action.payload.isbn === _t.isbn)
            console.log(_book)
            if(_book.length === 0){
                state.value.push(action.payload)
                localStorage.setItem('acme-basket', JSON.stringify(state.value))
            }else{
                let _index = null
                state.value.map((v, _in) => {
                    if(v.isbn === action.payload.isbn){
                        v.quantity += action.payload.quantity
                    }
                })
                const _b = _temp.filter((_t, _in) =>{
                    if(_t.isbn === action.payload.isbn) _index = _in
                    return _t.isbn === action.payload.isbn
                })
                if(_index !== null){
                    // state.value[_index] += action.payload.quantity
                    localStorage.setItem('acme-basket', JSON.stringify(state.value))
                }
            }
            //else increment the item count in the basket
        },
        removeItem: (state, action) => {

        }
    }
})

export const { addItem, removeItem } = basketSlice.actions
export default basketSlice.reducer