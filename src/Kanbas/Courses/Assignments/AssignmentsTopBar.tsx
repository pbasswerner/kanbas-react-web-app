// import { FaPlus } from "react-icons/fa6";
// export default function AssignmentsTopBar() {
//     return (
//         <div id="wd-assignments-top-bar">
//             <input id="wd-search-assignment"
//                 placeholder="Search for Assignments" />
//             <div className="float-end">
//                 <button id="wd-add-assignment-group" className="btn btn-lg me-1 btn-secondary">
//                     <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                     Group</button>
//                 <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1">
//                     <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                     Assignment</button>
//             </div>

//         </div>
//     )
// }
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function AssignmentsTopBar() {
    return (
        <div id="wd-assignments-top-bar" className="d-flex justify-content-between mb-3">
            <div className="search-bar">
                <FaSearch className="me-2 fs-5" />
                <input id="wd-search-assignment" className="form-control d-inline-block w-auto"
                    placeholder="Search" />
            </div>
            <div className="float-end">
                <button id="wd-add-assignment-group" className="btn btn-lg me-1 btn-secondary">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>
                <button id="wd-add-assignment" className="btn btn-lg btn-danger">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button>
            </div>
        </div>
    );
}
