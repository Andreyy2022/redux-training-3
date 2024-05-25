import {NavLink, Outlet} from 'react-router-dom';

function Root() {
    return (
        <div id="main">
            <div id="menu">
                <nav>
                    <NavLink to="/students" end>
                        Students
                    </NavLink>
                    <a>Teachers</a>
                </nav>
            </div>
            <div id="main_page">
                <h2>My Students App</h2>
                <hr></hr>
                <Outlet />
            </div>
        </div>
    )
}

export default Root;