import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload.id;
      if (state[itemId]) {
        state[itemId] += 1;
      } else {
        state[itemId] = 1;
      }
    },
    removeFromBag: (state, action) => {
      const itemId = action.payload.id;
      if (state[itemId]) {
        if (state[itemId] > 1) {
          state[itemId] -= 1;
        } else {
          delete state[itemId];
        }
      }
    },
    deleteFromCart: (state, action) => {
      const itemId = action.payload.id;
      delete state[itemId]; // Completely removes the item
    },
  },
});

export const bagAction = bagSlice.actions;
export default bagSlice.reducer;
