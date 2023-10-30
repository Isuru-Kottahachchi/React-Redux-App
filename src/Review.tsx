//Review Reducer
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeReview } from './ReviewSlice';
import { RootState } from './store'; // Import the RootState type

const Review: React.FC = () => {

  //RootState is the type that represents the entire Redux store state. 
  //It's used as the type of the argument passed to the useSelector hook to ensure that you're accessing the correct properties from the store state.


  //useSelector hook simplifies the process of extracting specific data from your Redux store's state and automatically updates your component when that data changes. 
  //This helps you create React components that are efficient, reactive, and connected to your Redux store.
  //review is the reducer name in store
  const review = useSelector((state: RootState) => state.review.value);

  //useDispatch hook allows you to dispatch actions to update the state managed by your Redux store.
  const dispatch = useDispatch();

  return (
    <>

      <h1>Rate this website !</h1>
      <h2>
      {review}
      </h2>
      <button type="button" onClick={() => dispatch(changeReview('Good'))}  style={{ cursor: 'pointer' }}>
      Good 
      </button>
      <button type="button" onClick={() => dispatch(changeReview('Average'))}  style={{ cursor: 'pointer' }}>
        Average
      </button>
      <button type="button" onClick={() => dispatch(changeReview('Bad'))}  style={{ cursor: 'pointer' }}>
        Bad
      </button>
    
    </>
  );
};

export default Review;
