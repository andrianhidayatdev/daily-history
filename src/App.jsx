import { useState } from 'react'
import './App.css'
import { supabase } from './supabaseClient'
import { useEffect } from 'react'
function App() {
 const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    const { data } = await supabase.from('menu').select('*')
    setTodos(data)
    console.log(data);
    
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📋 My Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.is_complete ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
