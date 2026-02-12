import Link from "next/link";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../modules/ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { BsCaretDownFill } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";

export default function Assignments() {
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
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-fill">
                  <Link
                    href={`/courses/1234/assignments/123`}
                    className="text-muted text-decoration-none"
                    title="Edit"
                  >
                    <FaPenToSquare className="fs-5" />
                  </Link>
                  A1 - ENV + HTML
                  <div className="subtitles">
                    <span className="text-danger">Multiple Modules</span>
                    {" | "}Not available until May 6 at 12:00am{" | "}
                    <b>Due</b> May 13 at 11:59pm{" | "}100 pts
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-fill">
                  <Link
                    href={`/courses/1234/assignments/123`}
                    className="text-muted text-decoration-none"
                    title="Edit"
                  >
                    <FaPenToSquare className="fs-5" />
                  </Link>
                  A2 - ENV + MATH
                  <div className="subtitles">
                    <span className="text-danger">Multiple Modules</span>
                    {" | "}Not available until May 12 at 12:00am{" | "}
                    <b>Due</b> May 19 at 11:59pm{" | "}100 pts
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-fill">
                  <Link
                    href={`/courses/1234/assignments/123`}
                    className="text-muted text-decoration-none"
                    title="Edit"
                  >
                    <FaPenToSquare className="fs-5" />
                  </Link>
                  A3 - Science + HTML
                  <div className="subtitles">
                    <span className="text-danger">Multiple Modules</span>
                    {" | "}Not available until May 15 at 12:00am{" | "}
                    <b>Due</b> May 30 at 11:59pm{" | "}100 pts
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
