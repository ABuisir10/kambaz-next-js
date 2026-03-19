import { create } from "zustand";

interface Todo {
  id: string;
  title: string;
}

interface TodoState {
  todos: Todo[];
  todo: { id?: string; title: string };
  addTodo: () => void;
  deleteTodo: (id: string) => void;
  updateTodo: () => void;
  setTodo: (todo: { id?: string; title: string }) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
  addTodo: () =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: new Date().getTime().toString(), title: state.todo.title },
      ],
      todo: { title: "" },
    })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
  updateTodo: () =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === state.todo.id ? { ...t, title: state.todo.title } : t
      ),
      todo: { title: "" },
    })),
  setTodo: (todo) => set({ todo }),
}));
