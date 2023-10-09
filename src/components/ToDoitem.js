import ListGroup from "react-bootstrap/ListGroup";

const ToDoitem = (props) => {

    return(
        <>
        <ListGroup.Item>{props.todo.text}</ListGroup.Item>
        </>
    );

};

export default ToDoitem ;