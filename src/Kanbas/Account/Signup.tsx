import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="wd-signup-screen" className="wd-padding">
            <h1>Sign up</h1>
            <input
                id="wd-username"
                placeholder="username"
                className="form-control mb-2" /><br />
            <input
                id="wd-password"
                placeholder="password"
                type="password"
                className="form-control mb-2" /><br />
            <input
                id="wd-verify-password"
                placeholder="verify password"
                type="password"
                className="form-control mb-2" /><br />

            <Link
                id="wd-signup-btn"
                to="/Kanbas/Account/Profile"
                className="btn btn-primary w-100 mb-3">
                Sign up
            </Link><br />
            <Link
                id="wd-signin-link"
                to="/Kanbas/Account/Signin"
                className="d-block text-center">
                Sign in
            </Link>
        </div>
    );
}
