import './quote-form.css'

type QuoteFormProps = {
  name?: string
}

const Quote = ({ name }: QuoteFormProps) => (
  <div className='quote'>
    <h1>{name}</h1>
  </div>
)

export default Quote
