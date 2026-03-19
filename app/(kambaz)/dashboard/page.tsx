"use client";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../courses/reducer";
import { RootState } from "../store";
import { useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const dispatch = useDispatch();

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button className="btn btn-primary float-end" id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse({ ...course, _id: uuidv4() }))}>
          Add
        </button>
        <button className="btn btn-warning float-end me-2" id="wd-update-course-click"
          onClick={() => dispatch(updateCourse(course))}>
          Update
        </button>
      </h5>
      <br />
      <FormControl value={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <FormControl value={course.description} as="textarea" rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/courses/${course._id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg src={course.image} variant="top" width="100%" height={160} />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    <button onClick={(event) => { event.preventDefault(); dispatch(deleteCourse(course._id)); }}
                      className="btn btn-danger float-end" id="wd-delete-course-click">
                      Delete
                    </button>
                    <button onClick={(event) => { event.preventDefault(); setCourse(course); }}
                      className="btn btn-warning float-end me-2" id="wd-edit-course-click">
                      Edit
                    </button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}