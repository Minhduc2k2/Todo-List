export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFiltersChange = (text) => {
  return {
    type: "filters/searchFiltersChange",
    payload: text,
  };
};

export const statusFiltersChange = (status) => {
  return {
    type: "filters/statusFiltersChange",
    payload: status,
  };
};

export const priorityFiltersChange = (priorities) => {
  return {
    type: "filters/priorityFiltersChange",
    payload: priorities,
  };
};

export const toggleTodoStatus = (id) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: id,
  };
};
