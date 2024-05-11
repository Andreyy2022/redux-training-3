import { StudentsList } from "../parts/students/StudentsList";

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
                <StudentsList />
            </div>
        </div>
    )
}

export default Root;