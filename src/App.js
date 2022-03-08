import Header from "./Header";
import { useState } from 'react';
import FormArea from "./FormArea";
import List from "./List";
import Footer from "./Footer";
import Timer from "./Timer";

function App() {
  let theTime = new Date().toLocaleTimeString();
  let theDate = new Date().toLocaleDateString();

  const [items, setItems] = useState([]);
  const [date, setDate] = useState(" mm/dd/yyyy")
  const [time, setTime] = useState(" 00 : 00 : 00");

  const theDayTimeHandler = () => {
    theDate = new Date().toLocaleDateString();
    setDate(theDate);              
    theTime = new Date().toLocaleTimeString();
    setTime(theTime);

};

  
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

  const handleCheck = (id) => {
    items.map((item) => item.id === id ? {...item, checked: !item.checked } : item)
    
  }

    return (
    <div className="App">
      <Header />
      <Timer 
        date={date}
        time={time}
        setDate={setDate}
        setTime={setTime}
        theDayTimeHandler={theDayTimeHandler}
      />
      <FormArea 
        addItem={addItem}
      />
      {items.length ? (items.map((item, index ) => (
        <List 
          id={index}
          delItem={delItem}
          activity={item.activity} 
          date={item.date}
          time={item.time}
          handleCheck={handleCheck}
          
          
        />
      ))) : (<p className="noActs">Your List is Empty!!!</p>)}
      <Footer />
    </div>
  );
}

export default App;
