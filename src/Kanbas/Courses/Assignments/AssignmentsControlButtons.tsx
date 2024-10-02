
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentsControlButtons() {
    return (
        <div className="float-end">
            <BsPlus className="fs-4 ms-2" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}