// import Dashboard from "./Dashboard";
// import KanbasNavigation from "./Navigation";
// import { Routes, Route, Navigate } from "react-router";
// import Courses from "./Courses";

// export default function Kanbas() {
//     return (
//         <div id="wd-kanbas">
//             <table>
//                 <tr>
//                     <td valign="top">
//                         <KanbasNavigation />
//                     </td>
//                     <td valign="top">
//                         <Routes>
//                             <Route path="/" element={<Navigate to="Dashboard" />} />
//                             <Route path="Account" element={<Navigate to="https://login.microsoftonline.com/a8eec281-aaa3-4dae-ac9b-9a398b9215e7/saml2?SAMLRequest=hZJPj9MwEMXvfIrId%2BeP22waq61UtkJU2oVqWzhwQRNnsrWUjIvH2YVvj5uCWA4s17Hf%2FN57miXD0J%2F1ZgwnesBvI3JIvg89sZ4eVmL0pB2wZU0wIOtg9GFzf6dVmuuzd8EZ14sXktcVwIw%2BWEci2W1X4mvXVG3VLmYyL5WS89I0ElR3I2uoVJMXVQUdiOQzeo6alYgropB5xB1xAApxlKu5zGtZVMei1GWllfoikm3MYQnCpDqFcGadZb17tJQO1njHrguOekuYGjdksEA0alFIAJjJeQsowdRNtDGrF02tihKr7JJOiWTzO8KtIx4H9Af0T9bgp4e7PyhyPpwQOKCn1EavfjRh9Ffa5GNaJ5L9rwrfWmotPb7eXnP9xPr98biX%2B4%2BHo1gvL3v01IlfX%2FD%2Fo08xltlL2fJ6BB8icLfdu96aH8k75wcI%2F%2FZTpMU0sa3spq96JD6jsZ3FNrbU9%2B751iMEXInIR5Gtr9C%2Fj2395ic%3D&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=okL5%2BHWRZuaDQtSTpg%2FZBZbutydebg0nCgrELRk8miz3o0ox3LMVI4AKB9unPFAdjKzkyK8UwTnM%2BbFIV%2B%2FlozttmBOpzWaFKKdmkNvoD68cCkfMKtM5PyZHXDM%2FV86YeLHIs%2B3w5VTNp718NQLAHs9%2F5ARtjLpN5%2Fxr%2FLrU32pNxbFtBucNMKnaKK9L41euTMm9w9ngzPV7OUto%2FNap5LJbpHXT6%2BI2g2NTKDPwf9kaNlbzb73p2ByPIgE%2FwhWPDAYSomT7fabnwGX2PRdCdijpHPE3HxxUdteJAcOfinRrEA02DOjIxMQRLi%2BbZfr%2FDhNiwLLXaNCEZb4eG37T6A%3D%3D" replace />} />
//                             <Route path="Dashboard" element={<Dashboard />} />
//                             <Route path="Courses/:id/*" element={<Courses />} />
//                             <Route path="Calendar" element={<h1>Calendar</h1>} />
//                             <Route path="Inbox" element={<h1>Inbox</h1>} />
//                         </Routes>
//                     </td>
//                 </tr>
//             </table>
//         </div>
//     );
// }
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <table>
                <tr>
                    <td valign="top">
                        <KanbasNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/Courses/:cid/*" element={<Courses />} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}

