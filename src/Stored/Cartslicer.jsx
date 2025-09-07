import { createSlice } from "@reduxjs/toolkit";



// example 
// {
//     id:1234,
//     name:"panner",
//     category:"veg",
//     quantity :1 we add this so we can chekc this item exixst or not in cart 
// }


const cart = createSlice({
    name: "cartslice",
    initialState: {
        items: [],
        count:0,
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push({ ...action.payload, quantity: 1 });
            state.count++;
        },
        IncremenetItems: (state, action) => {
            const element = state.items.find(item => item.id === action.payload.id)
            element.quantity += 1;
            state.count++;
        },
        DecrementItems: (state, action) => {
            const element = state.items.find(item => item.id === action.payload.id);
            if (element.quantity > 1)
            {
                element.quantity -= 1;
            }
            else {
                state.items = state.items.filter(item => item.id != action.payload.id)
            }
            state.count--;
        }

    }
})

export const { addItems, IncremenetItems, DecrementItems } = cart.actions;
export default cart.reducer;