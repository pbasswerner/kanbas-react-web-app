import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControlButtons from './AssignmentsControlButtons';
import AssignmentListItemButtons from './AssignmentListItemButtons';
import { AiOutlineEdit, AiOutlineFile, AiOutlineFileAdd, AiOutlineFileText, AiOutlineOpenAI } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default function AssignmentsList() {

    return (
        <ul id="wd-assignment-list" className="list-group rounded-0 wd-padding ">
            <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <b>Assignments</b>
                    </div>
                    <div className="ms-auto">
                        40% of total
                    </div>
                    <AssignmentsControlButtons />
                </div>
                <div>

                </div>
                <ul className="wd-lessons list-group rounded-0">
                    <li className="wd-lesson list-group-item p-3 ps-1 align-items-center d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <AiOutlineFileText className="text-success fs-3 wd-assignment-icon" />
                            <div>
                                <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments/123" className=" wd-title">
                                    A1
                                </Link> <br />
                                Multiple Modules | <b> Not available until </b> May 6 at 12:00am | <b>Due </b> May 13 at 11:59pm | 100pts
                            </div>
                        </div>
                        <AssignmentListItemButtons />
                    </li>

                    <li className="wd-lesson list-group-item p-3 ps-1 align-items-center d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <AiOutlineFileText className="text-success fs-3 wd-assignment-icon" />
                            <div>
                                <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments/123" className=" wd-title">
                                    A2
                                </Link> <br />
                                Multiple Modules | <b> Not available until </b> May 6 at 12:00am | <b>Due </b> May 13 at 11:59pm | 100pts
                            </div>
                        </div>
                        <AssignmentListItemButtons />
                    </li>

                    <li className="wd-lesson list-group-item p-3 ps-1 align-items-center d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <AiOutlineFileText className="text-success fs-3 wd-assignment-icon" />
                            <div>
                                <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments/123" className=" wd-title">
                                    A3
                                </Link> <br />
                                Multiple Modules | <b> Not available until </b> May 6 at 12:00am | <b>Due </b> May 13 at 11:59pm | 100pts
                            </div>
                        </div>
                        <AssignmentListItemButtons />
                    </li>

                </ul>
            </li>

        </ul>
    )
}