import { createSlice } from '@reduxjs/toolkit';

interface ReviewState {
  value: string; // Match the initial state type
}


//The createSlice function is a utility provided by Redux Toolkit to simplify the process of creating slices of your Redux store.
// A slice represents a portion of your store's state along with its associated actions and reducers.
const ReviewSlice = createSlice({

  //name doesnot matter
  name: 'review',
  initialState: { value: '' } as ReviewState, // Provide the type
  reducers: {
    changeReview: (state, action) => {
      //return action.payload;
      console.log("1. state " + state.value);
      console.log("2. payload " + action.payload);

      if (state.value == '') {
        state.value = action.payload;
      } else if (action.payload == state.value) {
        state.value = '';
      } else {
        state.value = action.payload;
      }

    },
  },
});

export const { changeReview } = ReviewSlice.actions;
export default ReviewSlice.reducer;
