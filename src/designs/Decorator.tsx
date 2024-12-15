import { decorator } from '../designs/decorator.themes.css' // Ensure this path is correct

export const Decorator = () => {
  return (
    <div className={decorator}>
      This component will have a darkblue background, white text color, padding
      of 1.5rem, and a border gold with the radius of 4px.
    </div>
  )
}
