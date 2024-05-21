import {Outlet} from 'react-router-dom';

function Root() {
    return (
        <div id="main">
            <div id="menu">
                <nav>
                    <a>Students</a>
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