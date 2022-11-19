import { useState } from "react";
import ShowItem from './componenets/ShowItem';
import AddItem from './componenets/AddItem';



function App() {

  const [items, setItem] = useState(
    [
      { id: 1, name: "Ahmed", age: 28 },
      { id: 2, name: "Ali", age: 27 },
      { id: 3, name: "omar", age: 26 },
      { id: 4, name: "sara", age: 25 },
      { id: 5, name: "hagar", age: 24 },
    ]
  );

  const deleteMyItem = (id) => {
    setItem(items.filter(item => { return item.id !== id }))
  }


  const addItem = (item) => {
    // add attribut id to item and gav ham valuos
    item.id = Math.random();

    setItem([...items, item]);

  }

  return (
    <div className="App container">
      <h1 className="text-center">TodoListApp</h1>
      <ShowItem listItem={items} deleteItem={deleteMyItem} />
      <AddItem addIMytem={addItem} />
    </div>
  );
}

export default App;
