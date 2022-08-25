const initState = {
  filters: {
    search: "",
    status: "All",
    prioriry: [],
  },
  todoList: [
    {
      id: 1,
      name: "Buy Laptop",
      completed: false,
      prioriry: "Medium",
    },
    {
      id: 2,
      name: "Learn React",
      completed: true,
      prioriry: "Hight",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
