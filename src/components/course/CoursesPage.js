import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'

class CoursesPage extends React.Component{
    constructor(props){
        super(props)

        // this.onTitleChange = this.onTitleChange.bind(this)
        // this.onClickSave = this.onClickSave.bind(this)
    }
    
    // onTitleChange(event){
    //     const course = this.state.course
    //     course.title = event.target.value
    //     this.setState({course: course})
    // }

    // onClickSave(event){
    //     // alert(`Saving  ${this.state.course.title}`)
    //     // this.props.dispatch(courseActions.createCourse(this.state.course))
    //     // this.props.createCourse(this.state.course)
    //     this.props.actions.createCourse(this.state.course)
    // }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>
    }

    render(){
        const {courses} = this.props
        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses    //checkout root reducer - courses comes from there
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)