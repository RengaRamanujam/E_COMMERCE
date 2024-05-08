import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount:0,
  },
  reducers: {
    addQuantity(state, action) {
      const { id,price,name,description,rating,imageUrl } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        console.log("Added to cart")
        return {
          ...state,
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else {
        const newItem = {
          id: id,
          quantity: 1,
          price: price,
          name : name,
          description : description,
          rating : rating,
          imageUrl:imageUrl
        };
        console.log("Added to cart")
        return {
          ...state,
          items: [...state.items, newItem]
        };
      }
    },
    subQuantity(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },    
    removeItem(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
    changeAmount(state,action){
      const {amount}=action.payload
      state.totalAmount=amount;
    }
  },
});

export const { addQuantity,subQuantity, removeItem,clearCart ,changeAmount} = cartSlice.actions;

export const selectQuantityById = (state, itemId) =>
  state.cart.items.find(item => item.id === itemId)?.quantity || 0;

export default cartSlice.reducer;