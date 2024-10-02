// import AssignmentsTopBar from "./AssignmentsTopBar";
// export default function Assignments() {
//     return (
//         <div id="wd-assignments">
//             <AssignmentsTopBar />
//             <h3 id="wd-assignments-title">
//                 ASSIGNMENTS 40% of Total <button>+</button>
//             </h3>
//             <ul id="wd-assignment-list">
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A1 - ENV + HTML
//                     </a><br />
//                     Multiple Modules | <b>Not available until </b> May 6 at 12:00am| <b> Due </b> May 13 at 11:59pm | 100pts

//                 </li>
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/124">
//                         A2 - CSS
//                     </a><br />
//                     Multiple Modules | <b>Not available until </b> May 13 at 12:00am| <b> Due </b> May 20 at 11:59pm | 100pts
//                 </li>
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/125">
//                         A3 - JS
//                     </a><br />
//                     Multiple Modules | <b>Not available until </b> May 20 at 12:00am| <b> Due </b> May 27 at 11:59pm | 100pts
//                 </li>
//             </ul>
//         </div>
//     );
// }

import AssignmentsTopBar from "./AssignmentsTopBar";
import AssignmentsList from "./AssignmentsList";
import { FaPlus } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentsTopBar />
            <AssignmentsList />


        </div>
    );
}

