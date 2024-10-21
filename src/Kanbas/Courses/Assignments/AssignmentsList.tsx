import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControlButtons from './AssignmentsControlButtons';
import AssignmentListItemButtons from './AssignmentListItemButtons';
import { AiOutlineFileText } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentsList() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
        <div className="container">
            <ul id="wd-assignment-list" className="list-group rounded-0 wd-padding">

                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>Assignments</b>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                            <span>40% of Total</span>
                            <AssignmentsControlButtons />
                        </div>
                    </div>

                    <ul className="wd-lessons list-group rounded-0">
                        {assignments.filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <AiOutlineFileText className="text-success fs-3 wd-assignment-icon" />
                                        <div className="ms-2">
                                            <Link id="wd-course-quizzes-link" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-title">
                                                {assignment.title}
                                            </Link>
                                            <br />
                                            <span className="text-danger">Multiple Modules</span> | <span><b></b> {assignment.available_date}</span>
                                            <br />
                                            <span><b>Due: </b>{assignment.due_date} | {assignment.points} pts</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <AssignmentListItemButtons />
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
