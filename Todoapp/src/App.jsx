import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import Button from './components/Button'
import Counter from './components/Counter'
import Add from './components/Add'


function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([
    { text: "Eat", complete: false },
    { text: "Code", complete: false },
    { text: "Sleep", complete: false },
  ])

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { text, complete: false }])
  }

  const toggleTodo = (index) => {
    setTodos((prev) =>
      prev.map((t, i) => (i === index ? { ...t, complete: !t.complete } : t))
    )
  }

  return (
    <div className='Todo-container'>
     <Add onAdd={addTodo} />

      <Header title="To DO" />
     
      <ul>
        {todos.map((t, i) => (
          <TodoItem
            key={i}
            text={t.text}
            complete={t.complete}
            onToggle={() => toggleTodo(i)}
          />
        ))}
      </ul>
      <Button onAdd={addTodo} />
    </div>
  )
}

export default App
