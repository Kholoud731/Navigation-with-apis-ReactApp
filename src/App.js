import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from './components/Search';
import Route from "./components/Route";
import Header from "./components/Header";



const items = [
  {
    title: "What is React?", 
    content: "React is a front end framework"
  },
  {
    title: "why do we use React?", 
    content: "it's easy to create components"
  },
  {
    title: "Is react a Library?", 
    content: "Yes, It's a JavaSript framework"
  },
]

const options = [
  {
    lable: 'The Color Red',
    value: 'red'
  },
  {
    lable: 'The Color Green',
    value: 'green'
  },
  {
    lable: 'The Shade of Blue',
    value: 'blue'
  },

]

const App = () => {

  const [selected, setSelected] = useState(options[0])
  

  return (  
    <div>
      <Header/>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search  />
      </Route>
      <Route path='/dropdown'>
        <Dropdown 
        selected = {selected}
        onSelectedChange = {setSelected}
        options = {options}/>
      </Route>
      <Route path='/translate'>
        <Translate/>
      </Route>
      {/*  */}
      
      
    </div>
  );
}
 
export default App;