import { useEffect, useState } from 'react'
import './quote-form.css'

interface UserProps {
  id: number
  name: string
  email: string
}

const baseUrl = 'https:/jsonplaceholder.typicode.com/users'

async function fetchUsers (): Promise<UserProps[]> {
  const response = await fetch(baseUrl)
  const data = await response.json()
  return data
}

function UserList () {
  const [users, setUsers] = useState<UserProps[]>([])

  useEffect(() => {
    fetchUsers().then(data => setUsers(data))
  })

  return (
    <div className=''>
      {users.map(user => (
        <div key={user.id}>
          <p className='quote'>{user.name}</p>
        </div>
      ))}
    </div>
  )
}

export default UserList
