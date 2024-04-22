import { useSignal, useComputed } from "@preact/signals-react";
import { pageName, pageNumber, todoList, completedTodos } from "./AppState";

const Home = () => {
  const count = useSignal(0);
  const double = useComputed(() => count.value * 2);

  const addTodo = (todo: string) => {
    todoList.value = [
      ...todoList.value,
      { id: 999, text: todo, completed: true },
    ];
  };

  const removeTodo = (todo: object) => {
    todoList.value = todoList.value.filter((t) => t !== todo);
  };

  return (
    <>
      <button onClick={() => (count.value += 1)}>
        count is {count} - double is {double}
      </button>

      <div>Page: {pageName.value}</div>
      <div>Page Number: {pageNumber.value}</div>
      <div>Completed Todos: {completedTodos}</div>

      {todoList.value.map((todo, index) => (
        <p key={index}>
          {index + 1} - {todo.text}
          <button onClick={() => removeTodo(todo)}>Remove</button>
        </p>
      ))}

      <button onClick={() => addTodo("Random Text")}>Add Todo</button>
    </>
  );
};

export default Home;
