import { useState } from "react";
import * as styles from "../../designs/VanillaExtract.css";

const VanillaExtract = () => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<Array<string>>([]);

  const onAddItem = (item: string) => {
    setItems([...items, item]);
    setValue("");
  };

  const onRemoveItem = (index: number) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  return (
    <div className="App">
      <div>
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => onAddItem(value)}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <h3 style={{ color: "black", fontSize: "2rem" }}>{item}</h3>
            <button onClick={() => onRemoveItem(index)}>x</button>
          </div>
        ))}
      </div>

      <div className={styles.wrapper}>
        <h1>Killerset</h1>
        <p>I'm styled using Vanilla Extract</p>
      </div>
    </div>
  );
};

export default VanillaExtract;
