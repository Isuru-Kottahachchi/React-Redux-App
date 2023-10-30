import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

/*const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});*/

// store.ts

import reviewReducer from './ReviewSlice';

const store = configureStore({

  reducer: {
    counter: counterReducer,
    review: reviewReducer,
  },
  
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
