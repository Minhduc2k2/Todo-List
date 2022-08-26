//! Chia nhỏ rootReducer trong reducer
const initState = [
  {
    id: 1,
    name: "Buy Laptop",
    completed: false,
    priority: "Medium",
  },
  {
    id: 2,
    name: "Learn React",
    completed: true,
    priority: "High",
  },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
