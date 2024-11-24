import React, { useState, useEffect } from 'react'
import MyForm from './MyForm'
import './form.css'

interface Item {
  id: number
  name: string
  email: string
  message: string
}

const MyList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const handleInputChange = (id: number, name: string, value: string) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [name]: value } : item))
    )
  }

  const handleSubmit = (id: number, e: React.FormEvent) => {
    e.preventDefault()
    const item = items.find((item) => item.id === id)
    console.log('Form data submitted for item', id, ':', item)
  }

  return (
    <div>
      {items.map((item) => (
        <MyForm
          key={item.id}
          item={item}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      ))}
    </div>
  )
}

export default MyList
