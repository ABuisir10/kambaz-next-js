"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import * as client from "../courses/client";
import { setCourses } from "../courses/reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();

  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<any>({
    name: "",
    description: "",
    image: "/images/reactjs.jpg",
  });

  const fetchCourses = async () => {
    try {
      const myCourses = await client.findMyCourses();
      dispatch(setCourses(myCourses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllCourses = async () => {
    try {
      const all = await client.fetchAllCourses();
      setAllCourses(all);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchAllCourses();
  }, [currentUser]);

  const isEnrolled = (courseId: string) =>
    courses.some((c: any) => c._id === courseId);

  const onEnroll = async (courseId: string) => {
    await client.enrollInCourse("current", courseId);
    await fetchCourses();
  };

  const onUnenroll = async (courseId: string) => {
    await client.unenrollFromCourse("current", courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) =>
      c._id === course._id ? course : c
    )));
  };

  const isFaculty = (currentUser as any)?.role === "FACULTY" || (currentUser as any)?.role === "ADMIN";
  const displayedCourses = showAllCourses ? allCourses : courses;

  return (
    <div id="wd-dashboard">
      <h1>Dashboard
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Courses" : "All Courses"}
        </button>
      </h1>
      <hr />

      {isFaculty && (
        <>
          <h5>New Course</h5>
          <input
            value={course.name}
            className="form-control mb-2"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control mb-2"
            placeholder="Course Description"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <button onClick={onAddNewCourse} className="btn btn-primary float-end ms-2" id="wd-add-new-course-click">
            Add
          </button>
          <button onClick={onUpdateCourse} className="btn btn-warning float-end" id="wd-update-course-click">
            Update
          </button>
          <hr />
        </>
      )}

      <h2>Published Courses ({displayedCourses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        {displayedCourses.map((c: any) => (
          <div className="col-md-3 mb-4" key={c._id}>
            <div className="card h-100">
              <img
                src={c.image || "/images/reactjs.jpg"}
                className="card-img-top"
                alt={c.name}
                style={{ height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <p className="card-text">{c.description}</p>
                {isEnrolled(c._id) && (
                  <Link href={`/courses/${c._id}/home`} className="btn btn-primary me-2">
                    Go
                  </Link>
                )}
                {!isFaculty && isEnrolled(c._id) && (
                  <button
                    className="btn btn-danger float-end"
                    onClick={(e) => { e.preventDefault(); onUnenroll(c._id); }}
                  >
                    Unenroll
                  </button>
                )}
                {!isFaculty && !isEnrolled(c._id) && (
                  <button
                    className="btn btn-success float-end"
                    onClick={(e) => { e.preventDefault(); onEnroll(c._id); }}
                  >
                    Enroll
                  </button>
                )}
                {isFaculty && (
                  <>
                    <button
                      className="btn btn-danger float-end"
                      onClick={(e) => { e.preventDefault(); onDeleteCourse(c._id); }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning float-end me-2"
                      onClick={(e) => { e.preventDefault(); setCourse(c); }}
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
