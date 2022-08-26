//TODO: Tạo reducer chưa chia
// const initState = {
//   filters: {
//     search: "",
//     status: "All",
//     priority: [],
//   },
//   todoList: [
//     {
//       id: 1,
//       name: "Buy Laptop",
//       completed: false,
//       priority: "Medium",
//     },
//     {
//       id: 2,
//       name: "Learn React",
//       completed: true,
//       priority: "High",
//     },
//   ],
// };

// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };
//     case "filters/searchFiltersChange":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           search: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

////////////////////////////////////////////////////////////////////////////////////////////////

//TODO: Tạo reducer chia file

import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/Todo/TodoSlice";
import { combineReducers } from "redux";

//TODO: Create Root Reducer v1
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

//TODO: Create Root Reducer v2
const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
