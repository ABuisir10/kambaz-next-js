import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />

      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <br />
          Multiple Modules | Not available until May 6 at 12:00am |
          <br />
          <b>Due</b> May 13 at 11:59pm | 100 pts
        </li>

        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            A2 - CSS + HTML3
          </Link>
          <br />
          Multiple Modules | Not available until May 20 at 12:00am |
          <br />
          <b>Due</b> May 25 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/courses/1234/assignments/123"
            className="wd-assignment-link"
          >
            A3 - Javascript + React
          </Link>
          <br />
          Multiple Modules | Not available until May 25 at 12:00am |
          <br />
          <b>Due</b> May 30 at 11:59pm | 100 pts
        </li>
      </ul>
    </div>
  );
}
