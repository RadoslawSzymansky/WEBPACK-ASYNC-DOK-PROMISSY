import React from "react"
const Title = props => {
    return (
        <React.Fragment>
            <h2>ToDo App</h2>
            <h3>Ilość zadań : {props.taskNumber}</h3>
        </React.Fragment>
    )
}
export default Title