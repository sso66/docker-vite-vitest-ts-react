/* eslint-disable @typescript-eslint/no-explicit-any */

const TailwindCssBorderBox = ({ borderColor }: any) => {
  return (
    <div className={`border border-solid border-[${borderColor}]`}>
      Tailwind CSS Border Box
    </div>
  )
}

export default TailwindCssBorderBox
