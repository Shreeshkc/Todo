import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import Button from './components/Button'
import Counter from './components/Counter'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='Todo-container'>
      <Header title = "To DO"/>
      <Counter/>
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
