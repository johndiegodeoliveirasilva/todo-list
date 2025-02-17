import { userSaveTodos } from "./hooks/userSaveTodos";
import styles from './App.module.css';
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

const App = () => {
  // Monitoring all changes on todos and save in local storage
  userSaveTodos();

  return (
    <div className={styles.container}>
    <header>
      <Header />
    </header>
    <main>
      <TodoList></TodoList>
    </main>
    </div>
  )
}

export default App;