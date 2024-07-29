import { AddTodo } from "./components/add-todo";
import { TodoList } from "./components/todo-list";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

/**
 * Pra aplicar meu estado em toda a aplicação, deve rodar sobre o redux provider
 */

export function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  )
}
