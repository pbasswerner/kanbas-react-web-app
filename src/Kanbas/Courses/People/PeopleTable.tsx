import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Tony</span>{" "}
                            <span className="wd-last-name">Stark</span>
                        </td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Bruce</span>{" "}
                            <span className="wd-last-name">Wayne</span>
                        </td>
                        <td className="wd-login-id">001234562W</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-09-28</td>
                        <td className="wd-total-activity">15:30:21</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Steve</span>{" "}
                            <span className="wd-last-name">Rogers</span>
                        </td>
                        <td className="wd-login-id">001234563R</td>
                        <td className="wd-section">S103</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-09-30</td>
                        <td className="wd-total-activity">12:45:10</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Natasha</span>{" "}
                            <span className="wd-last-name">Romanoff</span>
                        </td>
                        <td className="wd-login-id">001234564N</td>
                        <td className="wd-section">S104</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-02</td>
                        <td className="wd-total-activity">08:55:43</td>
                    </tr>
                    {/* New users added */}
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Mariana</span>{" "}
                            <span className="wd-last-name">Gonzales</span>
                        </td>
                        <td className="wd-login-id">001234565G</td>
                        <td className="wd-section">S105</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-03</td>
                        <td className="wd-total-activity">09:23:11</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Juan Pablo</span>{" "}
                            <span className="wd-last-name">Amelunge</span>
                        </td>
                        <td className="wd-login-id">001234566A</td>
                        <td className="wd-section">S106</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-04</td>
                        <td className="wd-total-activity">07:45:22</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Bethany</span>{" "}
                            <span className="wd-last-name">Black</span>
                        </td>
                        <td className="wd-login-id">001234567B</td>
                        <td className="wd-section">S107</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-05</td>
                        <td className="wd-total-activity">06:30:55</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
