import Header from "./Header";
import { useState } from 'react';
import FormArea from "./FormArea";
import List from "./List";
import Footer from "./Footer";
import Timer from "./Timer";

function App() {
  const [items, setItems] = useState([]);

  
  function addItem(item) {
    setItems(prevItems => {
      return [...prevItems, item]
    })
  }

  function delItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

    return (
    <div className="App">
      <Header />
      <Timer />
      <FormArea 
        addItem={addItem}
      />
      {items.map((item, index ) => (
        <List 
          id={index}
          delItem={delItem}
          activity={item.activity} 
          date={item.date}
          time={item.time}
          
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
