import { signal, computed } from "@preact/signals-react";

const pageName = signal("Home Page");
const pageNumber = signal(1);
const todoList = signal([
  {
    id: 1,
    text: "Clean bathroom.",
    completed: true,
  },
  {
    id: 2,
    text: "Wash dishes.",
    completed: false,
  },
  {
    id: 3,
    text: "Make dinner.",
    completed: true,
  },
]);

const completedTodos = computed(() => {
  return todoList.value.filter((todo) => todo.completed).length;
});

export { pageName, pageNumber, todoList, completedTodos };
