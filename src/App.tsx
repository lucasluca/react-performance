import { useMemo, useState } from "react";
import "./App.css";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const addItemToList = () => {
    setItems([...items, `Item ${items.length}`]);
  };

  const countItmesWithOne = useMemo(() => {
    console.log("precisou aqui jovem");
    return items.filter((item) => item.includes("1")).length;
  }, [items]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map((item) => (
          <Item key={item} title={item} />
        ))}
      </ul>
      <div>{countItmesWithOne}</div>
    </div>
  );
}

export default App;
