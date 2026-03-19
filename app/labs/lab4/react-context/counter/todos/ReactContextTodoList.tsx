"use client";
import { useState, useContext } from "react";
import todosContext from "./todosContext";
import { ListGroup, Button, FormControl } from "react-bootstrap";

function TodosProvider({ children }: { children: any }) {
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ]);
  const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });

  const addTodo = () => {
    setTodos([...todos, { ...todo, id: new Date().getTime().toString() }]);
    setTodo({ id: "-1", title: "" });
  };

  const updateTodo = () => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    setTodo({ id: "-1", title: "" });
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <todosContext.Provider value={{ todos, todo, setTodo, addTodo, updateTodo, deleteTodo }}>
      {children}
    </todosContext.Provider>
  );
}

function TodoForm() {
  const { todo, setTodo, addTodo, updateTodo } = useContext(todosContext);
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <FormControl
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        className="me-2"/>
      <div className="d-flex">
        <Button onClick={updateTodo} className="btn btn-warning me-2">Update</Button>
        <Button onClick={addTodo} className="btn btn-success">Add</Button>
      </div>
    </ListGroup.Item>
  );
}

function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const { deleteTodo, setTodo } = useContext(todosContext);
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {todo.title}
      <div>
        <Button onClick={() => setTodo(todo)} className="btn btn-primary me-2">Edit</Button>
        <Button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</Button>
      </div>
    </ListGroup.Item>
  );
}

export default function ReactContextTodoList() {
  return (
    <TodosProvider>
      <TodoListInner />
    </TodosProvider>
  );
}

function TodoListInner() {
  const { todos } = useContext(todosContext);
  return (
    <div id="wd-react-context-todo-list">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}