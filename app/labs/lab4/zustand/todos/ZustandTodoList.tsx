"use client";
import { ListGroup, Button, FormControl } from "react-bootstrap";
import { useTodoStore } from "./useTodoStore";

export default function ZustandTodoList() {
  const { todos, todo, addTodo, deleteTodo, updateTodo, setTodo } = useTodoStore();

  return (
    <div id="wd-zustand-todo-list">
      <h2>Todo List</h2>
      <ListGroup>
        <ListGroup.Item className="d-flex align-items-center gap-2">
          <FormControl
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          <Button onClick={updateTodo} className="btn btn-warning" id="wd-zustand-update-todo-click">
            Update
          </Button>
          <Button onClick={addTodo} className="btn btn-success" id="wd-zustand-add-todo-click">
            Add
          </Button>
        </ListGroup.Item>
        {todos.map((t) => (
          <ListGroup.Item key={t.id} className="d-flex align-items-center">
            <span className="me-auto">{t.title}</span>
            <Button
              onClick={() => setTodo(t)}
              className="btn btn-primary me-2"
              id="wd-zustand-edit-todo-click"
            >
              Edit
            </Button>
            <Button
              onClick={() => deleteTodo(t.id)}
              className="btn btn-danger"
              id="wd-zustand-delete-todo-click"
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
