import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (id: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center">
      <FaTrash
        className="text-danger me-2 fs-5"
        style={{ cursor: "pointer" }}
        onClick={() => deleteAssignment(assignmentId)}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
