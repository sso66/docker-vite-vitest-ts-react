import { useEffect } from "react";

// type alias code of conduct
interface HouseItems {
  Rooms: {
    master: {
      masterBath: boolean | null;
    };
  };
}

// construct code of conduct
const object: HouseItems = {
  Rooms: {
    master: {
      masterBath: null,
    },
  },
};

export const MediumExample = () => {
  useEffect(() => {
    const mediumExample =
      object.Rooms?.master.masterBath ?? "Master Bath Unknown";
    console.log(mediumExample);
  }, []);

  return (
    <>
      <div>Medium Example: Code Of Conduct</div>
    </>
  );
};
