import React from 'react'

interface Item {
  id: number
  name: string
  email: string
  message: string
}

interface MyFormProps {
  item: Item
  onInputChange: (id: number, name: string, value: string) => void
  onSubmit: (id: number, e: React.FormEvent) => void
}

const MyForm: React.FC<MyFormProps> = ({ item, onInputChange, onSubmit }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    onInputChange(item.id, name, value)
  }

  return (
    <form onSubmit={e => onSubmit(item.id, e)}>
      <div>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={item.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={item.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name='message'
          value={item.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default MyForm
