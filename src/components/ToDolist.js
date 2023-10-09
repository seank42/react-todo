import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ToDoitem from "./ToDoitem";
import { useState } from "react";


const ToDolist = () => {
 let intiallist = [
    {id:1 , text:`clean the place`, done:true},
    {id:2 , text:`clean place`, done:false},
    {id:2 , text:` place`, done:true}
];

const [list, setList] = useState(intiallist);
const [textInput, setTextInput] = useState(''); 

const handleTextInput = (e) => {
    setTextInput(e.target.value);
};

let todoItems = list.map((item) => {
return <ToDoitem key={item.id} todo={item}/>
});

  return (
    <Card>
      <Card.Header>ToDolist</Card.Header>

      <Card.Body>
        <ListGroup>
          {todoItems}
        </ListGroup>
      </Card.Body>

      <Card.Footer>
        <input type='text' onChange={handleTextInput} value={textInput}/>
        <Button variant="primary" className="float-end"> Add</Button>
      </Card.Footer>
    </Card>
  );
};

export default ToDolist;
