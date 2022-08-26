import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;
//TODO: Tạo một selector phụ thuộc vào selector khác

// export const todoListSelector = (state) => {
//   return state.todoList.filter((todo) =>
//   todo.name.includes(state.filters.search)
//   );
// };

//? V1
// export const todoListRemainingSelector = createSelector(
//   todoListSelector,
//   searchSelector,
//   (todoList, searchText) => {
//     return todoList.filter((todo) => todo.name.includes(searchText));
//   }
// );

//? V2
// export const todoListRemainingSelector = createSelector(
//   todoListSelector,
//   searchSelector,
//   statusSelector,
//   (todoList, searchText, status) => {
//     return todoList.filter((todo) => {
//       if (status === "Completed")
//         return todo.name.includes(searchText) && todo.completed === true;
//       else if (status === "Todo")
//         return todo.name.includes(searchText) && todo.completed === false;
//       else return todo.name.includes(searchText);
//     });
//   }
// );

//? V3
export const todoListRemainingSelector = createSelector(
  todoListSelector,
  searchSelector,
  statusSelector,
  prioritySelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === "Completed")
        return priorities.length > 0
          ? todo.name.includes(searchText) &&
              todo.completed === true &&
              priorities.includes(todo.priority)
          : todo.name.includes(searchText) && todo.completed === true;
      else if (status === "Todo")
        return priorities.length > 0
          ? todo.name.includes(searchText) &&
              todo.completed === false &&
              priorities.includes(todo.priority)
          : todo.name.includes(searchText) && todo.completed === false;
      else
        return priorities.length > 0
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
    });
  }
);
