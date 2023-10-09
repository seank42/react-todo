import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ToDolist from "./components/ToDolist";

const App = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <ToDolist />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
