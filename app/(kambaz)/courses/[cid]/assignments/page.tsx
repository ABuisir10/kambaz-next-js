"use client";
import { useParams } from "next/navigation";
import * as db from "../../../database";
import Link from "next/link";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { BsGripVertical, BsCaretDownFill } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {" "}
            <BsGripVertical className="me-2 fs-3" />{" "}
            <BsCaretDownFill className="ms-2" style={{ fontSize: "0.8rem" }} />
            ASSIGNMENTS{" "}
            <Badge pill bg="light" text="dark" className="border fw-normal">
              40% of Total
            </Badge>
            <AssignmentsControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1">
                  <div className="d-flex align-items-start">
                    <BsGripVertical className="me-2 fs-3" />
                    <div className="flex-fill">
                      <Link
                        href={`/courses/${cid}/assignments/${assignment._id}`}
                        className="text-muted text-decoration-none"
                        title="Edit"
                      >
                        <FaPenToSquare className="fs-5" />
                      </Link>
                      {assignment.title}
                      <div className="subtitles">
                        <span className="text-danger">Multiple Modules</span>
                        {" | "}Not available until {assignment.availableFrom} at 12:00am{" | "}
                        <b>Due</b> {assignment.dueDate} at 11:59pm{" | "}{assignment.points} pts
                      </div>
                    </div>
                    <LessonControlButtons />
                  </div>
                </ListGroupItem>
              ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}