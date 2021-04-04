import Form from "react-bootstrap/Form";

const Filter = () => {
  return (
    <div className="Articles">
      <Form style={{ textAlign: "center" }}>
        <Form.Group>
          <Form.Label>Filtrer</Form.Label>
          <Form.Control as="select">
            <option>All products</option>
            <option>Huiles</option>
            <option>Accessoires</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Filter;
