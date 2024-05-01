/* eslint-disable @typescript-eslint/no-explicit-any */

const TailwindCSSBorderBox = ({ borderColor }: any) => {
  return (
    <div className={`border border-solid border-[${borderColor}]`}>
      Tailwind CSS Border Box
    </div>
  );
};

export default TailwindCSSBorderBox;
