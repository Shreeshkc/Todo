import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import Button from './components/Button'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='Todo-container'>
      <Header title = "To DO"/>
      <TodoItem text="Eat"/>
       <TodoItem  complete={true} text="Code"/>
       <TodoItem  text="Sleep"/>
       <TodoItem/>
       <TodoItem/>
       <TodoItem/>
      <Button/>
    
    </div>
  )
}

export default App
