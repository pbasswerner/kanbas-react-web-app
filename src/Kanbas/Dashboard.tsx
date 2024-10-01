import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard" style={{ paddingTop: "10px", paddingLeft: "20px" }}>

            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer course work
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflown-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1235/Home">
                                <img src="/images/hundred_years_of_solitude.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card card-title">
                                        CS1235 Magical Realism
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Explore Gabriel García Márquez's "One Hundred Years of Solitude"
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflown-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/2342/Home">
                                <img src="/images/labyrinth_of_solitude.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card card-title">
                                        CS2342 Mexican Psyche
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Dive into Octavio Paz's "The Labyrinth of Solitude"
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflown-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/2343/Home">
                                <img src="/images/fervor_of_buenos_aires.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card card-title">
                                        CS2343 Argentine Visions
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Journey through Jorge Luis Borges' "Fervor of Buenos Aires"
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflown-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/2344/Home">
                                <img src="/images/house_of_spirits.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card card-title">
                                        CS2344 Family Sagas
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Discover Isabel Allende's "The House of the Spirits"
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflown-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/2345/Home">
                                <img src="/images/like_water_for_chocolate.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card card-title">
                                        CS2345 Culinary Magic
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Savor Laura Esquivel's "Like Water for Chocolate"
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflown-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/2346/Home">
                                <img src="/images/city_of_beasts.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card card-title">
                                        CS2346 Adventures
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Embark on Isabel Allende's "City of the Beasts"
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflown-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/2347/Home">
                                <img src="/images/the_alchemist.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card card-title">
                                        CS2347 Personal Legends
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Follow Paulo Coelho's "The Alchemist"
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
