"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const pathname = usePathname();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/courses/${cid}/${link === "People" ? "people/Table" : link.toLowerCase()}`;
        const isActive = pathname.includes(link.toLowerCase());
        return (
          <Link
            key={link}
            href={linkPath}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item ${isActive ? "active" : "text-danger"} border-0`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}