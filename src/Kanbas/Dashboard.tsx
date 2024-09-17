export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} height={120} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/hundred_years_of_solitude.jpg" width={200} height={120} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2341/Home">
                            CS2341 Magical Realism
                        </a>
                        <p className="wd-dashboard-course-title">
                            Explore Gabriel García Márquez's "One Hundred Years of Solitude"
                        </p>
                        <a href="#/Kanbas/Courses/2341/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/labyrinth_of_solitude.jpg" width={200} height={120} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2342/Home">
                            CS2342 The Mexican Psyche
                        </a>
                        <p className="wd-dashboard-course-title">
                            Dive into Octavio Paz's "The Labyrinth of Solitude"
                        </p>
                        <a href="#/Kanbas/Courses/2342/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/fervor_of_buenos_aires.jpg" width={200} height={120} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2343/Home">
                            CS2343 Argentine Visions
                        </a>
                        <p className="wd-dashboard-course-title">
                            Journey through Jorge Luis Borges' "Fervor of Buenos Aires"
                        </p>
                        <a href="#/Kanbas/Courses/2343/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/house_of_spirits.jpg" width={200} height={120} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2344/Home">
                            CS2344 Family Sagas
                        </a>
                        <p className="wd-dashboard-course-title">
                            Discover Isabel Allende's "The House of the Spirits"
                        </p>
                        <a href="#/Kanbas/Courses/2344/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/like_water_for_chocolate.jpg" width={200} height={120} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2345/Home">
                            CS2345 Culinary Magic
                        </a>
                        <p className="wd-dashboard-course-title">
                            Savor Laura Esquivel's "Like Water for Chocolate"
                        </p>
                        <a href="#/Kanbas/Courses/2345/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/city_of_beasts.jpg" width={200} height={120} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2346/Home">
                            CS2346 Amazonian Adventures
                        </a>
                        <p className="wd-dashboard-course-title">
                            Embark on Isabel Allende's "City of the Beasts"
                        </p>
                        <a href="#/Kanbas/Courses/2346/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/the_alchemist.jpg" width={200} height={120} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2347/Home">
                            CS2347 Personal Legends
                        </a>
                        <p className="wd-dashboard-course-title">
                            Follow Paulo Coelho's "The Alchemist"
                        </p>
                        <a href="#/Kanbas/Courses/2347/Home"> Go </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
