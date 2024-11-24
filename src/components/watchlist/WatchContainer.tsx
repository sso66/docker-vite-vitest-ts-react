// src/components/watchlist/WatchContainer.tsx

import { useState } from 'react'
import './watchlist.css'
import WatchForm from './WatchForm'
import WatchList from './WatchList'

export interface AppState {
  form: {
    name: string
    rate: number
    review?: string
  }[]
}

function WatchContainer () {
  const [form, setForm] = useState<AppState['form']>([
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
    <div className='WatchList'>
      <h3 className='title'>My Watch List</h3>
      <div className='form-card'>
        <WatchList form={form} />
        <WatchForm form={form} setForm={setForm} />
      </div>
    </div>
  )
}

export default WatchContainer
