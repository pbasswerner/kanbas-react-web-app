import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaAddressCard, LiaBookSolid, LiaInboxSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation, useParams } from "react-router-dom";

export default function KanbasNavigation() {
    const location = useLocation();
    const { cid } = useParams();


    const isActive = (path: string) => location.pathname.includes(path);

    return (
        <div id="wd-kanbas-navigation" style={{ width: 120 }}
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">

            <a id="wd-neu-link" target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px" alt="Northeastern" />
            </a>

            <Link to="/Kanbas/Account" id="wd-account-link"
                className={`list-group-item text-center border-0 ${isActive("/Kanbas/Account") ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <FaRegCircleUser className="fs-1 text-danger" />
                <span className={`${isActive("/Kanbas/Account") ? 'text-danger' : 'text-white'}`}>Account</span>
            </Link>

            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
                className={`list-group-item text-center border-0 ${isActive("/Kanbas/Dashboard") || cid ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <AiOutlineDashboard className="fs-1 text-danger" />
                <span className={`${isActive("/Kanbas/Dashboard") || cid ? 'text-danger' : 'text-white'}`}>Dashboard</span>
            </Link>

            <Link to="/Kanbas/Dashboard" id="wd-course-link"
                className={`list-group-item text-center border-0 ${isActive("/Kanbas/Courses") || cid ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <LiaBookSolid className="fs-1 text-danger" />
                <span className={`${isActive("/Kanbas/Courses") || cid ? 'text-danger' : 'text-white'}`}>Courses</span>
            </Link>

            <Link to="/Kanbas/Calendar" id="wd-calendar-link"
                className={`list-group-item text-center border-0 ${isActive("/Kanbas/Calendar") ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <IoCalendarOutline className="fs-1 text-danger" />
                <span className={`${isActive("/Kanbas/Calendar") ? 'text-danger' : 'text-white'}`}>Calendar</span>
            </Link>

            <Link to="/Kanbas/Inbox" id="wd-inbox-link"
                className={`list-group-item text-center border-0 ${isActive("/Kanbas/Inbox") ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <LiaInboxSolid className="fs-1 text-danger" /><br />
                <span className={`${isActive("/Kanbas/Inbox") ? 'text-danger' : 'text-white'}`}>Inbox</span>
            </Link>

            <Link to="/Labs" id="wd-labs-link"
                className={`list-group-item text-center border-0 ${isActive("/Labs") ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <LiaAddressCard className="fs-1 text-danger" /><br />
                <span className={`${isActive("/Labs") ? 'text-danger' : 'text-white'}`}>Labs</span>
            </Link>
        </div>
    );
}
