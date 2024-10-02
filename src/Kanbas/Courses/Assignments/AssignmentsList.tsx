import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControlButtons from './AssignmentsControlButtons';
export default function AssignmentsList() {

    return (
        <ul id="wd-assignment-list" className="list-group rounded-0">
            <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <b>Assignments</b>
                    </div>
                    <AssignmentsControlButtons />
                </div>
                <div>

                </div>
                <ul className="wd-lessons list-group rounded-0">
                    <li className="wd-lesson list-group-item p-3 ps-1">
                        <div>
                            <BsGripVertical className="me-2 fs-3" />
                            A1
                            Multiple Modules | <b>Not available until </b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts

                        </div>
                    </li>
                </ul>
            </li>

            <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    LEARNING OBJECTIVES
                    {/* <LessonControlButtons /> */}
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    Introduction to the course
                    {/* <LessonControlButtons /> */}
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    Learn what is Web Development
                    {/* <LessonControlButtons /> */}
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    LESSON 1
                    {/* <LessonControlButtons /> */}
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    LESSON 2
                    {/* <LessonControlButtons /> */}
                </li>
            </ul>
        </ul>
    )
}