// src/components/TodoApp.tsx

import { useState } from 'react'

// interface TodoItem {
//   id: string
//   text: string
//   completed: boolean
// }

type TodoItem = {
  id: string
  text: string
  completed: boolean
}

const TodoApp = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo !== '') {
      const newId = crypto.randomUUID() // Ensure your environment supports this
      const newTodoItem: TodoItem = {
        id: newId,
        text: newTodo,
        completed: false,
      }
      setTodos([...todos, newTodoItem])
      setNewTodo('')
    }
  }

  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            &nbsp;&nbsp;
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
