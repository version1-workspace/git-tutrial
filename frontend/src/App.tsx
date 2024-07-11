import "./App.css";
import React, { useState, SyntheticEvent } from "react";
import TextInput from "./components/input";
import Button from "./components/button";
import TodoList from "./components/todoList";

const defaultTodos = [
  { id: 1, title: "todo 1" },
  { id: 2, title: "todo 2" },
  { id: 3, title: "todo 3" },
];

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

  return (
    <div className="App">
      <header className="App-header App-hoge">
        <div className="todo-form">
          <TextInput
            value={text}
            onChange={
              (e: SyntheticEvent<any>) => {
                setText((e.target as any).value);
              }
            }
          />
          <Button
            onClick={() => {
              if (!text) {
                alert("Please input text!");
                return;
              }

              setTodos([
                ...todos,
                { id: todos.length + 1, title: text },
              ]);
              setText("");
            }}
          >
            Submit!
          </Button>
        </div>
      </header>
      <div className="App-body">
        <TodoList data={todos} />
      </div>
    </div>
  );
}

export default App;
