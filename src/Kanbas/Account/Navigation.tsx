import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const location = useLocation(); // Get the current path

    // Helper function to check if a given path is the active route
    const isActive = (path: string) => location.pathname === path;

    return (
        <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
            <Link
                to="/Kanbas/Account/Signin"
                className={`list-group-item border-0  ${isActive("/Kanbas/Account/Signin") ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                Signin
            </Link>

            <Link
                to="/Kanbas/Account/Signup"
                className={`list-group-item border-0 ${isActive("/Kanbas/Account/Signup") ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                Signup
            </Link>


            <Link
                to="/Kanbas/Account/Profile"
                className={`list-group-item border-0 ${isActive("/Kanbas/Account/Profile") ? 'text-black border-start border-3 border-black' : 'text-danger'}`}
            >
                Profile
            </Link>

        </div>
    );
}
