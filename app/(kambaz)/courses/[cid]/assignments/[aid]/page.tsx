"use client";

import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="mx-auto" style={{ maxWidth: 720 }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
            <Form.Control id="wd-name" defaultValue="A1 - ENV + HTML" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              as="textarea"
              rows={6}
              id="wd-description"
              defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
            />
          </Form.Group>

          <Row className="mb-3 align-items-center">
            <Col sm={3} className="text-end">
              <Form.Label htmlFor="wd-points" className="mb-0">
                Points
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Control id="wd-points" type="number" defaultValue={100} />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={3} className="text-end">
              <Form.Label htmlFor="wd-group" className="mb-0">
                Assignment Group
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={3} className="text-end">
              <Form.Label htmlFor="wd-display-grade" className="mb-0">
                Display Grade as
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Select id="wd-display-grade" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={3} className="text-end">
              <Form.Label htmlFor="wd-submission-type" className="mb-0">
                Submission Type
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={3} className="text-end">
              <div className="pt-1">Online Entry Options</div>
            </Col>
            <Col sm={9}>
              <Form.Check
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
              />
              <Form.Check
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
              />
              <Form.Check
                type="checkbox"
                id="wd-media"
                label="Media Recordings"
              />
              <Form.Check
                type="checkbox"
                id="wd-annotation"
                label="Student Annotation"
              />
              <Form.Check
                type="checkbox"
                id="wd-file-upload"
                label="File Uploads"
              />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={3} className="text-end">
              <Form.Label htmlFor="wd-assign-to" className="mb-0">
                Assign to
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Control id="wd-assign-to" defaultValue="Everyone" />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={3} className="text-end">
              <Form.Label htmlFor="wd-due-date" className="mb-0">
                Due
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Control
                id="wd-due-date"
                type="date"
                defaultValue="2024-05-13"
              />
            </Col>
          </Row>

          <Row className="mb-4 align-items-center">
            <Col sm={3} className="text-end">
              <Form.Label htmlFor="wd-available-from" className="mb-0">
                Available from
              </Form.Label>
            </Col>
            <Col sm={4}>
              <Form.Control
                id="wd-available-from"
                type="date"
                defaultValue="2024-05-06"
              />
            </Col>

            <Col sm={1} />

            <Col sm={1} className="text-end">
              <Form.Label htmlFor="wd-available-until" className="mb-0">
                Until
              </Form.Label>
            </Col>
            <Col sm={3}>
              <Form.Control
                id="wd-available-until"
                type="date"
                defaultValue="2024-05-20"
              />
            </Col>
          </Row>

          <div className="text-end">
            <Button variant="secondary" className="me-2">
              Cancel
            </Button>
            <Button variant="danger">Save</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
