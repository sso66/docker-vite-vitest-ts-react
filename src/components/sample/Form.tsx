// sample/Form.tsx
import React, { useState } from 'react'
import { IAppState as IAppProps } from './WatchList'

interface ICompProps {
  form: IAppProps['form']
  setForm: React.Dispatch<React.SetStateAction<IAppProps['form']>>
}

const Form = ({ form, setForm }: ICompProps) => {
  const [input, setInput] = useState({
    name: '',
    rate: '',
    review: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (!input.name || !input.rate) {
      return
    }
    setForm([
      ...form,
      {
        name: input.name,
        rate: parseInt(input.rate),
        review: input.review,
      },
    ])
    setInput({
      name: '',
      rate: '',
      review: '',
    })
  }

  return (
    <form className="">
      <div className="first formDiv">
        <div>
          <h3>Enter movie name</h3>
          <input
            className="inputBox"
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <h3>Enter your rating</h3>
          <input
            className="inputBox rating"
            type="number"
            name="rate"
            value={input.rate}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div>
        <h3>Enter your review</h3>
        <textarea
          className="inputBox"
          name="review"
          value={input.review}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <button className="button" type="submit" onClick={(e) => handleClick(e)}>
        Submit
      </button>
    </form>
  )
}

export default Form
