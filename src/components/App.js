import React from 'react'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import CoursesPage from './course/CoursesPage'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                <div>
                    <p>This is the layout</p>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>

                    <hr />

                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/courses" component={CoursesPage} />
                </ul>
                </div>
            </Router>
        )
    }
}

export default App