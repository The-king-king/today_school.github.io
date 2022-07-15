import { combineReducers } from "redux";
import { reducer as CollegeReducer } from  '@/pages/collegeCircle/store/index'
import { reducer as TopicSquareReducer } from '@/pages/List/Topic/TopicSquare/store/index'

export default combineReducers({
   college:CollegeReducer,
   topicSquare:TopicSquareReducer
})