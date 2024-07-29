import { FormEvent, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../store"

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  function handleNewTodo(e: FormEvent) {
    e.preventDefault()
    dispatch(addTodo(newTodo))
    inputRef && inputRef.current && (inputRef.current.value = '')
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input ref={inputRef} type="text" placeholder="Criar Todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button type="submit">Adicionar</button>
    </form>
  )
}