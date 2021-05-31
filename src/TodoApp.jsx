import React from 'react'
import TodoList from './TodoList'
import { useState } from 'react'

export default function TodoApp() {

  const [state, setState] = useState({
    items: [],
    text: ''
  })

  const handleChange = (event) => {
    setState({ items: state.items, text: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(state.text.length === 0) {
      return;
    }
    const newItem = {
      text: state.text,
      id: Date.now()
    };
    setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }


  return (
    <div>
      <h3>ToDo</h3>
      <TodoList items={state.items}/>
      <form onSubmit={handleSubmit}>
        <label htmlFor='new-todo'>
          What needs to be done?
        </label>
        <input
          id='new-todo'
          onChange={handleChange}
          value={state.text}
        />
        <button>
          Add #{state.items.length + 1}
        </button>
      </form>
    </div>
  )
}