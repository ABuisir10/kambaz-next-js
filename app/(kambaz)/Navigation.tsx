"use client";

import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const itemClass = (href: string) =>
    `border-0 text-center ${
      isActive(href) ? "bg-white" : "bg-black"
    }`;

  const linkClass = (href: string) =>
    `${isActive(href) ? "text-danger" : "text-white"} text-decoration-none`;

  const iconClass = (href: string) =>
    `fs-1 ${isActive(href) ? "text-danger" : "text-white"}`;

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem className={itemClass("/account")}>
        <Link href="/account" id="wd-account-link" className={linkClass("/account")}>
          <FaRegCircleUser className={iconClass("/account")} />
          <br />
          Account
        </Link>
      </ListGroupItem>

      <ListGroupItem className={itemClass("/dashboard")}>
        <Link href="/dashboard" id="wd-dashboard-link" className={linkClass("/dashboard")}>
          <AiOutlineDashboard className={iconClass("/dashboard")} />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>

      <ListGroupItem className={itemClass("/courses")}>
        <Link href="/courses" id="wd-course-link" className={linkClass("/courses")}>
          <LiaBookSolid className={iconClass("/courses")} />
          <br />
          Courses
        </Link>
      </ListGroupItem>

      <ListGroupItem className={itemClass("/calendar")}>
        <Link href="/calendar" id="wd-calendar-link" className={linkClass("/calendar")}>
          <IoCalendarOutline className={iconClass("/calendar")} />
          <br />
          Calendar
        </Link>
      </ListGroupItem>

      <ListGroupItem className={itemClass("/inbox")}>
        <Link href="/inbox" id="wd-inbox-link" className={linkClass("/inbox")}>
          <FaInbox className={iconClass("/inbox")} />
          <br />
          Inbox
        </Link>
      </ListGroupItem>

      <ListGroupItem className={itemClass("/labs")}>
        <Link href="/labs" id="wd-labs-link" className={linkClass("/labs")}>
          <LiaCogSolid className={iconClass("/labs")} />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}