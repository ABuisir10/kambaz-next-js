import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/download.jpg" width={200} height={150} alt="reactjs"/>
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/download2.jpg" width={200} height={150} alt="reactjs"/>
            <div>
              <h5>CS1234 Node JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1236" className="wd-dashboard-course-link">
            <Image src="/images/download3.jpg" width={200} height={150} alt="reactjs"/>
            <div>
              <h5>CS1234 React MCAS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1254" className="wd-dashboard-course-link">
            <Image src="/images/download4.jpg" width={200} height={150} alt="reactjs"/>
            <div>
              <h5>CS1234 React Lecture</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/2234" className="wd-dashboard-course-link">
            <Image src="/images/download5.jpg" width={200} height={150} alt="reactjs"/>
            <div>
              <h5>CS1234 React Lab</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1324" className="wd-dashboard-course-link">
            <Image src="/images/download6.jpg" width={200} height={150} alt="reactjs"/>
            <div>
              <h5>CS1234 React Tutorial</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1243" className="wd-dashboard-course-link">
            <Image src="/images/download7.jpg" width={200} height={150} alt="reactjs"/>
            <div>
              <h5>CS1234 React Intro</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1432" className="wd-dashboard-course-link">
            <Image src="/images/download8.jpg" width={200} height={150} alt="reactjs"/>
            <div>
              <h5>CS1234 React Class</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}