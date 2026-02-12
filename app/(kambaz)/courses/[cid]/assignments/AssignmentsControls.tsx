import {
  Button,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentsControls() {
  return (
    <div id="wd-modules-controls" className="mb-3">
      <Row>
        <Col md={6}>
          <FormControl
            type="search"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </Col>

        <Col md={6} className="text-end">
          <Button
            variant="secondary"
            className="me-2"
            id="wd-add-group"
          >
            <FaPlus className="me-2" />
            Group
          </Button>

          <Button
            variant="danger"
            id="wd-add-assignment-btn"
          >
            <FaPlus className="me-2" />
            Assignment
          </Button>
        </Col>
      </Row>
    </div>
  );
}