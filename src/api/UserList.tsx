// src/api/user/UserList.tsx

import { useEffect, useState } from 'react'
import { UserProps } from '../types/user'

const baseUrl = 'https:/jsonplaceholder.typicode.com/users'

async function fetchUsers(): Promise<UserProps[]> {
  const response = await fetch(baseUrl)
  const data = await response.json()
  return data
}

function UserList() {
  const [users, setUsers] = useState<UserProps[]>([])

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data))
  })

  return (
    <div className="user">
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.id}. {user.name + ' works for ' + user.company.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default UserList
