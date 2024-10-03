// export default function AssignmentEditor() {
//     return (
//         <div id="wd-assignments-editor">
//             <h4>
//                 <label htmlFor="wd-name">Assignment Name</label>
//             </h4>
//             <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
//             <textarea id="wd-description" cols={40} rows={10}>
//                 The assignment is available online Submit a link to the landing page of your web application running on Netlify.The landing page should include the following: Your full name and section Links to each of the Lab assignments A link to to the Kanbas application  Links to all the relevant source code repositories The Kanbas application should include a link to naviagate back to the landing page
//             </textarea>
//             <br />
//             <br />
//             <table>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-points">Points</label>
//                     </td>
//                     <td>
//                         <input id="wd-points" value={100} />
//                     </td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-group">Assignment Group</label>
//                     </td>
//                     <td>
//                         <select id="wd-group">
//                             <option value="1">ASSIGNMENTS</option>
//                             <option value="2">QUIZZES</option>
//                             <option value="3">OTHER</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-display-grade-as">Display Grade As</label>
//                     </td>
//                     <td>
//                         <select id="wd-display-grade-as">
//                             <option value="1">Percentage</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-submission-type">Submission Type</label>
//                     </td>
//                     <td>
//                         <select id="wd-submission-type">
//                             <option value="1">Online</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td align="right" valign="top">

//                     </td>
//                     <td>
//                         <label>Online Entry Options</label>
//                         <br />
//                         <input type="checkbox" id="wd-text-entry" />
//                         <label htmlFor="wd-text-entry">Text Entry</label><br />

//                         <input type="checkbox" id="wd-website-url" />
//                         <label htmlFor="wd-website-url">Website Url</label><br />

//                         <input type="checkbox" id="wd-media-recordings" />
//                         <label htmlFor="wd-media-recordings">Media Recordings</label><br />

//                         <input type="checkbox" id="wd-student-annotation" />
//                         <label htmlFor="wd-student-annotation">Student Annotation</label> <br />

//                         <input type="checkbox" id="wd-file-upload" />
//                         <label htmlFor="wd-file-upload">File Upload</label>
//                     </td>

//                 </tr>
//                 <br />

//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-assign-to">
//                             Assign
//                         </label>
//                     </td>
//                     <td>
//                         <label htmlFor="wd-assign-to">Assign To</label>
//                         <br />
//                         <input id="wd-assign-to" value="Everyone" /><br /><br />

//                         <label htmlFor="wd-due-date">Due</label><br />
//                         <input type="date"
//                             id="wd-due-date"
//                             value="2000-01-21" /><br />
//                         <br />
//                         <table>
//                             <tr>
//                                 <td>
//                                     <label htmlFor="wd-available-from">Available From</label><br />
//                                     <input type="date"
//                                         id="wd-available-from"
//                                         value="2000-01-21" /><br />
//                                 </td>

//                                 <td>
//                                     <label htmlFor="wd-available-until">Until</label><br />
//                                     <input type="date"
//                                         id="wd-available-until"
//                                         value="2000-01-21" /><br />
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                 </tr>
//             </table>
//             <hr />
//             <table>
//                 <td align="left" valign="top">
//                     <button>Cancel</button>
//                 </td>
//                 <td align="left" valign="top">
//                     <button>Save</button>
//                 </td>

//             </table>

//         </div >
//     );
// }
import React from 'react';
import { AiOutlineArrowDown, AiOutlineDown } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4  wd-padding">
            <h4>Assignment Name</h4>
            <input id="wd-name" value="A1 - ENV + HTML" className="form-control mb-3" />

            <textarea id="wd-description" cols={40} rows={10} className="form-control mb-4">
                The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the Lab assignments, A link to the Kanbas application, Links to all the relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-points">Points</label>
                </div>
                <div className="col-md-4">
                    <input id="wd-points" value={100} className="form-control" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-group">Assignment Group</label>
                </div>
                <div className="col-md-4 position-relative">
                    <select id="wd-group" className="form-control">
                        <option value="1">
                            <div>
                                ASSIGNMENTS
                            </div>
                        </option>
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
                    <select id="wd-display-grade-as" className="form-control">
                        <option value="1">Percentage</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </div>
                <div className='col-md-4 wd-outline '>
                    <div className="">
                        <select id="wd-submission-type" className="form-control">
                            <option value="1">Online</option>
                        </select>
                    </div>
                    <br />
                    <div className="row mb-2">

                        <div className="col-md-10">
                            <label className="wd-title">Online Entry Options</label><br />
                            <input type="checkbox" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry" className="ms-2">Text Entry</label><br />

                            <input type="checkbox" id="wd-website-url" />
                            <label htmlFor="wd-website-url" className="ms-2">Website URL</label><br />

                            <input type="checkbox" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings" className="ms-2">Media Recordings</label><br />

                            <input type="checkbox" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation" className="ms-2">Student Annotation</label><br />

                            <input type="checkbox" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload" className="ms-2">File Upload</label><br />
                        </div>
                    </div>
                </div>

            </div>



            <div className="row mb-3">
                <div className="col-md-2">
                    Assign
                </div>
                <div className='col-md-4'>
                    <div>
                        <label htmlFor="wd-assign-to" className='wd-title'>Assign To</label>
                        <input id="wd-assign-to" value="Everyone" className="form-control mb-3" />
                        <label htmlFor="wd-due-date" className='wd-title'>Due</label><br />
                        <input type="date" id="wd-due-date" value="2000-01-21" className="form-control mb-3" />
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="wd-available-from" className='wd-title'>Available From</label>
                            <input type="date" id="wd-available-from" value="2000-01-21" className="form-control mb-3" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="wd-available-until" className='wd-title'>Until</label>
                            <input type="date" id="wd-available-until" value="2000-01-21" className="form-control mb-3" />
                        </div>
                    </div>
                </div>

            </div>
            <hr />
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}
