export default function Modules() {
    return (
        <div>
            {/* Collapse All button, View Progress button, etc. */}
            <button>Collapse All</button>
            <button>View Progress</button>
            <select>
                <option value="VAL1">Delete</option>
                <option value="VAL2" selected>Publish All</option>
            </select>
            <button>+ Module</button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">READINGS</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Chapter 1</li>
                                <li className="wd-content-item">Chapter 2</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title"> SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Create websites</li>
                                <li className="wd-content-item">HTML</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Understand JavaScript fundamentals</li>
                                <li className="wd-content-item">Learn how to manipulate the DOM</li>
                                <li className="wd-content-item">Understand JavaScript functions and events</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">READINGS</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Chapter 3: JavaScript Basics</li>
                                <li className="wd-content-item">Chapter 4: DOM Manipulation</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to JavaScript</li>
                                <li className="wd-content-item">JavaScript and the DOM</li>
                                <li className="wd-content-item">JavaScript Functions and Events</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="wd-module">
                    <div className="wd-title">Week 3</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to databases</li>
                                <li className="wd-content-item">Understand SQL basics</li>
                                <li className="wd-content-item">Learn how to interact with databases from a web application</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">READINGS</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Chapter 5: Introduction to Databases</li>
                                <li className="wd-content-item">Chapter 6: SQL Basics</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Databases</li>
                                <li className="wd-content-item">SQL Fundamentals</li>
                                <li className="wd-content-item">Database Integration with Web Applications</li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    );
}
