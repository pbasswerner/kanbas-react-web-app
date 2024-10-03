import { Link, useParams, useLocation } from "react-router-dom";
import "../styles.css";

export default function CoursesNavigation() {
    const { cid } = useParams(); // Use the course ID if necessary
    const location = useLocation(); // Get the current route

    // Function to check if the link is active
    const isActive = (path: string) => location.pathname.includes(path);

    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            <Link
                id="wd-course-home-link"
                to={`/Kanbas/Courses/${cid}/Home`}
                className={`list-group-item border-0 ${isActive(`/Kanbas/Courses/${cid}/Home`) ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                Home
            </Link>

            <Link
                id="wd-course-modules-link"
                to={`/Kanbas/Courses/${cid}/Modules`}
                className={`list-group-item border-0 ${isActive(`/Kanbas/Courses/${cid}/Modules`) ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                Modules
            </Link>

            <Link
                id="wd-course-piazza-link"
                to={`/Kanbas/Courses/${cid}/Piazza`}
                className={`list-group-item border-0 ${isActive(`/Kanbas/Courses/${cid}/Piazza`) ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                Piazza
            </Link>

            <Link
                id="wd-course-zoom-link"
                to={`/Kanbas/Courses/${cid}/Zoom`}
                className={`list-group-item border-0 ${isActive(`/Kanbas/Courses/${cid}/Zoom`) ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                Zoom
            </Link>

            <Link
                id="wd-course-quizzes-link"
                to={`/Kanbas/Courses/${cid}/Assignments`}
                className={`list-group-item border-0 ${isActive(`/Kanbas/Courses/${cid}/Assignments`) ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                Assignments
            </Link>

            <Link
                id="wd-course-assignments-link"
                to={`/Kanbas/Courses/${cid}/Quizzes`}
                className={`list-group-item border-0 ${isActive(`/Kanbas/Courses/${cid}/Quizzes`) ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                Quizzes
            </Link>

            <Link
                id="wd-course-grades-link"
                to={`/Kanbas/Courses/${cid}/Grades`}
                className={`list-group-item border-0 ${isActive(`/Kanbas/Courses/${cid}/Grades`) ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                Grades
            </Link>

            <Link
                to={`/Kanbas/Courses/${cid}/People`}
                className={`list-group-item border-0 ${isActive(`/Kanbas/Courses/${cid}/People`) ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                People
            </Link>
        </div>
    );
}
