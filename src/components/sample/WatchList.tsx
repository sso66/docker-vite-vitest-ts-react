// sample/WatchList.tsx
import { useState } from 'react'
import './watchlist.css'
import Form from './Form'
import List from './List'

export interface IAppState {
  form: {
    name: string
    rate: number
    review?: string
  }[]
}

function WatchList() {
  const [form, setForm] = useState<IAppState['form']>([
    {
      name: 'Spirited Away',
      rate: 9,
      review: 'Beautifully written',
    },
    {
      name: 'Mean Girls',
      rate: 7.5,
      review: "Classic chick flick for girl's night out",
    },
  ])

  return (
    <div className="WatchList">
      <h1 className="title">My Watch List</h1>
      <div className="form-card">
        <List form={form} />
        <Form form={form} setForm={setForm} />
      </div>
    </div>
  )
}

export default WatchList
