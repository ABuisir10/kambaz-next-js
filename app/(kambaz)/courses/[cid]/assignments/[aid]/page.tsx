"use client";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import * as client from "../../../client";
import { RootState } from "../../../../store";
import { useState } from "react";
import Link from "next/link";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams() as { cid: string; aid: string };
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState<any>(existingAssignment || {
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  const handleSave = async () => {
    if (existingAssignment) {
      await client.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    } else {
      const newAssignment = await client.createAssignment(cid, assignment);
      dispatch(addAssignment(newAssignment));
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <div className="mx-auto" style={{ maxWidth: 720 }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control id="wd-name" value={assignment.title}
              onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control as="textarea" rows={6} id="wd-description"
              value={assignment.description}
              onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
          </Form.Group>
          <Row className="mb-3 align-items-center">
            <Col sm={3} className="text-end"><Form.Label className="mb-0">Points</Form.Label></Col>
            <Col sm={9}>
              <Form.Control id="wd-points" type="number" value={assignment.points}
                onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })} />
            </Col>
          </Row>
          <Row className="mb-3 align-items-center">
            <Col sm={3} className="text-end"><Form.Label className="mb-0">Due</Form.Label></Col>
            <Col sm={9}>
              <Form.Control id="wd-due-date" type="date" value={assignment.dueDate}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
            </Col>
          </Row>
          <Row className="mb-4 align-items-center">
            <Col sm={3} className="text-end">
              <Form.Label className="mb-0">Available from</Form.Label>
            </Col>
            <Col sm={4}>
              <Form.Control id="wd-available-from" type="date" value={assignment.availableFrom}
                onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })} />
            </Col>
            <Col sm={1} />
            <Col sm={1} className="text-end">
              <Form.Label className="mb-0">Until</Form.Label>
            </Col>
            <Col sm={3}>
              <Form.Control id="wd-available-until" type="date" value={assignment.availableUntil}
                onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })} />
            </Col>
          </Row>
          <div className="text-end">
            <Link href={`/courses/${cid}/assignments`}>
              <Button variant="secondary" className="me-2">Cancel</Button>
            </Link>
            <Button variant="danger" onClick={handleSave}>Save</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}