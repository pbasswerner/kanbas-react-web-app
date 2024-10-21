import React from 'react';
import { useParams, Link } from 'react-router-dom';
import * as db from '../../Database'; // Import the database

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;

    return (
        <div id="wd-assignments-editor" className="container mt-4 wd-padding">
            <ul className="list-group">
                {assignments
                    .filter((assignment) => assignment.course === cid && assignment._id === aid)
                    .map((assignment) => (
                        <div key={assignment._id}>
                            <h4>
                                <label htmlFor="wd-name">Assignment Name</label>
                            </h4>
                            <input
                                id="wd-name"
                                value={assignment.title}
                                className="form-control mb-3"
                                readOnly
                            />

                            <textarea
                                id="wd-description"
                                cols={40}
                                rows={10}
                                className="form-control mb-4"
                                readOnly
                            >
                                {assignment.description}
                            </textarea>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label htmlFor="wd-points">Points</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        id="wd-points"
                                        value={assignment.points}
                                        className="form-control"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label htmlFor="wd-group">Assignment Group</label>
                                </div>
                                <div className="col-md-4">
                                    <select id="wd-group" className="form-control" >
                                        <option value="1">ASSIGNMENTS</option>
                                        <option value="2">QUIZZES</option>
                                        <option value="3">OTHER</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label htmlFor="wd-display-grade-as">Display Grade As</label>
                                </div>
                                <div className="col-md-4">
                                    <select id="wd-display-grade-as" className="form-control" >
                                        <option value="1">Percentage</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label htmlFor="wd-submission-type">Submission Type</label>
                                </div>
                                <div className="col-md-4 wd-outline">
                                    <select id="wd-submission-type" className="form-control" >
                                        <option value="1">Online</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-2">Assign</div>
                                <div className="col-md-4">
                                    <div>
                                        <label htmlFor="wd-assign-to" className="wd-title">
                                            Assign To
                                        </label>
                                        <input
                                            id="wd-assign-to"
                                            value="Everyone"
                                            className="form-control mb-3"
                                            readOnly
                                        />

                                        <label htmlFor="wd-due-date" className="wd-title">
                                            Due
                                        </label>
                                        <br />
                                        <input
                                            type="date"
                                            id="wd-due-date"
                                            value={assignment.due_date}
                                            className="form-control mb-3"
                                            readOnly
                                        />
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="wd-available-from" className="wd-title">
                                                Available From
                                            </label>
                                            <input
                                                type="date"
                                                id="wd-available-from"
                                                value={assignment.available_date}
                                                className="form-control mb-3"
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="wd-available-until" className="wd-title">
                                                Until
                                            </label>
                                            <input
                                                type="date"
                                                id="wd-available-until"
                                                value={assignment.available_until || ''}
                                                className="form-control mb-3"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-end">
                                <Link
                                    to={`/Kanbas/Courses/${cid}/Assignments/`}
                                    className="btn btn-secondary me-2"
                                >
                                    Cancel
                                </Link>
                                <Link
                                    to={`/Kanbas/Courses/${cid}/Assignments/`}
                                    className="btn btn-danger"
                                >
                                    Save
                                </Link>
                            </div>
                        </div>
                    ))}
            </ul>
        </div>
    );
}
