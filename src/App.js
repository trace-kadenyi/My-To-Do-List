import Header from "./Header";
import { useState } from 'react';
import FormArea from "./FormArea";
import List from "./List";
import Footer from "./Footer";
import Timer from "./Timer";

function App() {
  let theTime = new Date().toLocaleTimeString();
  let theDate = new Date().toLocaleDateString();

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todolist')));
  const [date, setDate] = useState(" mm/dd/yyyy")
  const [time, setTime] = useState(" 00 : 00 : 00");


  const theDayTimeHandler = () => {
    theDate = new Date().toLocaleDateString();
    setDate(theDate);              
    theTime = new Date().toLocaleTimeString();
    setTime(theTime);

};

  



  function addItem(item) {
    (setItems(prevItems => {
      item.id = Math.floor(Math.random() * 10000)
      item.checked = false
      return [...prevItems, item]
    }))
    const listItems = items.concat(item)
    localStorage.setItem('todolist', JSON.stringify(listItems))
    console.log(listItems)
    // console.log(items.concat(item))
    // console.log(item)
    
    
  }







  
/****************
 * *******************
 * ************************
 * *****************************
 * *********/

  


  const delItem = (id) => {
    const listItems = items.filter((item, index) => id !== index);
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems))
    console.log(listItems)
    
    
  }

  

  const handleCheck = (id, item) => {
    const listItems = items.map((item, index) => id === index ? {...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem('todolist', JSON.stringify(listItems))
    console.log(listItems)
    
  }


  // const handleCheck = (id) => {
  //   const listItems = items.map((item, index) => id === index ? {...item, checked: !item.checked } : item)
  //   setItems(listItems)
  //   localStorage.setItem('todolist', JSON.stringify(listItems))
  //   console.log(listItems)
    
  // }
  
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
          key={item.id}
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
